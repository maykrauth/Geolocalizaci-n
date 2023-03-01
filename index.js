let marker, map;

function initMap() {
    const posicion = {
        //estandar
        lat:-25.363,
        lng: 131.044
    }
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion
    })
    marker = new google.maps.Marker({
        position: posicion,
        map,
        title: "Posición Inicial"
    })
    //marker.setPosition({lat, lng})
    //obtener la geolocalizacion
    geoPosiciona()
}
function geoPosiciona () {
    if (navigator.geolocation) {
    const geoLoc = navigator.geolocation
    const options = {timeout: 60000}
    const watchPos = geoLoc.watchPosition(centraMaps, onError, options)
    } else {
        alert( "Tu navegador no admite la geolocalización")
    }
}
function centraMaps(position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    console.log(nuevaPos)
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error) {
    console.error(error);
}