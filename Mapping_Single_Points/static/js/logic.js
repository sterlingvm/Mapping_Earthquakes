// Create the map object with a lat-long coordinate center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Leaflet.js Marker syntax for Leaflet.js map
// Use marker() function
var marker1 = L.marker([51.5, -0.09]).addTo(map);

//  Add a marker to the map for Los Angeles, California.
// Use marker() function
let marker2 = L.marker([34.0522, -118.2437]).addTo(map);

// Add a circle marker to the map for Los Angeles, California.
// Use circle() function
L.circle([30.0522, -118.2437]).addTo(map);

 // OR USE circleMarker() function
 L.circleMarker([35.0522, -118.2437], {radius: 10}).addTo(map);
 

 