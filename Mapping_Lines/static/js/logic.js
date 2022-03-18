// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/outdoors-v11',
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Coordinates for each point to be used in the line.
// These line coordinates correspond to the airline route from LAX to SFO
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790]
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "red"
}).addTo(map);


// NOW map Multiple Lines

// Coordinates for each point to be used in the polyline.
let lines = [
    [34.0416, -118.4085],
    [37.7213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

// Create a polyline using the line coordinates and make the line yellow.
L.polyline(lines, {
    color: "yellow"
 }).addTo(map);
 