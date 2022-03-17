// Leaflet.js setup Guide:
    // Link: https://leafletjs.com/SlavaUkraini/examples/quick-start/
// Leaflet.js documentation & techniques:
    // Link: https://leafletjs.com/SlavaUkraini/reference-1.6.0.html#map-example

// Add console.log to check to see if our code is working.
console.log("working");


// Create the map object with a lat-long coordinate center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);
// L.map('mapid') is the map object activated with the parameter 
// that links to the html bod <div/> with id='mapid'

// Create the map object with a center and zoom level. [ALTERNATIVE]
    // let map = L.map("mapid", {
    //     center: [
    //       40.7, -94.5
    //     ],
    //     zoom: 4
    //   });
  
// We create the tile layer that will be the background of our map.
// You can find this tile layer code @ Leaflet.js setup Guide ^ top of page
    // EXAMPLE:
    // let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //     maxZoom: 18,
    //     id: 'mapbox/streets-v11',
    //     tileSize: 512,
    //     zoomOffset: -1,
    //     accessToken: API_KEY
    // });
    // // Then we add our 'graymap' tile layer to the map.
    // streets.addTo(map);


// Mapbox Style Options
// Change your map style by replacing the id variable value
// to any of the following Mapbox ids:
    //  mapbox/streets-v11
    //  mapbox/outdoors-v11
    //  mapbox/light-v10
    //  mapbox/dark-v10
    //  mapbox/satellite-v9
    //  mapbox/satellite-streets-v11

// You can find the list of Mapbox styles here:
    // Link: https://docs.mapbox.com/api/maps/styles/

// Also make sure to change the style type in the tileLayer(*INSERT URL*) URL!


// For API URL for Mapbox navigate to Mapbox Glossory website
// Then search for Static Tiles API
    // Link: https://docs.mapbox.com/help/glossary/static-tiles-api/
        // Replace url up to ".../tiles/" with that part of the URL from this link^
        // example down below \/


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);