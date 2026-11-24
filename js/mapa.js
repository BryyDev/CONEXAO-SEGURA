// Cria um mapa dentro da div informada.
// Assim, a mesma configuração pode ser reutilizada em vários mapas.
function criarMapa(container, center, zoom = 15) {
  const mapa = new maplibregl.Map({
    container,
    // Troque esta URL para usar outro estilo de mapa.
    style: 'https://api.maptiler.com/maps/streets-v2-dark/style.json?key=1210fmf60PURWzVOx1Ow',
    // Coordenadas no formato [longitude, latitude].
    center,
    // Aumente o zoom para aproximar e diminua para afastar.
    zoom,
    // Inclinação 3D e rotação horizontal da câmera.
    pitch: 60,
    bearing: -20
  });

  // Permite girar e rotacionar o mapa com o mouse ou toque.
  mapa.dragRotate.enable();
  mapa.touchZoomRotate.enableRotation();

  mapa.on('load', () => {
    const layers = mapa.getStyle().layers;

    layers.forEach((layer) => {
      if (layer.id.includes('building') && layer.type === 'fill-extrusion') {
        // Personaliza a aparência dos prédios 3D.
        mapa.setPaintProperty(layer.id, 'fill-extrusion-color', '#1a1e23');
        mapa.setPaintProperty(layer.id, 'fill-extrusion-opacity', 0.95);
        mapa.setPaintProperty(layer.id, 'fill-extrusion-height', ['get', 'render_height']);
      }
    });
  });

  return mapa;
}

// Mapa da região (div id="map" do noticias.html).
// Centro inicial: Diadema. Troque as coordenadas [longitude, latitude] se quiser outro lugar.
const map = criarMapa('map', [-46.6228, -23.6861], 13);

// Busca de lugares e mensagens de status do mapa.
const searchForm = document.querySelector('#map-search-form');
const searchInput = document.querySelector('#map-search-input');
const searchStatus = document.querySelector('#map-search-status');
let searchMarker;

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = searchInput.value.trim();
  if (!query) {
    searchStatus.textContent = 'Digite um lugar para procurar.';
    return;
  }

  searchStatus.textContent = 'Procurando...';

  try {
    const encodedQuery = encodeURIComponent(query);
    const response = await fetch(
      `https://api.maptiler.com/geocoding/${encodedQuery}.json?key=1210fmf60PURWzVOx1Ow&language=pt`
    );

    if (!response.ok) {
      throw new Error(`Busca falhou com status ${response.status}.`);
    }

    const data = await response.json();
    const result = data.features?.[0];

    if (!result || !result.center) {
      searchStatus.textContent = 'Nenhum lugar encontrado.';
      return;
    }

    if (searchMarker) {
      searchMarker.remove();
    }

    searchMarker = new maplibregl.Marker()
      .setLngLat(result.center)
      .setPopup(new maplibregl.Popup().setText(result.place_name || result.text || query))
      .addTo(map);

    map.flyTo({
      center: result.center,
      zoom: 16,
      essential: true
    });

    searchStatus.textContent = result.place_name || 'Lugar encontrado.';
  } catch (error) {
    console.error('Erro ao procurar lugar:', error);
    searchStatus.textContent = 'Não foi possível realizar a busca.';
  }
});

// A localização do usuário será aplicada ao mapa.
// Os avisos de erro aparecem na mensagem de status do mapa (em vez de alert),
// para não interromper quem só está lendo as notícias.
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lon = position.coords.longitude;
      const lat = position.coords.latitude;

      console.log('Sua localização:', lon, lat);

      map.flyTo({
        center: [lon, lat],
        zoom: 16,
        pitch: 60,
        essential: true,
        duration: 3000
      });
    },
    (error) => {
      console.error('Erro ao obter localização:', error);
      searchStatus.textContent = 'Não foi possível obter sua localização. Verifique as permissões do navegador.';
    }
  );
} else {
  searchStatus.textContent = 'Seu navegador não suporta geolocalização.';
}

// Exemplo para adicionar um marcador no mapa:
// new maplibregl.Marker()
//   .setLngLat([-46.6228, -23.6861])
//   .addTo(map);