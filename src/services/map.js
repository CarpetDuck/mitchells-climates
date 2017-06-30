import { mapStyles } from '../classes/mapStyles'
import { locations} from '../classes/locations'

export default function initMap() {
  let google = window.google

  let firstLocation = locations[1]

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: firstLocation.coordinates,
    styles: mapStyles
  });

  var labels = ['Perth', 'Margaret River', 'Uluru', 'Melbourne'];

  var icons = {
    marker: {
      icon: './images/locationmarkerblue.png'
    }
  }


  var infoWindow = new google.maps.InfoWindow({
    disableAutoPan: true,
    maxWidth: 200,
    maxHeight: 50,
  });

  var markers = locations.map(function(location, i) {
    var marker = new google.maps.Marker({
      disableAutoPan: true,
      position: location.coordinates,
      icon: icons['marker'].icon,
      label: labels[i % labels.length],
    });

    let contentString = `
      <div>
        <div class="content">
            <div class="siteNotice"></div>
        </div>
        
        <h1 class="firstHeading">
            ${location.projectName}
        </h1>
        <div class="bodyContent">
          
          <p class="locationSite">
            <b>${location.site}</b>
          </p>
          <p>
            ${location.content}
            <a href="${location.url}"></a>
          </p>
        </div>
 
      </div>
    `

    marker.addListener('mouseover', function() {
      infoWindow.setContent(contentString)
      infoWindow.open(map, marker);
    });

    return marker
  });

  var markerCluster = new window.MarkerClusterer(map, markers,
    {imagePath:'./images/m'});
}

// marker label text colour
// infowindow sizes