jQuery(function ($) {
    function init_map1() {
        var mylocation = new google.maps.LatLng(-23.4867542,-47.4487009,18);
        var mapOption = {
            center: mylocation,
            zoom:16
        };
        var marker = new google.maps.Marker({
            position: mylocation,
            title: "Localização"
        });
        var map = new google.maps.Map(document.getElementById("map1"),
            mapOption);
            marker.setMap(map);
    }
    init_map1();
});