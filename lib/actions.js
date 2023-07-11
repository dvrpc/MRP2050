//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////  Declare Shared Values //////////////////////

var hlweight = 6, 			//weight of highlighted feature outline
	hlColor = "#EFA06A";	//color of point, outline and line highlights

// required variables DO NOT REMOVE
var polyLayer= [],layersearch, props, header, content, titleName, headerClass;

////////////////////////////////////////////////////
///Individual Feature actions /////////////////////	

//Group 3 Layer Selections ////////////
// Roadway System Preservation
function highlightLayer3(e) {
    initializeHL(e);
        if (props.website === 'N/A') { Website = " ";}
        else { Website =  "<div class='datafield'><a class='one' href='"+ props.website +"' target='_blank'>"+ props.website+"</a></div><div class='labelfield'>Website</div>"};
    
    var tips = [];
    for (var i = 1; i <= 28; i++) {
        if (props['tip'+i] > 0 || props['tip'+i] != '0' ) {
            if (props.state === 'NJ') { state = "/Project/"}
            else { state = "/map/";};
            tips.push("<a class='one' href='https://www.dvrpc.org/TIP/" + props.state + state + props["tip"+i] +"' target='_blank'>"+ props["tip"+i]+"</a>");
        }
    }
    if (!tips.length) { TIP = " ";}
    else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};
   
    if (props.visiontype === 'Roadway Funded') {FUND ="<table class='infotable'><thead><tr><th>TIP Programmed Costs<br><i>(millions in Y-O-E $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.ttcost).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"}
    else {FUND ="<table class='infotable'><thead><tr><th>Unfunded Cost<br><i>(millions in 2021 $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.unfund_ill).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"};
   
    RSE = props.catgroup,
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.catgroup + '.png"/><p>' + props.facility + '</p></div>',     
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.loc + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.ps1 + props.ps2 + "</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    + FUND
    + TIP
    +"</div>"
    +"<div class='datafield' id='"+props.catgroup+"'style='color:#fff;padding:6px'>" + props.category
    +"</div>",
    layerName = 'layer3';

    document.getElementById('infoheader').innerHTML = header;                   //push content to info box header
    document.getElementById('info').innerHTML = content;                        //push content to info box
    document.getElementById('infoheader').className = RSE;           //push class to create style for info header
    toggleinfo(); 
};
//Group 3 Layer Selections ////////////
// Roadway System Preservation
function highlightLayer3pt(e) {
    initializeHL(e);
    if (props.website === 'N/A') { Website = " ";}
    else { Website =  "<div class='datafield'><a class='one' href='"+ props.website +"' target='_blank'>"+ props.website+"</a></div><div class='labelfield'>Website</div>"};
    
    var tips = [];
    for (var i = 1; i <= 28; i++) {
        if (props['tip'+i] > 0 || props['tip'+i] != '0' ) {
            if (props.state === 'NJ') { state = "/Project/"}
            else { state = "/map/";};
            tips.push("<a class='one' href='https://www.dvrpc.org/TIP/" + props.state + state + props["tip"+i] +"' target='_blank'>"+ props["tip"+i]+"</a>");
        }
    }
    if (!tips.length) { TIP = " ";}
    else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};

    if (props.visiontype === 'Roadway Funded') {FUND ="<table class='infotable'><thead><tr><th>TIP Programmed Costs<br><i>(millions in Y-O-E $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.ttcost).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"}
    else {FUND ="<table class='infotable'><thead><tr><th>Unfunded Cost<br><i>(millions in 2021 $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.unfund_ill).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"};
   
    RSE = props.catgroup;
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.catgroup + '.png"/><p>' + props.facility + '</p></div>',
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.loc + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.ps1 + props.ps2 +"</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    + FUND
    + TIP
    +"</div>"
    +"<div class='datafield' id='"+props.catgroup+"'style='color:#fff;padding:6px'>" + props.category
    +"</div>",
    layerName = 'layer3pt';

    document.getElementById('infoheader').innerHTML = header;                   //push content to info box header
    document.getElementById('info').innerHTML = content;                        //push content to info box
    document.getElementById('infoheader').className = RSE;           //push class to create style for info header
    toggleinfo(); 
};
//Group 4 Layer Selections ////////////
// Roadway Operation Improvments 
function highlightLayer4pt(e) {
    initializeHL(e);
    if (props.website === 'N/A') { Website = " ";}
    else { Website =  "<div class='datafield'><a class='one' href='"+ props.website +"' target='_blank'>"+ props.website +"</a></div><div class='labelfield'>Website</div>"};
      
    var tips = [];
    for (var i = 1; i <= 28; i++) {
        if (props['tip'+i] > 0 || props['tip'+i] != '0' ) {
            if (props.state === 'NJ') { state = "/Project/"}
            else { state = "/map/";};
            tips.push("<a class='one' href='https://www.dvrpc.org/TIP/" + props.state + state + props["tip"+i] +"' target='_blank'>"+ props["tip"+i]+"</a>");
        }
    }
    if (!tips.length) { TIP = " ";}
    else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};
    
    if (props.visiontype === 'Roadway Funded') {FUND ="<table class='infotable'><thead><tr><th>Funded Cost<br><i>(millions in Y-O-E $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.ttcost).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"}
    else {FUND ="<table class='infotable'><thead><tr><th>Unfunded Cost<br><i>(millions in 2021 $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.unfund_ill).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"};
   
    RSE = props.catgroup;
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.catgroup + '.png"/><p>' + props.facility + '</p></div>',
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.loc + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.ps1 + props.ps2 +"</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    + FUND
    + TIP
    +"<div class='datafield' id='"+props.catgroup+"'style='color:#fff;padding:6px'>" + props.category
    +"</div>",
    layerName = 'layer4pt'; 

    document.getElementById('infoheader').innerHTML = header;                   //push content to info box header
    document.getElementById('info').innerHTML = content;                        //push content to info box
    document.getElementById('infoheader').className = RSE;           //push class to create style for info header
    toggleinfo(); 
};
// layer 4 - Roadway Operation Improvments 
function highlightLayer4(e) {
    initializeHL(e);
        if (props.website === 'N/A') { Website = " ";}
        else { Website =  "<div class='datafield'><a class='one' href='"+ props.website +"' target='_blank'>"+ props.website +"</a></div><div class='labelfield'>Website</div>"};
    var tips = [];
    for (var i = 1; i <= 28; i++) {
        if (props['tip'+i] > 0 || props['tip'+i] != '0' ) {
            if (props.state === 'NJ') { state = "/Project/"}
            else { state = "/map/";};
            tips.push("<a class='one' href='https://www.dvrpc.org/TIP/" + props.state + state + props["tip"+i] +"' target='_blank'>"+ props["tip"+i]+"</a>");
        }
    }
    if (!tips.length) { TIP = " ";}
    else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};

    if (props.visiontype === 'Roadway Funded') {FUND ="<table class='infotable'><thead><tr><th>System Preservation<br><i>(millions in Y-O-E $)</i></th><th>Operational Improvements<br><i>(millions in Y-O-E $)</i></th><th>Total Funded Cost<br><i>(millions in Y-O-E $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.prescosts).format('($0,0.0)') +"</td><td> "+ numeral(props.opcosts).format('($0,0.0)') +"</td><td> "+ numeral(props.ttcost).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"}   else {FUND ="<table class='infotable'><thead><tr><th>Unfunded Cost<br><i>(millions in 2021 $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.unfund_ill).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"};
   
    RSE = props.catgroup;
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.catgroup + '.png"/><p>'+ props.facility + '</p></div>',    
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.loc + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.ps1 + props.ps2 +"</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    + FUND
    + TIP
    +"</div>"
    +"<div class='datafield' id='"+props.catgroup+"'style='color:#fff;padding:6px'>" + props.category
    +"</div>",
    layerName = 'layer4';

    document.getElementById('infoheader').innerHTML = header;                   //push content to info box header
    document.getElementById('info').innerHTML = content;                        //push content to info box
    document.getElementById('infoheader').className = RSE;           //push class to create style for info header
    toggleinfo(); 
};
//  layer1
// Roadway System Expansion
function highlightLayer1(e) {
    initializeHL(e);
        if (props.website === 'N/A') { Website = " ";}
        else { Website =  "<div class='datafield'><a class='one' href='"+ props.website+"' target='_blank'>"+ props.website+"</a></div><div class='labelfield'>Website</div>"};

    var tips = [];
    for (var i = 1; i <= 28; i++) {
        if (props['tip'+i] > 0 || props['tip'+i] != '0' ) {
            if (props.state === 'NJ') { state = "/Project/"}
            else { state = "/map/";};
            tips.push("<a class='one' href='https://www.dvrpc.org/TIP/" + props.state + state + props["tip"+i] +"' target='_blank'>"+ props["tip"+i]+"</a>");
        }
    }
    if (!tips.length) { TIP = " ";}
    else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};

    if (props.visiontype === 'Roadway Funded') {FUND ="<table class='infotable'><thead><tr><th>System Expansion<br><i>(millions in Y-O-E $)</i></th><th>System Preservation<br><i>(millions in Y-O-E $)</i></th><th>Operational Improvements<br><i>(millions in Y-O-E $)</i></th><th>Total Funded Cost<br><i>(millions in Y-O-E $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.expcosts).format('($0,0.0)') +"</td><td> "+ numeral(props.prescosts).format('($0,0.0)') +"</td><td> "+ numeral(props.opcosts).format('($0,0.0)') +"</td><td> "+ numeral(props.ttcost).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"}
    else {FUND ="<table class='infotable'><thead><tr><th>Unfunded Cost<br><i>(millions in 2021 $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.unfund_ill).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"};
   
    RSE = props.catgroup,
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.catgroup + '.png"/><p>' + props.facility + '</p></div>',
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.loc + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.ps1 + props.ps2 +"</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    + FUND
    + TIP
    +"</div>"
    +"<div class='datafield' id='"+props.catgroup+"'style='color:#fff;padding:6px'>" + props.category
    +"</div>",
    layerName = 'layer1';
  
        document.getElementById('infoheader').innerHTML = header;                   //push content to info box header
        document.getElementById('info').innerHTML = content;                        //push content to info box
       //push class to create style for feature name
        document.getElementById('infoheader').className = RSE;           //push class to create style for info header
        toggleinfo(); 
    //  console.log(tips);
};
// Roadway System Expansion
function highlightLayer1pt(e) {
    initializeHL(e);
    if (props.website === 'N/A') { Website = " ";}
    else { Website =  "<div class='datafield'><a class='one' href='"+ props.website +"' target='_blank'>"+ props.website +"</a></div><div class='labelfield'>Website</div>"};
      
    var tips = [];
    for (var i = 1; i <= 28; i++) {
        if (props['tip'+i] > 0 || props['tip'+i] != '0' ) {
            if (props.state === 'NJ') { state = "/Project/"}
            else { state = "/map/";};
            tips.push("<a class='one' href='https://www.dvrpc.org/TIP/" + props.state + state + props["tip"+i] +"' target='_blank'>"+ props["tip"+i]+"</a>");
        }
    }
    if (!tips.length) { TIP = " ";}
    else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};

    if (props.visiontype === 'Roadway Funded') {FUND ="<table class='infotable'><thead><tr><th>System Expansion<br><i>(millions in Y-O-E $)</i></th><th>System Preservation<br><i>(millions in Y-O-E $)</i></th><th>Operational Improvements<br><i>(millions in Y-O-E $)</i></th><th>Total Funded Cost<br><i>(millions in Y-O-E $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.expcosts).format('($0,0.0)') +"</td><td> "+ numeral(props.prescosts).format('($0,0.0)') +"</td><td> "+ numeral(props.opcosts).format('($0,0.0)') +"</td><td> "+ numeral(props.ttcost).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"}
    else {FUND ="<table class='infotable'><thead><tr><th>Unfunded Cost<br><i>(millions in 2021 $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.unfund_ill).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"};
   
    RSE = props.catgroup,
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.catgroup + '.png"/><p>' + props.facility + '</p></div>',
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.loc + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.ps1 + props.ps2 +"</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    + FUND
    + TIP
    +"<div class='datafield' id='"+props.catgroup+"'style='color:#fff;padding:6px'>" + props.category
    +"</div>",
    layerName = 'layer5pt'; 

    document.getElementById('infoheader').innerHTML = header;                   //push content to info box header
    document.getElementById('info').innerHTML = content;                        //push content to info box
    document.getElementById('infoheader').className = RSE;           //push class to create style for info header
    toggleinfo(); 
};
//Group 5 Layer Selections ////////////
// Bike and Pedestrian
function highlightLayer5pt(e) {
    initializeHL(e);
    if (props.website === 'N/A') { Website = " ";}
    else { Website =  "<div class='datafield'><a class='one' href='"+ props.website +"' target='_blank'>"+ props.website +"</a></div><div class='labelfield'>Website</div>"};
      
    var tips = [];
    for (var i = 1; i <= 28; i++) {
        if (props['tip'+i] > 0 || props['tip'+i] != '0' ) {
            if (props.state === 'NJ') { state = "/Project/"}
            else { state = "/map/";};
            tips.push("<a class='one' href='https://www.dvrpc.org/TIP/" + props.state + state + props["tip"+i] +"' target='_blank'>"+ props["tip"+i]+"</a>");
        }
    }
    if (!tips.length) { TIP = " ";}
    else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};

    RSE = props.catgroup,
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.catgroup + '.png"/><p>' + props.facility + '</p></div>',
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.loc + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.ps1 + props.ps2 +"</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    +"<table class='infotable'><thead><tr><th>Unfunded Cost<br><i>(millions in 2021 $)</i></th></tr></thead>"
    +"<tbody><tr><td> "+ numeral(props.unfund_ill).format('($0,0.0)') +"</td></tr></tbody>"
    +"</table><div class='labelfield'>Funding</div>"
    + TIP
    +"<div class='datafield' id='"+props.catgroup+"'style='color:#fff;padding:6px'>" + props.category
    +"</div>",
    layerName = 'layer5pt'; 

    document.getElementById('infoheader').innerHTML = header;                   //push content to info box header
    document.getElementById('info').innerHTML = content;                        //push content to info box
    document.getElementById('infoheader').className = RSE;           //push class to create style for info header
    toggleinfo(); 
};
//  layer5
// Bike and Pedestrian
function highlightLayer5(e) {
    initializeHL(e);
        if (props.website === 'N/A') { Website = " ";}
        else { Website =  "<div class='datafield'><a class='one' href='"+ props.website +"' target='_blank'>"+ props.website +"</a></div><div class='labelfield'>Website</div>"};
    
    var tips = [];
    for (var i = 1; i <= 28; i++) {
        if (props['tip'+i] > 0 || props['tip'+i] != '0' ) {
            if (props.state === 'NJ') { state = "/Project/"}
            else { state = "/map/";};
            tips.push("<a class='one' href='https://www.dvrpc.org/TIP/" + props.state + state + props["tip"+i] +"' target='_blank'>"+ props["tip"+i]+"</a>");
        }
    }
    if (!tips.length) { TIP = " ";}
    else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};

    if (props.visiontype === 'Roadway Funded') {FUND ="<table class='infotable'><thead><tr><th>Local, Private, and Other Funded<br><i>(millions in Y-O-E $)</i></th><th>Total Funded Cost<br><i>(millions in Y-O-E $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.external_c).format('($0,0.0)') +"</td><td> "+ numeral(props.bpcosts).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"}
    else {FUND ="<table class='infotable'><thead><tr><th>Unfunded Cost<br><i>(millions in 2021 $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.unfund_ill).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"};
   
    RSE = props.catgroup,
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.catgroup + '.png"/><p>' + props.facility + '</p></div>',  
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.loc + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.ps1 + props.ps2 +"</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    + FUND
    + TIP
    +"</div>"
    +"<div class='datafield' id='"+props.catgroup+"'style='color:#fff;padding:6px'>" + props.category
    +"</div>",
    layerName = 'layer5';

    document.getElementById('infoheader').innerHTML = header;                   //push content to info box header
    document.getElementById('info').innerHTML = content;                        //push content to info box
    document.getElementById('infoheader').className = RSE;           //push class to create style for info header
    toggleinfo(); 
};

