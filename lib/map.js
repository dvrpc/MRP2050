//  color = feature.getProperty("VisionType") == 'Roadway - Funded' ? '#24527F' : '#90ABD9' or RGB (36,82,127):(144,171,217)
//  color = feature.getProperty("VisionType") == 'Transit - Funded' ? '#69883A' : '#B4CA8B'
//  color = feature.getProperty("VisionType") == 'Externally Funded' ? '#795300' : '#B4CA8B'
//declare boundary of region

var oLat = 40.018, oLng = -75.148, zLevel = 9; 
//create map instance

var map = L.map("mapDIV", {
    minZoom: zLevel,
    zoomControl: false
 //   layers: [CartoDB_Positron]
}).setView([oLat, oLng],zLevel);

//add Layer Control to map
var CartoDB_Positron = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    subdomains: 'abcd',
    maxZoom: 19
});
CartoDB_Positron.addTo(map);
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
/////////      Declare Data Layers Here        ///////////////////
//////////////////////////////////////////////////////////////////

//define Icon Set and Marker Types 
var IconPresets = {iconSet:'dynico', markerSet: 'open-freight', mapMarker: 'circle-cm', legendMarker: 'circle-md'};
 
//declare Base Info for layers
var layer1icon = L.OpenFreightMarkers.icon({
        layer:'layer1G', titleicon:'<img src="lib/images/sidebar/rd_ex.png" width="28" height="28" style="margin-right: 10px;">', title: 'Roadway System Expansion',legendMarker: 'checkbox'}),
    layer3icon = L.OpenFreightMarkers.icon({
        layer:'layer3', titleicon:'<img src="lib/images/sidebar/rd_sp.png" width="28" height="28" style="margin-right: 10px;">',title: 'Roadway System Preservation',legendMarker: 'checkbox'}),
    layer4icon = L.OpenFreightMarkers.icon({
        layer:'layer4G', titleicon:'<img src="lib/images/sidebar/rd_op.png" width="28" height="28" style="margin-right: 10px;">',title: 'Roadway Operational Improvements ',legendMarker: 'checkbox'}),
    layer5icon = L.OpenFreightMarkers.icon({
        layer:'layer5G', titleicon:'<img src="lib/images/sidebar/bikeped.png" width="28" height="28" style="margin-right: 10px;">',title: 'Bicycle and Pedestrian',legendMarker: 'checkbox'}),
    layer2icon = L.OpenFreightMarkers.icon({
        layer:'layer2',titleicon:'<img src="lib/images/sidebar/tr_sp.png" width="28" height="28" style="margin-right: 10px;">', title: 'Transit System Preservation ',legendMarker: 'checkbox'}),
    layer6icon = L.OpenFreightMarkers.icon({
        layer:'layer6G', titleicon:'<img src="lib/images/sidebar/tr_op.png" width="28" height="28" style="margin-right: 10px;">',title: 'Transit Operational Improvements ',legendMarker: 'checkbox'}),
    layer7icon = L.OpenFreightMarkers.icon({
        layer:'layer7', titleicon:'<img src="lib/images/sidebar/tr_se.png" width="28" height="28" style="margin-right: 10px;">',title: 'Transit System Expansion',legendMarker: 'checkbox'}),
    layer8icon = L.OpenFreightMarkers.icon({
        layer:'layer8G', titleicon:'<img src="lib/images/sidebar/ext.png" width="28" height="28" style="margin-right: 10px;">', title: 'Externally Funded',legendMarker: 'checkbox'}) 
      ;

    //define search groups for each layer that will be searchable
    var layer1Search = [], layer2Search = [],layer3Search = [],layer4Search = [],layer5Search = [],layer6Search = [],layer7Search = [],layer8Search = [],LayerStyle = [];
    // var layer1Search = [], layer2Search = [], layer3Search = [], LayerStyle = [];
    //declare polygon data for Layer 1 [same as Poly only]
    var DVRPC = L.geoJson(null, {
        style: {stroke:true,fillColor:'none',color: '#636363',weight: 3,fill: true, clickable: true}
    });
    $.getJSON("https://arcgis.dvrpc.org/portal/rest/services/Boundaries/CountyBoundaries/FeatureServer/0/query?where=DVRPC_REG%3D%27Yes%27&outFields=STATE%2C+CO_NAME&outSR=4326&f=geojson", function (data) {
       // console.log(data);
        DVRPC.addData(data);
    });
    DVRPC.addTo(map);

