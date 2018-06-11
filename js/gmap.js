var mapLocation = new google.maps.LatLng(50.63308,3.019931300000053); //change coordinates here
var marker;
var map;

function initialize() {
    var mapOptions = {
        zoom: 16, //change zoom here
        center: mapLocation
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

    var image = 'img/flag.png';
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        title: 'Euratechnologies', //change title here
        icon: image,
        animation: google.maps.Animation.DROP,
        animation: google.maps.Animation.BOUNCE,
        position: mapLocation
    });
    google.maps.event.addListener(marker, 'click', toggleBounce);
}

function toggleBounce() {

    if (marker.getAnimation() != null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

google.maps.event.addDomListener(window, 'load', initialize);
