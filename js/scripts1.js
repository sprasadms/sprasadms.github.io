/*
* Service Center - Polygon
* Manufacture - Square
* Regional distribution centers - Triangle
* Store -  Circle
* MAY 6 2014 - https://icons8.com/web-app/new-icons/android
* Media Controls - https://icons8.com/web-app/category/android/Media-Controls
*/
/*var serviceCenter = '../maps/icons/hexagon-16.png';
var manufacture = '../maps/icons/square-16.png';
var regDistCenter = '../maps/icons/triangle-16.png';
var store = '../maps/icons/circle-16.png';
*/
var serviceCenter = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1klEQVQ4T62S4RGCMAyFX5nAEZqzC7gBTqBs4AY6im7gBrKBOoELwDUjMAH1Cqi0lIKn+dkkX95LI/BjiFi/lnph88RUjdVNAIocgCFW2dcALYstIC5to8mIlYUNIqiglV5rAI0FABWQUMjKCMBKFxt3nMlDVgYALXUK1New52RNTLd+zgF00h8A5MjSGEhWfSseoDwC2E+cxol4eXjVvAFx6T7yY6UHKM4R6T6BidXOPkYPac6VexZg5jR15313FGhZzm5uActmeH8Hzv9OKSFW6V928AQv7EYRIGDRnAAAAABJRU5ErkJggg==';
var manufacture = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAASElEQVQoU2NkIBEwgtRX6Nx2YGJgssen9x/Dv4MdV1QPgDVU6dxuYGBgrMdv2f/GtiuqDaMaaBdKkIhjcMAfcQwH4BFHSuoAAKLVPQ0hWb7FAAAAAElFTkSuQmCC';
var regDistCenter = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8klEQVQ4T6WTOw6CQBCGZxSCpTdQC6hBLqAnUE+gNAZPpLEBb4An0Asg1FioN7CU8BizGhLBhaBstcnO/83+80BoeLBKr24Dlb37S8UviysFqNalK4TRgQljSRz7xuDOg5QC9HVgI+KciQjIdk3FqA0YroNFC9H6FKRExmml2EXI1w+YbyFFj5ctbpFWrEcOwHy3w8hDwD4PQEDXRBK1z3rkAPrm7CDApKozBOC4pjzLYv4B7F1TnnIBLwuP2EeEHtcCwS3pCGqpBSZqVMQsa6M2ZpDcIBHt3JWyqD1ILyvvlh7ZPZHE0c+jnNXj72Wqu+VPAnlpEX2G9rUAAAAASUVORK5CYII=';
//var store = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAuklEQVQoU51SsQ3CMBD0pQLJBSOkTyxgA5gEUiYVm5CKlMAkMEKsOH1GoLAE3SEHObKQQAFX9vvu/t5niGAdkmQngA2AhSuTrAVZFm179jC4zTGOZ3cpLx4Yinji1Np11nW3nlClaS2A+TswPLtuhTFLOBuIov03cHCXYYy6J7guqJTiSPUe9gdhxMCDA1L/PvTYZxWkzo1ZDME9pLx+zILUE2tXQ3DeY6XUVpDue7xCJLUAyrxpTh7zBPqjTgsSfSZeAAAAAElFTkSuQmCC';
var store = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAnUlEQVQoU52RsRWCQBBEZ2wJcjGDjAIQS6CFowNL8IG5zwhCyM+WHN+dogY8PLlwb/7uzizx5+O3PsqKnGIFMvF1aQBU2/48TLo3EKXlicRhdqBQ274x7s8DvjM2l8XtdN+5SR6Is/0AcLtsR6Pt2uQFlArxbruGa4HfK0m63vo2X2f6mVR5JFAFxTqJ4rRIQJpPYhohmdnDhaTkNA8+Q0MNP+MHiQAAAABJRU5ErkJggg==';
var allStates = citiesMap;
console.log(allStates);
var allStates1 = states;
console.log(allStates1);

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
    for(var i = 1; i<20; i++) {
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
    for(var i = 0; i<allStates1.length; i++) {
      //var randomArea = Math.floor(Math.random()*allStates1.length);
      var latitude = allStates1[i].latitude;
      var longitude = allStates1[i].longitude;
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
