var storesData = stores;
var totalNumberOfStores = storesData.length;

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: {lat: 38.5111, lng: -96.8005},
    //mapTypeId: 'terrain',
    mapTypeId: 'satellite',
    //disableDefaultUI: true
  });

  function getPoints() {
    var data = [];
    for(var i = 0; i<totalNumberOfStores; i++) {
      var latitude = storesData[i].latitude;
      var longitude = storesData[i].longitude;
      data.push(new google.maps.LatLng(latitude, longitude));
    }
    return data;
  }

  function showHeatMap() {
    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: getPoints(),
      map: map
    });
    heatmap.setMap(map);
  }

  showHeatMap();
}
