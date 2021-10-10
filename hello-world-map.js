var gMap;

function initMap() {
  gMap = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -3, lng: 15.644 },
    zoom: 8
  });
  var marker = new google.maps.Marker({position:{lat:13.7565, lng:121.0583}, map:gMap});

  google.maps.event.addListener(gMap,'bounds_changed',function() {
    console.log("Bounds have changed.")
}
);
}





function initApplication() {
    console.log('Map Mania Lite - Starting!');
}

