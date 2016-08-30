/*
* Service Center - Polygon
* Manufacture - Square
* Regional distribution centers - Triangle
* Store -  Circle
*/
var serviceCenter = '../maps/icons/hexagon-16.png';
var manufacture = '../maps/icons/square-16.png';
var regDistCenter = '../maps/icons/triangle-16.png';
var store = '../maps/icons/circle-16.png';
var allStates = citiesMap;
console.log(allStates);

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: {lat: 38.5111, lng: -96.8005},
    mapTypeId: 'terrain'
  });

  function fetchLogLat (cityData) {
    var longLat = cityData.ll.split(",");
    console.log(longLat);
    return longLat;
  }
  function generateRandomPaths() {
    for(var i = 1; i<100; i++) {
      var flightPlanCoordinates = [];
      for(var j = 1; j<5; j++) {
        var randomArea = Math.floor(Math.random()*allStates.length);
        console.log(randomArea);
        var getLL = fetchLogLat(allStates[randomArea]);
        //break;
        var latitude = getLL[0];
        var longitude = getLL[1];
        var cordi = {lat: parseFloat(latitude), lng: parseFloat(longitude)}

        if(j == 1) {
          drawNewSpots(cordi, serviceCenter);
          console.log("1: "+j);
        } else if (j == 2) {
          drawNewSpots(cordi, manufacture);
          console.log("2: "+j);
        } else if (j == 3) {
          drawNewSpots(cordi, regDistCenter);
          console.log("3: "+j);
        } else if (j == 4) {
          drawNewSpots(cordi, store);
          console.log("4: "+j);
        }
        flightPlanCoordinates.push(cordi);
      }
      drawPath(flightPlanCoordinates);
    }
  }
  function drawPath(fPathCoordinates) {
    console.log("------");
    console.log(fPathCoordinates);
    var color = "#FF0000";
    //var color = generateRandomColors ();
    console.log(color);
    var flightPath = new google.maps.Polyline({
      path: fPathCoordinates,
      geodesic: true,
      strokeColor: color,
      strokeOpacity: 1.0,
      strokeWeight: 1,
    });
    flightPath.setMap(map);
  }

  function generateRandomColors () {
    return "#"+((1<<24)*Math.random()|0).toString(16);
  }
  var flightPlanCoordinatesss = [

    {lat: 36.17, lng: -119.7462}, // CA
    {lat: 32.799, lng: -86.8073}, // AR
    {lat: 34.9513, lng: -92.3809}, // AL
  ];
  console.log(flightPlanCoordinatesss);
  generateRandomPaths();


  function generateRandomSpots() {
    for(var i = 0; i<20; i++) {
      var randomArea = Math.floor(Math.random()*allStates.length);
      var latitude = allStates[randomArea].latitude;
      var longitude = allStates[randomArea].longitude;
      var cordi = {lat: parseFloat(latitude), lng: parseFloat(longitude)}
      drawSpots(cordi);
      }

    }

    function drawSpots(fPathCoordinates) {
      console.log("------");
      console.log(fPathCoordinates);
      var color = "#FF0000";
      //var color = generateRandomColors ();
      console.log(color);
      var beachMarker = new google.maps.Marker({
        position:   fPathCoordinates,
        map: map,
        icon:serviceCenter
      });
    }
    function drawNewSpots(fPathCoordinates, iconId) {
      //iconId = regDistCenter;
      var beachMarker = new google.maps.Marker({
        position:   fPathCoordinates,
        map: map,
        icon: iconId
      });
    }
  //generateRandomSpots();


  /*var flightPlanCoordinates = [

    {lat: 36.17, lng: -119.7462}, // CA
    {lat: 32.799, lng: -86.8073}, // AR
    {lat: 34.9513, lng: -92.3809}, // AL
  ];

  var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: false,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 1,
  });

  var beachMarker = new google.maps.Marker({
    position:   {lat: 35.92, lng: -119.7462},
    map: map,
    icon:serviceCenter
  });

  var beachMarker1 = new google.maps.Marker({
    position:    {lat: 34.7013, lng: -92.3809},
    map: map,
    icon:manufacture
  });

  var beachMarker2 = new google.maps.Marker({
    position:    {lat: 32.549, lng: -86.8073},
    map: map,
    icon:regDistCenter
  });

   var flightPlanCoordinates1 = [
  	{lat: 36.17, lng: -119.7462},
    {lat: 41.1289, lng: -98.2883},
    //{lat: 34.9513, lng: -92.3809},
    //{lat: 14.2417, lng: -170.7197}

  ]
  var flightPath1 = new google.maps.Polyline({
    path: flightPlanCoordinates1,
    geodesic: false,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 1
  });*/


  //flightPath1.setMap(map);
}
