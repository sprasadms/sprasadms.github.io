// Global Configuration Variables
var totalNodes = 100;
var pathColor = "#BA55D3"; //"#FF0000";
var CENTERS = {
  RETAILER : "Retailer",
  MANUFACTURER : "Manufacturer",
  DISTRIBUTOR : "Distributor",
  SERVICECENTER : "Service Center",
  UNKNOWN : "????"
}

/*var serviceCenter = '../maps/icons/hexagon-16.png';
var manufacture = '../maps/icons/square-16.png';
var regDistCenter = '../maps/icons/triangle-16.png';
var store = '../maps/icons/circle-16.png';
*/

var serviceCenter = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1klEQVQ4T62S4RGCMAyFX5nAEZqzC7gBTqBs4AY6im7gBrKBOoELwDUjMAH1Cqi0lIKn+dkkX95LI/BjiFi/lnph88RUjdVNAIocgCFW2dcALYstIC5to8mIlYUNIqiglV5rAI0FABWQUMjKCMBKFxt3nMlDVgYALXUK1New52RNTLd+zgF00h8A5MjSGEhWfSseoDwC2E+cxol4eXjVvAFx6T7yY6UHKM4R6T6BidXOPkYPac6VexZg5jR15313FGhZzm5uActmeH8Hzv9OKSFW6V928AQv7EYRIGDRnAAAAABJRU5ErkJggg==';
var manufacture = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAASElEQVQoU2NkIBEwgtRX6Nx2YGJgssen9x/Dv4MdV1QPgDVU6dxuYGBgrMdv2f/GtiuqDaMaaBdKkIhjcMAfcQwH4BFHSuoAAKLVPQ0hWb7FAAAAAElFTkSuQmCC';
var regDistCenter = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8klEQVQ4T6WTOw6CQBCGZxSCpTdQC6hBLqAnUE+gNAZPpLEBb4An0Asg1FioN7CU8BizGhLBhaBstcnO/83+80BoeLBKr24Dlb37S8UviysFqNalK4TRgQljSRz7xuDOg5QC9HVgI+KciQjIdk3FqA0YroNFC9H6FKRExmml2EXI1w+YbyFFj5ctbpFWrEcOwHy3w8hDwD4PQEDXRBK1z3rkAPrm7CDApKozBOC4pjzLYv4B7F1TnnIBLwuP2EeEHtcCwS3pCGqpBSZqVMQsa6M2ZpDcIBHt3JWyqD1ILyvvlh7ZPZHE0c+jnNXj72Wqu+VPAnlpEX2G9rUAAAAASUVORK5CYII=';
var store = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAnUlEQVQoU52RsRWCQBBEZ2wJcjGDjAIQS6CFowNL8IG5zwhCyM+WHN+dogY8PLlwb/7uzizx5+O3PsqKnGIFMvF1aQBU2/48TLo3EKXlicRhdqBQ274x7s8DvjM2l8XtdN+5SR6Is/0AcLtsR6Pt2uQFlArxbruGa4HfK0m63vo2X2f6mVR5JFAFxTqJ4rRIQJpPYhohmdnDhaTkNA8+Q0MNP+MHiQAAAABJRU5ErkJggg==';

var storesData = storeList;
var totalStores = storesData.length;

var manufacturerData = manufacturerList;
var totalManufacturers = manufacturerData.length;

var serviceCenterData = serviceCenterList;
var totalServiceCenters = serviceCenterData.length;

var distributorData = distributorList;
var totalDistributors = distributorData.length;