// Main MRP 2045 Datalayers
var layer1pt = L.geoJson(null, {
    pointToLayer: function (feature, latlng) {
        var Fcolor = feature.properties.VisionType == 'Roadway Funded' ? '#24527F' : '#90ABD9';
        return L.circleMarker(latlng, {
           radius: 5,
           fillColor: Fcolor,
           color: "#FFF",
           weight: 1,
           opacity: 1,
           fillOpacity: 0.7
       }).bindLabel(feature.properties.MapName, { className: 'leaflet-label-'+ feature.properties.CATGROUP +'' });;
    },
    onEachFeature: function (feature, layer){
    			//defines actions to be applied of each feature of layer
        layer.on({											//Event handler on each feature
        click: highlightLayer1pt,								//function on click --> function to be created in actions.js
        dblclick: zoomToPoint								//funciton on double click  --> zoom to point function in actions.js
        });
        layer1Search.push({								//push variables from json features to search arrays
            name: layer.feature.properties.FACILITY,		//search name/field
            source: "Layer 1",			//layer source
            id: L.stamp(layer),		
         //   lat: layer.feature.properties.LAT, 
         //   lng: layer.feature.properties.LONG       						//leaflet id
         //   lat: layer.feature.geometry.coordinates[1],		//geometric bounds declaration for points (requires lat and lng)
         //   lng: layer.feature.geometry.coordinates[0],
            bounds: layer.getBounds()						
        });
    }
});  
$.getJSON("https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/MRP2050/FeatureServer/0/query?where=CATGROUP+%3D+%27rduf_ex%27+or+CATGROUP+%3D+%27rdf_ex%27&outFields=*&returnGeometry=true&geometryPrecision=8&outSR=4326&f=geojson", function (data) {
	layer1pt.addData(data);
});
//declare polygon data for Layer 1 [same as Poly only]
var layer1 = L.geoJson(null, {
    style: function(feature) {
                    switch (feature.properties.VisionType) {
                    case 'Roadway Funded': return {color: "#24527F", weight: 4, opacity: .75,};
                    case 'Roadway Unfunded':   return {color: "#90ABD9", weight: 4,opacity: .75,};
                    }
                    },  
     onEachFeature: function (feature, layer){  
           if (feature.properties.VisionType[8] === "F") {
                        layer.bindLabel(feature.properties.MapName, { noHide: true, direction: "auto", className: "leaflet-label-RSEF" });               
                }
            else {
          layer.bindLabel(feature.properties.MapName, { noHide: true, direction: "auto", className: "leaflet-label-RSEU" });                      
            }    ; 
        layer.on({
            click: highlightLayer1,
            dblclick: zoomToFeature
        });
        layer1Search.push({
            name: layer.feature.properties.FACILITY,
            source: "Layer 1",
            id: L.stamp(layer),
            bounds: layer.getBounds()
        });
    } 
});
$.getJSON("https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/MRP2050/FeatureServer/1/query?where=CATGROUP+%3D+%27rduf_ex%27+or+CATGROUP+%3D+%27rdf_ex%27&outFields=*&returnGeometry=true&geometryPrecision=8&outSR=4326&f=geojson", function (data) {
   // console.log(data);
    layer1.addData(data);
});
polyLayer.push('layer1');

var layer1G = new L.FeatureGroup([layer1pt, layer1]);

//define Layer 1 (point and line combo)
//declare point data first [same as point only] -- no search as search will be provided for with polygon feature

var layer3pt = L.geoJson(null, {
    pointToLayer: function (feature, latlng) {
        var Fcolor = feature.properties.VisionType == 'Roadway Funded' ? '#24527F' : '#90ABD9';
        return L.circleMarker(latlng, {
           radius: 5,
           fillColor: Fcolor,
           color: "#FFF",
           weight: 1,
           opacity: 1,
           fillOpacity: 0.7
       }).bindLabel(feature.properties.MapName, { className: 'leaflet-label-'+ feature.properties.CATGROUP +'' });;
    },
    onEachFeature: function (feature, layer){           
        layer.on({                                          
            click: highlightLayer3pt,                                
            dblclick: zoomToPoint                               
        });
         layer3Search.push({                                //push variables from json features to search arrays
            name: layer.feature.properties.FACILITY,      //search name/field
            source: "Layer 3",          //layer source
            id: L.stamp(layer),     
            bounds: layer.getBounds()                      
       });
    }
});  
$.getJSON("https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/MRP2050/FeatureServer/0/query?where=CATGROUP+%3D+%27rduf_pr%27+or+CATGROUP+%3D+%27rdf_pr%27&outFields=*&returnGeometry=true&geometryPrecision=8&outSR=4326&f=geojson", function (data) {
    layer3pt.addData(data);
});

//declare polygon data for Layer 3
var layer3poly = L.geoJson(null, {
    style: function(feature) {
                    switch (feature.properties.VisionType) {
                    case 'Roadway Funded': return {color: "#24527F", weight: 4, opacity: .75,};
                    case 'Roadway Unfunded':   return {color: "#90ABD9", weight: 4,opacity: .75,};
                    case 'Roadway Illustrative':   return {color: "#90ABD9", weight: 4,opacity: .75,};
                    }
                    },  
    onEachFeature: function (feature, layer){  
            if (feature.properties.CATGROUP[2] === "f") {
                        layer.bindLabel(feature.properties.MapName, { noHide: true, direction: "auto", className: "leaflet-label-RSEF" });               
                }
            else {
          layer.bindLabel(feature.properties.MapName, { noHide: true, direction: "auto", className: "leaflet-label-RSEU" });                      
            }    ;
        layer.on({
            click: highlightLayer3,
            dblclick: zoomToFeature
        });
        layer3Search.push({
            name: layer.feature.properties.FACILITY,
            source: "Layer 3",
            id: L.stamp(layer),
            bounds: layer.getBounds()
        });
    }
});
$.getJSON("https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/MRP2050/FeatureServer/1/query?where=CATGROUP+%3D+%27rduf_pr%27+or+CATGROUP+%3D+%27rdf_pr%27&outFields=*&returnGeometry=true&geometryPrecision=8&outSR=4326&f=geojson", function (data) {
    layer3poly.addData(data);
});
polyLayer.push('layer3poly');
//create layer group for Layer 1 point and polygon features
var layer3 = new L.FeatureGroup([layer3pt, layer3poly]);

