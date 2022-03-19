// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/outdoors-v11',
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Add GeoJSON Data.
let sanFranAirport =
{
    "type":"FeatureCollection",
    "features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "popupContent": "SFO",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
    "geometry":{
        "type":"Point",
        // Coordinates in GeoJSON Data such as this are inputted 
        // in reverse order compared to .setView() in our map layer ^
        // ...that is: X (longitude) as 1st parameter, 
        // then Y (latitude) as 2nd parameter
        "coordinates":[-122.375, 37.61899948120117]}}
]};

// GeoJSON objects are added to the map through a GeoJSON layer for Leaflet called as such:
    // L.geoJSON(geojsonFeature).addTo(map);

// Grabbing our GeoJSON data. Basic Format !
    // L.geoJSON(sanFranAirport).addTo(map);
//



// You can use the pointToLayer callback function to add markers 
// to the map that add viewable data for a point on the map

//      Example: 
//          L.geoJson(data, {
//              pointToLayer: function(feature, latlng) {
//                  return L.marker(latlng);
//              }
//          });

//      Example with Circle Marker:
//          L.geoJson(data, {
//              pointToLayer: function(feature, latlng) {
//                  return L.cirlceMarker(latlng);
//              }
//          });


// METHOD 1 //
// // Grabbing our GeoJSON data. Using pointToLayer callback function method
// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//         console.log(feature);
//         return L.marker(latlng)
//         // Develop & Bind Popups on the markers using the .bindPopup() Method:
//         .bindPopup("<h2>" + feature.properties.city + " , " + feature.properties.country + "<h2> <hr> <h3>Airport: " + feature.properties.name + "<h3> <hr> <h3>Coordinates: " + feature.geometry.coordinates + "<h3>")
//     }

// }).addTo(map);



// You can use the onEachFeature callback function to add popup markers 
// to the map for every feature and add data from the propeties of the JS object

//      Example: 
//          L.geoJSON(data, {
//              onEachFeature: function(feature, layer) {
//                  layer.bindPopup();
//              }
//          });


// METHOD 2 //
// Grabbing our GeoJSON data. Using onEachFeature callback function method
L.geoJSON(sanFranAirport, {
    onEachFeature: function(feature, layer) {
        console.log(layer);
        layer.bindPopup("<h2>" + feature.properties.city + " , " + feature.properties.country + "<h2> <hr> <h3>Airport: " + feature.properties.name + "<h3> <hr> <h3>Coordinates: " + feature.geometry.coordinates + "<h3>");
    }
}).addTo(map);