//Group 2 Layer Selections
//  layer2
// Transit System Preservation
function highlightLayer2(e) {
    initializeHL(e);
    if (props.website === 'N/A') { Website = " ";}
    else { Website =  "<div class='datafield'><a class='one' href='"+ props.website +"' target='_blank'>"+ props.website +"</a></div><div class='labelfield'>Website</div>"};
    
    var tips = [];
    for (var i = 1; i <= 28; i++) {
        if (props['tip'+i] > 0 || props['tip'+i] != '0' ) {
            if (props.state === 'NJ') { state = "/Project/"}
            else { state = "/map/";};
            tips.push("<a class='one' href='https://www.dvrpc.org/TIP/" + props.state + state + props["tip"+i] +"' target='_blank'>"+ props["tip"+i]+"</a>");
        }
    }
    if (!tips.length) { TIP = " ";}
    else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};

    if (props.visiontype === 'Transit Funded') {FUND ="<table class='infotable'><thead><tr><th>Total State and Federal Costs<br><i>(millions in Y-O-E $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.prescosts).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"}
    else {FUND ="<table class='infotable'><thead><tr><th>Unfunded Cost<br><i>(millions in 2021 $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.unfund_ill).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"};
    
    TSP = props.catgroup,
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.catgroup + '.png"/><p>' + props.facility + '</p></div>',
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.loc + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.ps1 + props.ps2 +"</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    + FUND
    + TIP
    +"<div class='datafield' id='"+props.catgroup+"'style='color:#fff;padding:6px'>" + props.category
    +"</div>",
    layerName = 'layer2'; 

    document.getElementById('infoheader').innerHTML = header;                   //push content to info box header
    document.getElementById('info').innerHTML = content;                        //push content to info box
    document.getElementById('infoheader').className = TSP;           //push class to create style for info header
    toggleinfo(); 
};
//  layer2pt
// Transit System Preservation
function highlightLayer2pt(e) {
    initializeHL(e);
    if (props.website === 'N/A') { Website = " ";}
    else { Website =  "<div class='datafield'><a class='one' href='"+ props.website +"' target='_blank'>"+ props.website +"</a></div><div class='labelfield'>Website</div>"};
      
    var tips = [];
    for (var i = 1; i <= 28; i++) {
        if (props['tip'+i] > 0 || props['tip'+i] != '0' ) {
            if (props.state === 'NJ') { state = "/Project/"}
            else { state = "/map/";};
            tips.push("<a class='one' href='https://www.dvrpc.org/TIP/" + props.state + state + props["tip"+i] +"' target='_blank'>"+ props["tip"+i]+"</a>");
        }
    }
    if (!tips.length) { TIP = " ";}
    else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};

    if (props.visiontype === 'Transit Funded') {FUND ="<table class='infotable'><thead><tr><th>Total State and Federal Costs<br><i>(millions in Y-O-E $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.prescosts).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"}
    else {FUND ="<table class='infotable'><thead><tr><th>Unfunded Cost<br><i>(millions in 2021 $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.unfund_ill).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"};
    
    TSP = props.catgroup,
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.catgroup + '.png"/><p>' + props.facility + '</p></div>',
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.loc + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.ps1 + props.ps2 + "</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    + FUND
    + TIP
    +"<div class='datafield' id='"+props.catgroup+"'style='color:#fff;padding:6px'>" + props.category
    +"</div>",
    layerName = 'layer2pt'; 

    document.getElementById('infoheader').innerHTML = header;                   //push content to info box header
    document.getElementById('info').innerHTML = content;                        //push content to info box
    document.getElementById('infoheader').className = TSP;           //push class to create style for info header
    toggleinfo(); 
};
// Transit Operation Improvements
function highlightLayer6pt(e) {
    initializeHL(e);
    if (props.website === 'N/A') { Website = " ";}
    else { Website =  "<div class='datafield'><a class='one' href='"+ props.website +"' target='_blank'>"+ props.website +"</a></div><div class='labelfield'>Website</div>"};
      
    var tips = [];
    for (var i = 1; i <= 28; i++) {
        if (props['tip'+i] > 0 || props['tip'+i] != '0' ) {
            if (props.state === 'NJ') { state = "/Project/"}
            else { state = "/map/";};
            tips.push("<a class='one' href='https://www.dvrpc.org/TIP/" + props.state + state + props["tip"+i] +"' target='_blank'>"+ props["tip"+i]+"</a>");
        }
    }
    if (!tips.length) { TIP = " ";}
    else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};

    if (props.visiontype === 'Transit Funded') {FUND ="<table class='infotable'><thead><tr><th>Total State and Federal Costs<br><i>(millions in Y-O-E $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.opcosts).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"}
    else {FUND ="<table class='infotable'><thead><tr><th>Unfunded Cost<br><i>(millions in 2021 $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.unfund_ill).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"};
    
    TSP = props.catgroup,
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.catgroup + '.png"/><p>' + props.facility + '</p></div>',
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.loc + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.ps1 + props.ps2 +"</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    + FUND
    + TIP
    +"<div class='datafield' id='"+props.catgroup+"'style='color:#fff;padding:6px'>" + props.category
    +"</div>",
    layerName = 'layer2pt'; 

    document.getElementById('infoheader').innerHTML = header;                   //push content to info box header
    document.getElementById('info').innerHTML = content;                        //push content to info box
    document.getElementById('infoheader').className = TSP;           //push class to create style for info header
    toggleinfo(); 
};
//  layer6
// Transit Operation Improvements
function highlightLayer6(e) {
    initializeHL(e);
    if (props.website === 'N/A') { Website = " ";}
    else { Website =  "<div class='datafield'><a class='one' href='"+ props.website +"' target='_blank'>"+ props.website +"</a></div><div class='labelfield'>Website</div>"};
    
    var tips = [];
    for (var i = 1; i <= 28; i++) {
        if (props['tip'+i] > 0 || props['tip'+i] != '0' ) {
            if (props.state === 'NJ') { state = "/Project/"}
            else { state = "/map/";};
            tips.push("<a class='one' href='https://www.dvrpc.org/TIP/" + props.state + state + props["tip"+i] +"' target='_blank'>"+ props["tip"+i]+"</a>");
        }
    }
    if (!tips.length) { TIP = " ";}
    else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};

    if (props.visiontype === 'Transit Funded') {FUND ="<table class='infotable'><thead><tr><th>Total State and Federal Costs<br><i>(millions in Y-O-E $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.opcosts).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"}
    else {FUND ="<table class='infotable'><thead><tr><th>Unfunded Cost<br><i>(millions in 2021 $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.unfund_ill).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"};
    
    TSP = props.catgroup,
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.catgroup + '.png"/><p>' + props.facility + '</p></div>',
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.loc + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.ps1 + props.ps2 +"</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    + FUND
    + TIP
    +"<div class='datafield' id='"+props.catgroup+"'style='color:#fff;padding:6px'>" + props.category
    +"</div>",
    layerName = 'layer6'; 

    document.getElementById('infoheader').innerHTML = header;                   //push content to info box header
    document.getElementById('info').innerHTML = content;                        //push content to info box
    document.getElementById('infoheader').className = TSP;           //push class to create style for info header
    toggleinfo(); 
};
//  layer7pt
// Transit System Expansion
function highlightLayer7pt(e) {
    initializeHL(e);
    if (props.website === 'N/A') { Website = " ";}
    else { Website =  "<div class='datafield'><a class='one' href='"+ props.website +"' target='_blank'>"+ props.website +"</a></div><div class='labelfield'>Website</div>"};
    
    var tips = [];
    for (var i = 1; i <= 28; i++) {
        if (props['tip'+i] > 0 || props['tip'+i] != '0' ) {
            if (props.state === 'NJ') { state = "/Project/"}
            else { state = "/map/";};
            tips.push("<a class='one' href='https://www.dvrpc.org/TIP/" + props.state + state + props["tip"+i] +"' target='_blank'>"+ props["tip"+i]+"</a>");
        }
    }
    if (!tips.length) { TIP = " ";}
    else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};

    if (props.visiontype === 'Transit Funded') {FUND = "<div class='datafield'>Funds fully obligated prior to 2022</div><div class='labelfield'>Funding</div>"}
    else {FUND ="<table class='infotable'><thead><tr><th>Unfunded Cost<br><i>(millions in 2021 $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.unfund_ill).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"};

    TSP = props.catgroup,
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.catgroup + '.png"/><p>' + props.facility + '</p></div>',
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.loc + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.ps1 + props.ps2 +"</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    + FUND
    + TIP
    +"<div class='datafield' id='"+props.catgroup+"'style='color:#fff;padding:6px'>" + props.category
    +"</div>",
    layerName = 'layer7pt'; 

    document.getElementById('infoheader').innerHTML = header;                   //push content to info box header
    document.getElementById('info').innerHTML = content;                        //push content to info box
    document.getElementById('infoheader').className = TSP;           //push class to create style for info header
    toggleinfo(); 
};
//  layer7
// Transit System Expansion
function highlightLayer7(e) {
    initializeHL(e);
    
    if (props.website === 'N/A') { Website = " ";}
    else { Website =  "<div class='datafield'><a class='one' href='"+ props.website+"' target='_blank'>"+ props.website+"</a></div><div class='labelfield'>Website</div>"};
    
    var tips = [];
    for (var i = 1; i <= 28; i++) {
        if (props['tip'+i] > 0 || props['tip'+i] != '0' ) {
            if (props.state === 'NJ') { state = "/Project/"}
            else { state = "/map/";};
            tips.push("<a class='one' href='https://www.dvrpc.org/TIP/" + props.state + state + props["tip"+i] +"' target='_blank'>"+ props["tip"+i]+"</a>");
        }
    }
    if (!tips.length) { TIP = " ";}
        else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};
    
    if (props.visiontype === 'Transit Funded') {FUND ="<table class='infotable'><thead><tr><th>State and Local<br><i>(millions in Y-O-E $)</i></th><th>Federal New Starts /<br>Core Capacity<br><i>(millions in Y-O-E $)</i></th><th>Total Funded Cost<br><i>(millions in Y-O-E $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.expcosts).format('($0,0.0)') +"</td><td> "+ numeral(props.external_c).format('($0,0.0)') +"</td><td> "+ numeral(props.ttcost).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"}
    else {FUND ="<table class='infotable'><thead><tr><th>Unfunded Cost<br><i>(millions in 2021 $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.unfund_ill).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"};

    TSP =  props.catgroup,
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.catgroup + '.png"/><p>' + props.facility + '</p></div>',
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.loc + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.ps1 + props.ps2 +"</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    + FUND
    + TIP
    +"<div class='datafield' id='"+props.catgroup+"'style='color:#fff;padding:6px'>" + props.category
    +"</div>",
    layerName = 'layer7'; 

    document.getElementById('infoheader').innerHTML = header;                   //push content to info box header
    document.getElementById('info').innerHTML = content;                        //push content to info box
    document.getElementById('infoheader').className = TSP;           //push class to create style for info header
    toggleinfo(); 
};
// Externally Funded point
function highlightLayer8pt(e) {
    initializeHL(e);
    if (props.website === 'N/A') { Website = " ";}
    else { Website =  "<div class='datafield'><a class='one' href='"+ props.website +"' target='_blank'>"+ props.website +"</a></div><div class='labelfield'>Website</div>"};
      
    RSE = props.catgroup,
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.catgroup + '.png"/><p>' + props.facility + '</p></div>',
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.loc + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.ps1 + props.ps2 + "</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    +"<table class='infotable'><thead><tr><th>Total External Cost<br><i>(millions in 2021 $)</i></th></tr></thead>"
    +"<tbody><tr><td> "+ numeral(props.external_c).format('($0,0.0)') +"</td></tr></tbody>"
    +"</table><div class='labelfield'>Funding</div>"
    // + TIP
    +"<div class='datafield' id='"+props.catgroup+"'style='color:#fff;padding:6px'>" + props.category
    +"</div>",
    layerName = 'layer8pt'; 

    document.getElementById('infoheader').innerHTML = header;                   //push content to info box header
    document.getElementById('info').innerHTML = content;                        //push content to info box
    document.getElementById('infoheader').className = RSE;           //push class to create style for info header
    toggleinfo(); 
};
//  layer8 Externally Funded
function highlightLayer8(e) {
    initializeHL(e);
    if (props.website === 'N/A') { Website = " ";}
    else { Website =  "<div class='datafield'><a class='one' href='"+ props.website +"' target='_blank'>"+ props.website +"</a></div><div class='labelfield'>Website</div>"};

    if (props.external_c === 'TBD') {EXT ="<tbody><tr><td> "+ props.external_c +"</td></tr></tbody>"}
    else {EXT ="<tbody><tr><td> "+ numeral(props.external_c).format('($0,0.0)') +"</td></tr></tbody>"};
    RSE = props.catgroup,
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.catgroup + '.png"/><p>' + props.facility + '</p></div>',     
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.loc + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.ps1 + props.ps2 + "</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    +"<table class='infotable'><thead><tr><th>Total Extrernal Cost<br><i>(millions in 2021 $)</i></th></tr></thead>"
    + EXT
    +"</table><div class='labelfield'>Funding</div>"
    +"</div>"
    +"<div class='datafield' id='"+props.catgroup+"'style='color:#fff;padding:6px'>" + props.category
    +"</div>",
    layerName = 'layer8';
    
    document.getElementById('infoheader').innerHTML = header;                   //push content to info box header
    document.getElementById('info').innerHTML = content;                        //push content to info box
    document.getElementById('infoheader').className = RSE;           //push class to create style for info header
    toggleinfo(); 
};

 