//declare polygon data for Layer 4
var layer4pt = L.geoJson(null, {
    pointToLayer: function (feature, latlng) {
        var Fcolor = feature.properties.VisionType == 'Roadway Funded' ? '#24527F' : '#90ABD9';
        return L.circleMarker(latlng, {
           radius: 5,
           fillColor: Fcolor,
           color: "#FFF",
           weight: 1,
           opacity: 1,
           fillOpacity: 0.7
       }).bindLabel(feature.properties.MapName, { className: 'leaflet-label-'+ feature.properties.CATGROUP +'' });;
    },
    onEachFeature: function (feature, layer){
    			//defines actions to be applied of each feature of layer
        layer.on({											//Event handler on each feature
        click: highlightLayer4pt,								//function on click --> function to be created in actions.js
        dblclick: zoomToPoint								//funciton on double click  --> zoom to point function in actions.js
        });
        layer4Search.push({								//push variables from json features to search arrays
            name: layer.feature.properties.FACILITY,		//search name/field
            source: "Layer 4",			//layer source
            id: L.stamp(layer),		
         //   lat: layer.feature.properties.LAT, 
         //   lng: layer.feature.properties.LONG       						//leaflet id
         //   lat: layer.feature.geometry.coordinates[1],		//geometric bounds declaration for points (requires lat and lng)
         //   lng: layer.feature.geometry.coordinates[0],
            bounds: layer.getBounds()						
        });
    }
});  
$.getJSON("https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/MRP2050/FeatureServer/0/query?where=CATGROUP+%3D+%27rduf_op%27+or+CATGROUP+%3D+%27rdf_op%27&outFields=*&returnGeometry=true&geometryPrecision=8&outSR=4326&f=geojson", function (data) {
	layer4pt.addData(data);
});

var layer4 = L.geoJson(null, {
    style: function(feature) {
                    switch (feature.properties.VisionType) {
                    case 'Roadway Funded': return {color: "#24527F", weight: 4, opacity: .75,};
                    case 'Roadway Unfunded':   return {color: "#90ABD9", weight: 4,opacity: .75,};
                    }
                    },  
    onEachFeature: function (feature, layer){  
            if (feature.properties.CATGROUP[2] === "f") {
                        layer.bindLabel(feature.properties.MapName, { noHide: true, direction: "auto", className: "leaflet-label-RSEF" });               
                }
            else {
          layer.bindLabel(feature.properties.MapName, { noHide: true, direction: "auto", className: "leaflet-label-RSEU" });                      
            }    ;
        layer.on({
            click: highlightLayer4,
            dblclick: zoomToFeature
        });
        layer4Search.push({
            name: layer.feature.properties.FACILITY,
            source: "Layer 4",
            id: L.stamp(layer),
            bounds: layer.getBounds()
        });
    }
});
$.getJSON("https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/MRP2050/FeatureServer/1/query?where=CATGROUP+%3D+%27rduf_op%27+or+CATGROUP+%3D+%27rdf_op%27&outFields=*&returnGeometry=true&geometryPrecision=8&outSR=4326&f=geojson", function (data) {
    layer4.addData(data);
});
polyLayer.push('layer4');
var layer4G = new L.FeatureGroup([layer4pt, layer4]);

