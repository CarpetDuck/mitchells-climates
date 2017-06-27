import { mapStyles } from '../classes/mapStyles'
import { locations } from '../classes/locations'
import { contentStrings } from '../classes/contentStrings'

export default function initMap() {
  let google = window.google

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: locations[1],
    styles: mapStyles
  });

  var labels = ['Perth', 'Margaret River', 'Uluru', 'Melbourne'];

  var icons = {
    marker: {
      icon: 'locationmarkerblue.png'
    }
  }


  var infoWindow = new google.maps.InfoWindow({
    disableAutoPan: true
  });

  var markers = locations.map(function(location, i) {
    var marker = new google.maps.Marker({
      position: location,
      icon: icons['marker'].icon,
      label: labels[i % labels.length]
    });

    marker.addListener('mouseover', function() {
      disableAutoPan: true,
        infoWindow.setContent(contentStrings[i % labels.length]),
        infoWindow.open(map, marker);
    });

    return marker
  });

  var markerCluster = new window.MarkerClusterer(map, markers,
    {imagePath: 'markerclusterer.png'});
}
