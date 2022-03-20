// Create the map object with center and zoom level.
// This is the mapping development technique we'd usually use for simpler maps:
    // let map = L.map('mapid').setView([30, 30], 2);
// But, because we want to create a map with toggleable base layers...
// We will use the alternative method later on - after our base Layer is established


// Adding Map TileLayers
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: API_KEY
});

//
// NOW we want to add another (toggleable) Map TileLayer 
// to our html using Leaflet Layers Control
//

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//
// NOW we can add both Map TileLayer variables to a new variable
// This will combine the layers into a single amalgamated BaseLayer
//

// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
};


// ALTERNATIVE MAP DEVELOPMENT TECHNIQUE
// Create the map object with center, zoom level, and default layer.
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
});

// NOW, we will:
// Pass our map layers into our layers control and add the layers
L.control.layers(baseMaps).addTo(map);


// Then we add our 'graymap' tile layer to the map.
// When adding multiple maps, though, we can postpone adding 
// the layer to the map with "light.addTo(map)"
//
// This is because we will create a base layer 
// to hold BOTH maps on a single, toggleable layer
//
    // light.addTo(map);
    // dark.addTo(map);
//


// Accessing the Topical Official Global USGS Earthquake data 
// from the USGS official website and database
let allEarthquakes = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// // Create a style for the lines.
// let myStyle = {
//     lineColor: "blue",
//     fillColor: "yellow",
//     weight: 2
// }

// Grabbing our GeoJSON data.
d3.json(allEarthquakes).then(function(data) {
    console.log(data);

    // This function returns the style data for each of the earthquakes we plot on
    // the map. We pass the magnitude of the earthquake into a function
    // to calculate the radius.
    function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: "#ffae42",
      color: "#000000",
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 0.5
    };
  }
    
    // This function determines the radius of the earthquake marker based on its magnitude.
    // Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
    function getRadius(magnitude) {
        if (magnitude === 0) {
            return 1;
        }
        return magnitude * 4;
    }

    // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {

    // We turn each feature into a circleMarker on the map.
    
    pointToLayer: function(feature, latlng) {
                console.log(data);
                return L.circleMarker(latlng);
            },
            // We set the style for each circleMarker using our styleInfo function.
          style: styleInfo
          }).addTo(map);
      });

// Access this via the index.html [clicking "Go Live" down below]
// Or 
// Access this via the command line [typing "python -m http.server"]