var layer5pt = L.geoJson(null, {
    pointToLayer: function (feature, latlng) {
        var Fcolor = feature.properties.VisionType == 'Roadway Funded' ? '#24527F' : '#90ABD9';
        return L.circleMarker(latlng, {
           radius: 5,
           fillColor: Fcolor,
           color: "#FFF",
           weight: 1,
           opacity: 1,
           fillOpacity: 0.7
       }).bindLabel(feature.properties.MapName, { className: 'leaflet-label-'+ feature.properties.CATGROUP +'' });;
    },
    onEachFeature: function (feature, layer){
    			//defines actions to be applied of each feature of layer
        layer.on({											//Event handler on each feature
        click: highlightLayer5pt,								//function on click --> function to be created in actions.js
        dblclick: zoomToPoint								//funciton on double click  --> zoom to point function in actions.js
        });
        layer5Search.push({								//push variables from json features to search arrays
            name: layer.feature.properties.FACILITY,		//search name/field
            source: "Layer 5",			//layer source
            id: L.stamp(layer),		
         //   lat: layer.feature.properties.LAT, 
         //   lng: layer.feature.properties.LONG       						//leaflet id
         //   lat: layer.feature.geometry.coordinates[1],		//geometric bounds declaration for points (requires lat and lng)
         //   lng: layer.feature.geometry.coordinates[0],
            bounds: layer.getBounds()						
        });
    }
});  
$.getJSON("https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/MRP2050/FeatureServer/0/query?where=CATGROUP+%3D+%27rduf_bike%27+or+CATGROUP+%3D+%27rdf_bike%27&outFields=*&returnGeometry=true&geometryPrecision=8&outSR=4326&f=geojson", function (data) {
	layer5pt.addData(data);
});
//declare polygon data for Layer 5
var layer5 = L.geoJson(null, {
    style: function(feature) {
                    switch (feature.properties.VisionType) {
                    case 'Roadway Funded': return {color: "#24527F", weight: 4, opacity: .75,};
                    case 'Roadway Unfunded':   return {color: "#90ABD9", weight: 4,opacity: .75,};
                    }
                    },  
    onEachFeature: function (feature, layer){  
            if (feature.properties.CATGROUP[2] === "f") {
                        layer.bindLabel(feature.properties.MapName, { noHide: true, direction: "auto", className: "leaflet-label-RSEF" });               
                }
            else {
          layer.bindLabel(feature.properties.MapName, { noHide: true, direction: "auto", className: "leaflet-label-RSEU" });                      
            }    ;
        layer.on({
            click: highlightLayer5,
            dblclick: zoomToFeature
        });
        layer5Search.push({
            name: layer.feature.properties.FACILITY,
            source: "Layer 5",
            id: L.stamp(layer),
            bounds: layer.getBounds()
        });
    }
});
$.getJSON("https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/MRP2050/FeatureServer/1/query?where=CATGROUP+%3D+%27rduf_bike%27+or+CATGROUP+%3D+%27rdf_bike%27&outFields=*&returnGeometry=true&geometryPrecision=8&outSR=4326&f=geojson", function (data) {
    layer5.addData(data);
});
polyLayer.push('layer5');
var layer5G = new L.FeatureGroup([layer5pt, layer5]);

// Tranit System Preservation points
var layer2pt = L.geoJson(null, {
    pointToLayer: function (feature, latlng) {
        var Fcolor = feature.properties.VisionType == 'Transit Funded' ? '#69883A' : '#B4CA8B';
        return L.circleMarker(latlng, {
           radius: 5,
           fillColor: Fcolor,
           color: "#FFF",
           weight: 1,
           opacity: 1,
           fillOpacity: 0.7
       }).bindLabel(feature.properties.MapName, { className: 'leaflet-label-'+ feature.properties.CATGROUP +'' });;
    },
    onEachFeature: function (feature, layer){
    			//defines actions to be applied of each feature of layer
        layer.on({											//Event handler on each feature
        click: highlightLayer2pt,								//function on click --> function to be created in actions.js
        dblclick: zoomToPoint								//funciton on double click  --> zoom to point function in actions.js
        });
        layer2Search.push({								//push variables from json features to search arrays
            name: layer.feature.properties.FACILITY,		//search name/field
            source: "Layer 2 ",			//layer source
            id: L.stamp(layer),		
         //   lat: layer.feature.properties.LAT, 
         //   lng: layer.feature.properties.LONG       						//leaflet id
         //   lat: layer.feature.geometry.coordinates[1],		//geometric bounds declaration for points (requires lat and lng)
         //   lng: layer.feature.geometry.coordinates[0],
            bounds: layer.getBounds()						
        });
    }
});  
$.getJSON("https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/MRP2050/FeatureServer/0/query?where=CATGROUP+%3D+%27tuf_pr%27+or+CATGROUP+%3D+%27tf_pr%27&outFields=*&returnGeometry=true&geometryPrecision=8&outSR=4326&f=geojson", function (data) {
	layer2pt.addData(data);
});
//declare polygon data for Layer 2 [same as Poly only] Tranit System Preservation
var layer2poly = L.geoJson(null, {
    style: function(feature) {
                    switch (feature.properties.VisionType) {
                    case 'Transit Funded': return {color: "#69883A", weight: 4, opacity: .8,};
                    case 'Transit Unfunded':   return {color: "#B4CA8B", weight: 4,opacity: .8,};
                    }
                    },  
    onEachFeature: function (feature, layer){  
             if (feature.properties.CATGROUP[1] === "f") {
                        layer.bindLabel(feature.properties.MapName, { noHide: true, direction: "auto", className: "leaflet-label-TF" });               
                }
            else {
          layer.bindLabel(feature.properties.MapName, { noHide: true, direction: "auto", className: "leaflet-label-TU" });                      
            }    ;
        layer.on({
            click: highlightLayer2,
            dblclick: zoomToFeature
        });
        layer2Search.push({
            name: layer.feature.properties.FACILITY,
            source: "Layer 2",
            id: L.stamp(layer),
            bounds: layer.getBounds()
        });
    }
});
$.getJSON("https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/MRP2050/FeatureServer/1/query?where=CATGROUP+%3D+%27tuf_pr%27+or+CATGROUP+%3D+%27tf_pr%27&outFields=*&returnGeometry=true&geometryPrecision=8&outSR=4326&f=geojson", function (data) {
    layer2poly.addData(data);
});
polyLayer.push('layer2poly');
//create layer group for Layer 1 point and polygon features
var layer2 = new L.FeatureGroup([layer2pt, layer2poly]);


