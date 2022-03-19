// Create the map object with center and zoom level.
// This is the mapping development technique we'd usually use for simpler maps:
    // let map = L.map('mapid').setView([30, 30], 2);
// But, because we want to create a map with toggleable base layers...
// We will use the alternative method later on - after our base Layer is established


// Adding Map TileLayers
// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    accessToken: API_KEY
});

//
// NOW we want to add another (toggleable) Map TileLayer 
// to our html using Leaflet Layers Control
//

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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
    Day_Navigation: light,
    Night_Navigation: dark
};


// ALTERNATIVE MAP DEVELOPMENT TECHNIQUE
// Create the map object with center, zoom level, and default layer.
let map = L.map('mapid', {
    center: [44, -80],
    zoom: 2,
    layers: [light]
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


// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/sterlingvm/Mapping_Earthquakes/GeoJSON/torontoRoutes.json";

// Create a style for the lines.
let myStyle = {
    color: "#ffffa1",
    weight: 2
}

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJSON(data, {
        // Implement your style specifications
        style: myStyle,
        // Using onEachFeature recall function to .bindPopup() popups for each data point
        color: "yellow",
        weight: 2,
        onEachFeature: function(feature, layer) {
            console.log(layer);
            layer.bindPopup("<h2>" + feature.properties.airline + "<h2> <hr> <h3>Airport Code: " + feature.properties.airline_id + "<h3> <hr> <h3> Destination: " + feature.properties.dst + "<h3>")
        }
    }).addTo(map)
});

// Access this via the index.html [clicking "Go Live" down below]
// Or 
// Access this via the command line [typing "python -m http.server"]