/*
console.log(totalStores);
console.log(totalManufacturers);
console.log(totalDistributors);
console.log(totalServiceCenters);
*/

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 38.5111, lng: -96.8005},
    mapTypeId: 'terrain',
    //disableDefaultUI: true
  });

  function generateRandomPaths() {

    var flightPlanCoordinates = [];

    for(var i = 1; i<totalNodes; i++) {

      if (i % 7 === 0) {
        var randomArea = Math.floor(Math.random()*totalServiceCenters);
        console.log(randomArea);
        var currentNode = serviceCenterData[randomArea];
        var latitude = currentNode.latitude;
        var longitude = currentNode.longitude;
        var cordi = {lat: parseFloat(latitude), lng: parseFloat(longitude)}
        var cordi1 = {lat: parseFloat(latitude)-0.25, lng: parseFloat(longitude)}

        drawNodes(cordi1, serviceCenter, currentNode);
        console.log("4: "+i);
        flightPlanCoordinates.push(cordi);
        drawPath(flightPlanCoordinates);

      } else if (i % 5 === 0) {

        var randomArea = Math.floor(Math.random()*totalManufacturers);
        console.log(randomArea);
        var currentNode = manufacturerData[randomArea];
        var latitude = currentNode.latitude;
        var longitude = currentNode.longitude;
        var cordi = {lat: parseFloat(latitude), lng: parseFloat(longitude)}
        var cordi1 = {lat: parseFloat(latitude)-0.25, lng: parseFloat(longitude)}

        drawNodes(cordi1, manufacture, currentNode);
        console.log("3: "+i);
        flightPlanCoordinates.push(cordi);

      } else if (i % 3 === 0) {

        var randomArea = Math.floor(Math.random()*totalDistributors);
        console.log(randomArea);
        var currentNode = distributorData[randomArea];
        var latitude = currentNode.latitude;
        var longitude = currentNode.longitude;
        var cordi = {lat: parseFloat(latitude), lng: parseFloat(longitude)}
        var cordi1 = {lat: parseFloat(latitude)-0.25, lng: parseFloat(longitude)}

        drawNodes(cordi1, regDistCenter, currentNode);
        console.log("2: "+i);
        flightPlanCoordinates.push(cordi);
      } else if(i % 1 === 0) {

        var randomArea = Math.floor(Math.random()*totalStores);
        console.log(randomArea);
        var currentNode = storesData[randomArea];
        var latitude = currentNode.latitude;
        var longitude = currentNode.longitude;
        var cordi = {lat: parseFloat(latitude), lng: parseFloat(longitude)}
        var cordi1 = {lat: parseFloat(latitude)-0.25, lng: parseFloat(longitude)}

        drawNodes(cordi, store, currentNode);
        console.log("1: "+i);
        flightPlanCoordinates.push(cordi);

      }
      console.log(currentNode);
    }
  }

  function drawPath(fPathCoordinates) {
    var flightPath = new google.maps.Polyline({
      path: fPathCoordinates,
      geodesic: true,
      strokeColor: pathColor,
      strokeOpacity: 1.0,
      strokeWeight: 1,
    });
    flightPath.setMap(map);
  }

  function generateRandomColors () {
    return "#"+((1<<24)*Math.random()|0).toString(16);
  }

  function getNodeType(nodeId) {
    var nodeType;
    switch (nodeId) {
      case store:
        nodeType = CENTERS.RETAILER;
        break;
      case manufacture:
        nodeType = CENTERS.MANUFACTURER;
        break;
      case regDistCenter:
        nodeType = CENTERS.DISTRIBUTOR;
        break;
      case serviceCenter:
        nodeType = CENTERS.SERVICECENTER;
        break;
      default:
        nodeType = CENTERS.UNKNOWN;
        break;
    }
    return nodeType;
  }

  function buildTemplate(nodeType, currentNode) {
    var template =
        '<div class="content">'+
          '<div class="siteNotice"></div>'+
          '<h2 class="firstHeading">'+nodeType+'</h2>'+
          '<div class="bodyContent">'+
            '<p><b>Name: </b>'+ currentNode.name +'</p>'+
            '<p><b>Address: </b> '+'<br/>'+ currentNode.address +'<br/>'+
            currentNode.city +', '+ currentNode.state +' '+ currentNode.zipcode + '</p>' +
            '<p><b>Location ID: </b><span class="locationId"> ' + currentNode.locationID +'</span></p>'+
            '<p><b>Status: </b><span class="active"> ' + currentNode.chepStatus +'</span></p>'+
            '<p><b>Affiliation: </b><span class=""> ' + currentNode.chepAffiliation +'</span></p>'+
            '<p><b>Sub-Affiliation: </b><span class=""> ' + currentNode.chepSubAffiliation +'</span></p>'+
            '<p><b>Service Type: </b><span class=""> ' + currentNode.chepServiceType +'</span></p>'+
            '<p><b>Channel: </b><span class=""> ' + currentNode.chepChannel +'</span></p>'+
            '<p><b>Company Code: </b><span class=""> ' + currentNode.chepCompanyCode +'</span></p>'+
            '<p><b>Type: </b><span class=""> ' + currentNode.custom1+ ', ' +
              currentNode.custom2 + ', ' +currentNode.custom3 +'</span></p>'+
          '</div>'+
        '</div>';

    return template;
  }

  function drawNodes(fPathCoordinates, iconId, currentNode) {

    var nodeType = getNodeType(iconId);

    var contentString = buildTemplate (nodeType, currentNode);

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    var beachMarker = new google.maps.Marker({
      position:   fPathCoordinates,
      map: map,
      icon: iconId
    });

    beachMarker.addListener('click', function() {
      infowindow.open(map, beachMarker);
    });
  }

  generateRandomPaths();
}