var layer6pt = L.geoJson(null, {
    pointToLayer: function (feature, latlng) {
        var Fcolor = feature.properties.VisionType == 'Transit Funded' ? '#69883A' : '#B4CA8B';
        return L.circleMarker(latlng, {
           radius: 5,
           fillColor: Fcolor,
           color: "#FFF",
           weight: 1,
           opacity: 1,
           fillOpacity: 0.7
       }).bindLabel(feature.properties.MapName, { className: 'leaflet-label-'+ feature.properties.CATGROUP +'' });;
    },
    onEachFeature: function (feature, layer){
    			//defines actions to be applied of each feature of layer
        layer.on({											//Event handler on each feature
        click: highlightLayer6pt,								//function on click --> function to be created in actions.js
        dblclick: zoomToPoint								//funciton on double click  --> zoom to point function in actions.js
        });
        layer6Search.push({								//push variables from json features to search arrays
            name: layer.feature.properties.FACILITY,		//search name/field
            source: "Layer 6",			//layer source
            id: L.stamp(layer),		
         //   lat: layer.feature.properties.LAT, 
         //   lng: layer.feature.properties.LONG       						//leaflet id
         //   lat: layer.feature.geometry.coordinates[1],		//geometric bounds declaration for points (requires lat and lng)
         //   lng: layer.feature.geometry.coordinates[0],
            bounds: layer.getBounds()						
        });
    }
});  
$.getJSON("https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/MRP2050/FeatureServer/0/query?where=CATGROUP+%3D+%27tuf_op%27+or+CATGROUP+%3D+%27tf_op%27&outFields=*&returnGeometry=true&geometryPrecision=8&outSR=4326&f=geojson", function (data) {
	layer6pt.addData(data);
});
//declare polygon data for Layer 6 [same as Poly only]
var layer6 = L.geoJson(null, {
    style: function(feature) {
                    switch (feature.properties.VisionType) {
                    case 'Transit Funded': return {color: "#69883A", weight: 4, opacity: .8,};
                    case 'Transit Unfunded':   return {color: "#B4CA8B", weight: 4,opacity: .8,};
                    }
                    },  
    onEachFeature: function (feature, layer){  
            if (feature.properties.CATGROUP[1] === "f") {
                        layer.bindLabel(feature.properties.MapName, { noHide: true, direction: "auto", className: "leaflet-label-TF" });               
                }
            else {
          layer.bindLabel(feature.properties.MapName, { noHide: true, direction: "auto", className: "leaflet-label-TU" });                      
            }    ;
        layer.on({
            click: highlightLayer6,
            dblclick: zoomToFeature
        });
        layer6Search.push({
            name: layer.feature.properties.FACILITY,
            source: "Layer 6",
            id: L.stamp(layer),
            bounds: layer.getBounds()
        });
    }
});
$.getJSON("https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/MRP2050/FeatureServer/1/query?where=CATGROUP+%3D+%27tuf_op%27+or+CATGROUP+%3D+%27tf_op%27&outFields=*&returnGeometry=true&geometryPrecision=8&outSR=4326&f=geojson", function (data) {
    layer6.addData(data);
});
polyLayer.push('layer6');

var layer6G = new L.FeatureGroup([layer6pt, layer6]);

var layer7pt = L.geoJson(null, {
    pointToLayer: function (feature, latlng) {
    var Fcolor = feature.properties.VisionType == 'Transit Funded' ? '#69883A' : '#B4CA8B';
     return L.circleMarker(latlng, {
        radius: 5,
        fillColor: Fcolor,
        color: "#FFF",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.7
    }).bindLabel(feature.properties.MapName, { className: 'leaflet-label-'+ feature.properties.CATGROUP +'' });;
        
    },
    onEachFeature: function (feature, layer){
                //defines actions to be applied of each feature of layer
        layer.on({                                          //Event handler on each feature
        click: highlightLayer7pt,                               //function on click --> function to be created in actions.js
        dblclick: zoomToPoint                               //funciton on double click  --> zoom to point function in actions.js
        });
        layer2Search.push({                             //push variables from json features to search arrays
            name: layer.feature.properties.FACILITY,        //search name/field
            source: "Layer 7",         //layer source
            id: L.stamp(layer),     
         //   lat: layer.feature.properties.LAT, 
         //   lng: layer.feature.properties.LONG                            //leaflet id
         //   lat: layer.feature.geometry.coordinates[1],       //geometric bounds declaration for points (requires lat and lng)
         //   lng: layer.feature.geometry.coordinates[0],
            bounds: layer.getBounds()                       
        });
    }
});  
$.getJSON("https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/MRP2050/FeatureServer/0/query?where=CATGROUP+%3D+%27tuf_ex%27+or+CATGROUP+%3D+%27tf_ex%27&outFields=*&returnGeometry=true&geometryPrecision=8&outSR=4326&f=geojson", function (data) {
    layer7pt.addData(data);
});

