// Leaflet.js Marker syntax for Leaflet.js map
// Use marker() function
var marker = L.marker([51.5, -0.09]).addTo(map);

//  Add a marker to the map for Los Angeles, California.
// Use marker() function
let marker = L.marker([34.0522, -118.2437]).addTo(map);

//  Add a circle marker to the map for Los Angeles, California.
// Use circle() function
L.circle([33.0522, -118.2437], {
    radius: 100,
    color: blue,
    interactive: true,
    weight: 300
 }).addTo(map);

 // OR USE circleMarker() function
 L.circleMarker([35.0522, -118.2437]).color(blue).radius(100).interactive(true).weight(300).addTo(map);

 // We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}')