//declare polygon data for Layer 7 [same as Poly only]
//Transit System Expansion Line
var layer7poly = L.geoJson(null, {
    style: function(feature) {
                    switch (feature.properties.VisionType) {
                    case 'Transit Funded': return {color: "#69883A", weight: 4, opacity: .8,};
                    case 'Transit Unfunded':   return {color: "#B4CA8B", weight: 4,opacity: .8,};
                    }
                    },  
    onEachFeature: function (feature, layer){  
            if (feature.properties.CATGROUP[1] === "f") {
                        layer.bindLabel(feature.properties.MapName, { noHide: true, direction: "auto", className: "leaflet-label-TF" });               
                }
            else {
          layer.bindLabel(feature.properties.MapName, { noHide: true, direction: "auto", className: "leaflet-label-TU" });                      
            }    ;
        layer.on({
            click: highlightLayer7,
            dblclick: zoomToFeature
        });
        layer7Search.push({
            name: layer.feature.properties.FACILITY,
            source: "Layer 7",
            id: L.stamp(layer),
            bounds: layer.getBounds()
        });
    }
});
$.getJSON("https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/MRP2050/FeatureServer/1/query?where=CATGROUP+%3D+%27tuf_ex%27+or+CATGROUP+%3D+%27tf_ex%27&outFields=*&returnGeometry=true&geometryPrecision=8&outSR=4326&f=geojson", function (data) {
    layer7poly.addData(data);
});
polyLayer.push('layer7poly');

//create layer group for Layer 1 point and polygon features
var layer7 = new L.FeatureGroup([layer7pt, layer7poly]);


var layer8pt = L.geoJson(null, {
    pointToLayer: function (feature, latlng) {
    var Fcolor = feature.properties.CATGROUP == 'ext_fund' ? '#795300' : '#a1864c';
     return L.circleMarker(latlng, {
        radius: 5,
        fillColor: Fcolor,
        color: "#FFF",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.7
    }).bindLabel(feature.properties.MapName, { className: 'leaflet-label-'+ feature.properties.CATGROUP +'' });;
        
    },
    onEachFeature: function (feature, layer){
                //defines actions to be applied of each feature of layer
        layer.on({                                          //Event handler on each feature
        click: highlightLayer8pt,                               //function on click --> function to be created in actions.js
        dblclick: zoomToPoint                               //funciton on double click  --> zoom to point function in actions.js
        });
        layer2Search.push({                             //push variables from json features to search arrays
            name: layer.feature.properties.FACILITY,        //search name/field
            source: "Layer 8",         //layer source
            id: L.stamp(layer),     
         //   lat: layer.feature.properties.LAT, 
         //   lng: layer.feature.properties.LONG                            //leaflet id
         //   lat: layer.feature.geometry.coordinates[1],       //geometric bounds declaration for points (requires lat and lng)
         //   lng: layer.feature.geometry.coordinates[0],
            bounds: layer.getBounds()                       
        });
    }
});  
$.getJSON("https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/MRP2050/FeatureServer/0/query?where=CATGROUP+%3D+%27ext_fund%27+or+CATGROUP+%3D+%27ext_unfund%27&outFields=*&returnGeometry=true&geometryPrecision=8&outSR=4326&f=geojson", function (data) {
    layer8pt.addData(data);
});
//define Layer 8 (polygon only)
var layer8 = L.geoJson(null, {
  //  style: {weight:4, color:"#795300", opacity:.8},  
  style: function(feature) {
                    switch (feature.properties.VisionType) {
                    case 'External Road Funded': return {color: "#795300", weight: 4, opacity: .8,};
                    case 'External Transit Funded': return {color: "#795300", weight: 4, opacity: .8,};
                    case 'External Road Unfunded':   return {color: "#a1864c", weight: 4,opacity: .8,};
                    case 'External Transit Unfunded':   return {color: "#a1864c", weight: 4,opacity: .8,};
                    }
                    },  
    onEachFeature: function (feature, layer){       //defines actions to be applied of each feature of layer
            if (feature.properties.CATGROUP[5] === "f") {
                        layer.bindLabel(feature.properties.MapName, { noHide: true, direction: "auto", className: "leaflet-label-EXT" });               
                }
            else {
          layer.bindLabel(feature.properties.MapName, { noHide: true, direction: "auto", className: "leaflet-label-EXTU" });                      
            }    ;
        layer.on({                                      //Event handler on each feature
            click: highlightLayer8,                         //action on click --> function to be created in actions.js
            dblclick: zoomToFeature                         //action on double click  --> zoom to polygon function in action.js
        });
        layer8Search.push({                         //push variables from json features to search arrays
            name: layer.feature.properties.FACILITY,            //search name/field
            source: "Layer 8",                              //layer source
            id: L.stamp(layer),                             //leaflet id
            bounds: layer.getBounds()                       //geometric bounds declaration for polygon
        });
    }
});
$.getJSON("https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/MRP2050/FeatureServer/1/query?where=CATGROUP+%3D+%27ext_fund%27+or+CATGROUP+%3D+%27ext_unfund%27&outFields=*&returnGeometry=true&geometryPrecision=8&outSR=4326&f=geojson", function (data) {     //get data from json source
    layer8.addData(data);
});
polyLayer.push('layer8');

//create layer group for Layer 1 point and polygon features
var layer8G = new L.FeatureGroup([layer8pt, layer8]);


///////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//  Create search functionality using Typeahead   ////
//////////////////////////////////////////////////////
 
$("#searchbox").click(function () {
    $(this).select();
});

// Typeahead search functionality
$(document).one("ajaxStop", function() {
    $("#loading").hide();
    //tokenize each search array using Bloodhound
    var layer1BH = new Bloodhound({
        name: "Layer 1",
        datumTokenizer: function (d) {
            return Bloodhound.tokenizers.whitespace(d.name);
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: layer1Search,
        limit: 10
    });
    var layer2BH = new Bloodhound({
        name: "Layer 2",
        datumTokenizer: function (d) {
            return Bloodhound.tokenizers.whitespace(d.name);
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: layer2Search,
        limit: 10
    });
    var layer3BH = new Bloodhound({
        name: "Layer 3",
        datumTokenizer: function (d) {
            return Bloodhound.tokenizers.whitespace(d.name);
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: layer3Search,
        limit: 10
    });
    var layer4BH = new Bloodhound({
        name: "Layer 4",
        datumTokenizer: function (d) {
            return Bloodhound.tokenizers.whitespace(d.name);
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: layer4Search,
        limit: 10
    });
    var layer5BH = new Bloodhound({
        name: "Layer 5",
        datumTokenizer: function (d) {
            return Bloodhound.tokenizers.whitespace(d.name);
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: layer5Search,
        limit: 10
    });
    var layer6BH = new Bloodhound({
        name: "Layer 6",
        datumTokenizer: function (d) {
            return Bloodhound.tokenizers.whitespace(d.name);
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: layer6Search,
        limit: 10
    });
    var layer7BH = new Bloodhound({
        name: "Layer 7",
        datumTokenizer: function (d) {
            return Bloodhound.tokenizers.whitespace(d.name);
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: layer7Search,
        limit: 10
    });
    var layer8BH = new Bloodhound({
        name: "Layer 8",
        datumTokenizer: function (d) {
            return Bloodhound.tokenizers.whitespace(d.name);
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: layer8Search,
        limit: 10
    });
   //initialize 
    layer1BH.initialize();
    layer2BH.initialize();
    layer3BH.initialize();
    layer4BH.initialize();
    layer5BH.initialize();
    layer6BH.initialize();
    layer7BH.initialize();
    layer8BH.initialize();
    //activate Typeahead on Searchbox DOM element
    $("#searchbox").typeahead({
    	//define options (see Typeahead documentation)
    	minLength: 2,
        highlight: true,
        hint: false
    },{
    	name: "Layer1data",
        displayKey: "name",
        source: layer1BH.ttAdapter(),
        templates: {
            header: "<h5 class='typeahead-header'>Roadway System Expansion</h5>"
        }
    },{
    	name: "Layer2data",
        displayKey: "name",
        source: layer2BH.ttAdapter(),
        templates: {
            header: "<h5 class='typeahead-header'>Transit System Preservation</h5>"
         }   
    },{
        name: "Layer3data",
        displayKey: "name",
        source: layer3BH.ttAdapter(),
        templates: {
            header: "<h5 class='typeahead-header'>Roadway System Preservation</h5>"
         }   
    },{
        name: "Layer4data",
        displayKey: "name",
        source: layer4BH.ttAdapter(),
        templates: {
            header: "<h5 class='typeahead-header'>Roadway Operational Improvements </h5>"
         }   
    },{
        name: "Layer5data",
        displayKey: "name",
        source: layer5BH.ttAdapter(),
        templates: {
            header: "<h5 class='typeahead-header'>Bicycle and Pedestrian</h5>"
         }   
    },{
         name: "Layer6data",
        displayKey: "name",
        source: layer6BH.ttAdapter(),
        templates: {
            header: "<h5 class='typeahead-header'>Transit Operational Improvements </h5>"
         }   
    },{
        name: "Layer7data",
        displayKey: "name",
        source: layer7BH.ttAdapter(),
        templates: {
            header: "<h5 class='typeahead-header'>Transit System Expansion</h5>"
         }   
    },{
        name: "Layer8data",
        displayKey: "name",
        source: layer8BH.ttAdapter(),
        templates: {
            header: "<h5 class='typeahead-header'>Externally Funded</h5>"
        }
    }).on("typeahead:selected", function (obj, datum) {		//define action on selection of a search result
           if (datum.source === "Layer 1") {                       //action based on result source layer
            if (!map.hasLayer(layer1)) {                        //Check if map has Layer visible
                map.addLayer(layer1);                           //If not add layer
                $("#layer1").prop("checked", true);             //and change layer control item to checked 
            };
            map.fitBounds(datum.bounds);                        //zoom to selection based on poly bounds (for polygon results)
            if (map._layers[datum.id]) {                        //Apply action to selected result to fire a click event 
             map._layers[datum.id].fire("click");                // (this will fire the onClick event established for the layer and stored as a function in actions.js)
            }; 
        };
        if (datum.source === "Layer 2") {
            if (!map.hasLayer(layer2)) {
                map.addLayer(layer2);
                $("#layer2").prop("checked", true);
            };
    //        map.setView([datum.lat, datum.lng], 17);			//zoom to selection based on point and zoom level (for point only results)
    //        if (map._layers[datum.id]) {
    //           map._layers[datum.id].fire("click");
    //       }; 
            map.fitBounds(datum.bounds);                        //zoom to selection based on poly bounds (for polygon results)
            if (map._layers[datum.id]) {                        //Apply action to selected result to fire a click event 
                map._layers[datum.id].fire("click");                // (this will fire the onClick event established for the layer and stored as a function in actions.js)
            }; 
        };
        if (datum.source === "Layer 3") {                       //action based on result source layer
            if (!map.hasLayer(layer3)) {                        //Check if map has Layer visible
                map.addLayer(layer3);                           //If not add layer
                $("#layer3").prop("checked", true);             //and change layer control item to checked 
            };
    //         map.setView([datum.lat, datum.lng], 17);           //zoom to selection based on point and zoom level (for point only results)
    //        if (map._layers[datum.id]) {
    //           map._layers[datum.id].fire("click");
    //       }; 
            map.fitBounds(datum.bounds);                        //zoom to selection based on poly bounds (for polygon results)
            if (map._layers[datum.id]) {                        //Apply action to selected result to fire a click event 
                map._layers[datum.id].fire("click");                // (this will fire the onClick event established for the layer and stored as a function in actions.js)
            }; 
        };
        if (datum.source === "Layer 4") {                       //action based on result source layer
            if (!map.hasLayer(layer4)) {                        //Check if map has Layer visible
                map.addLayer(layer4);                           //If not add layer
                $("#layer4").prop("checked", true);             //and change layer control item to checked 
            };
            map.fitBounds(datum.bounds);                        //zoom to selection based on poly bounds (for polygon results)
            if (map._layers[datum.id]) {                        //Apply action to selected result to fire a click event 
                map._layers[datum.id].fire("click");                // (this will fire the onClick event established for the layer and stored as a function in actions.js)
            }; 
        };
        if (datum.source === "Layer 5") {                       //action based on result source layer
            if (!map.hasLayer(layer5)) {                        //Check if map has Layer visible
                map.addLayer(layer5);                           //If not add layer
                $("#layer5").prop("checked", true);             //and change layer control item to checked 
            };
            map.fitBounds(datum.bounds);                        //zoom to selection based on poly bounds (for polygon results)
            if (map._layers[datum.id]) {                        //Apply action to selected result to fire a click event 
                map._layers[datum.id].fire("click");                // (this will fire the onClick event established for the layer and stored as a function in actions.js)
            }; 
        };
        if (datum.source === "Layer 6") {                       //action based on result source layer
            if (!map.hasLayer(layer6)) {                        //Check if map has Layer visible
                map.addLayer(layer6);                           //If not add layer
                $("#layer6").prop("checked", true);             //and change layer control item to checked 
            };
            map.fitBounds(datum.bounds);                        //zoom to selection based on poly bounds (for polygon results)
            if (map._layers[datum.id]) {                        //Apply action to selected result to fire a click event 
                map._layers[datum.id].fire("click");                // (this will fire the onClick event established for the layer and stored as a function in actions.js)
            }; 
        };
        if (datum.source === "Layer 7") {                       //action based on result source layer
            if (!map.hasLayer(layer7)) {                        //Check if map has Layer visible
                map.addLayer(layer7);                           //If not add layer
                $("#layer7").prop("checked", true);             //and change layer control item to checked 
            };
            map.fitBounds(datum.bounds);                        //zoom to selection based on poly bounds (for polygon results)
            if (map._layers[datum.id]) {                        //Apply action to selected result to fire a click event 
                map._layers[datum.id].fire("click");                // (this will fire the onClick event established for the layer and stored as a function in actions.js)
            }; 
        };
          if (datum.source === "Layer 8") {                     //action based on result source layer
            if (!map.hasLayer(layer8)) {                        //Check if map has Layer visible
                map.addLayer(layer8);                           //If not add layer
                $("#layer8").prop("checked", true);             //and change layer control item to checked 
            };
            map.fitBounds(datum.bounds);                        //zoom to selection based on poly bounds (for polygon results)
            if (map._layers[datum.id]) {                        //Apply action to selected result to fire a click event 
                map._layers[datum.id].fire("click");                // (this will fire the onClick event established for the layer and stored as a function in actions.js)
            }; 
        };
        if (datum.source === "Layer 0") {                     //action based on result source layer
            if (!map.hasLayer(layer0)) {                        //Check if map has Layer visible
                map.addLayer(layer0);                           //If not add layer
                $("#layer0").prop("checked", true);             //and change layer control item to checked 
            };
            map.fitBounds(datum.bounds);                        //zoom to selection based on poly bounds (for polygon results)
            if (map._layers[datum.id]) {                        //Apply action to selected result to fire a click event 
                map._layers[datum.id].fire("click");                // (this will fire the onClick event established for the layer and stored as a function in actions.js)
            }; 
        };
       
        
    }).on("typeahead:opened", function () {
            $(".navbar-collapse.in").css("max-height", $(document).height()-$(".navbar-header").height());
            $(".navbar-collapse.in").css("height", $(document).height()-$(".navbar-header").height());
        }).on("typeahead:closed", function () {
            $(".navbar-collapse.in").css("max-height", "");
            $(".navbar-collapse.in").css("height", "");
        });
        $(".twitter-typeahead").css("position", "static");
        $(".twitter-typeahead").css("display", "block");
    });