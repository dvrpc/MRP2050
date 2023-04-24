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
        if (props.Website === 'N/A') { Website = " ";}
        else { Website =  "<div class='datafield'><a class='one' href='"+ props.Website +"' target='_blank'>"+ props.Website+"</a></div><div class='labelfield'>Website</div>"};
    
    var tips = [];
    for (var i = 1; i <= 28; i++) {
        if (props['TIP'+i] > 0 || props['TIP'+i] != '0' ) {
            tips.push("<a class='one' href='https://www.dvrpc.org/TIP/" + props.ST + "/Project/" +props["TIP"+i] +"' target='_blank'>"+ props["TIP"+i]+"</a>");
        }
    }
    if (!tips.length) { TIP = " ";}
    else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};
   
    if (props.VisionType === 'Roadway Funded') {FUND ="<table class='infotable'><thead><tr><th>TIP Programmed Costs<br><i>(millions in Y-O-E $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.TTCost).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"}
    else {FUND ="<table class='infotable'><thead><tr><th>Unfunded Cost<br><i>(millions in 2021 $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.Unfund_Ill).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"};
   
    RSE = props.CATGROUP,
 //   header = '<div style="color:white;background-color:'+props.BanColor+'"><span id="infoheader-text"><img style="margin:0px 0px 0px 6px" src="'+ props.TYPE_IMG+ '"/>&nbsp;&nbsp;' + props.FACILITY + '</span></div>',
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.CATGROUP + '.png"/><p>' + props.FACILITY + '</p></div>',     
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.LOC + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.PS1 + "</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.Timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    + FUND
    + TIP
    +"</div>"
    +"<div class='datafield' id='"+props.CATGROUP+"'style='color:#fff;padding:6px'>" + props.CATEGORY 
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
    if (props.Website === 'N/A') { Website = " ";}
    else { Website =  "<div class='datafield'><a class='one' href='"+ props.Website +"' target='_blank'>"+ props.Website+"</a></div><div class='labelfield'>Website</div>"};
    
    var tips = [];
    for (var i = 1; i <= 28; i++) {
        if (props['TIP'+i] > 0 || props['TIP'+i] != '0' ) {
            tips.push("<a class='one' href='https://www.dvrpc.org/TIP/" + props.STATE + "/Project/" +props["TIP"+i] +"' target='_blank'>"+ props["TIP"+i]+"</a>");
        }
    }
    if (!tips.length) { TIP = " ";}
    else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};

    if (props.VisionType === 'Roadway Funded') {FUND ="<table class='infotable'><thead><tr><th>TIP Programmed Costs<br><i>(millions in Y-O-E $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.TTCost).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"}
    else {FUND ="<table class='infotable'><thead><tr><th>Unfunded Cost<br><i>(millions in 2021 $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.Unfund_Ill).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"};
   
    RSE = props.CATGROUP;
//    header = '<div style="color:white;background-color:'+props.BanColor+'"><span id="infoheader-text"><img style="margin:0px 0px 0px 6px" src="'+ props.TYPE_IMG+ '"/>&nbsp;&nbsp;' + props.FACILITY + '</span></div>',
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.CATGROUP + '.png"/><p>' + props.FACILITY + '</p></div>',
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.LOC + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.PS1 + "</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.Timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    // +"<table class='infotable'><thead><tr><th>TIP Programmed Costs<br><i>(millions in Y-O-E $)</i></th><th>Unfunded Cost<br><i>(millions in 2021 $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.TTCost).format('($0,0.0)') +"</td><td> "+ numeral(props.Unfund_Ill).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"
    + FUND
    + TIP
  //  + TIP2a
 //   + TIP3a
    +"</div>"
    +"<div class='datafield' id='"+props.CATGROUP+"'style='color:#fff;padding:6px'>" + props.CATEGORY 
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
    if (props.Website === 'N/A') { Website = " ";}
    else { Website =  "<div class='datafield'><a class='one' href='"+ props.Website +"' target='_blank'>"+ props.Website +"</a></div><div class='labelfield'>Website</div>"};
      
    var tips = [];
    for (var i = 1; i <= 28; i++) {
        if (props['TIP'+i] > 0 || props['TIP'+i] != '0' ) {
            tips.push("<a class='one' href='https://www.dvrpc.org/TIP/" + props.STATE + "/Project/" +props["TIP"+i] +"' target='_blank'>"+ props["TIP"+i]+"</a>");
        }
    }
    if (!tips.length) { TIP = " ";}
    else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};
    
    if (props.VisionType === 'Roadway Funded') {FUND ="<table class='infotable'><thead><tr><th>Funded Cost<br><i>(millions in Y-O-E $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.TTCost).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"}
    else {FUND ="<table class='infotable'><thead><tr><th>Unfunded Cost<br><i>(millions in 2021 $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.Unfund_Ill).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"};
   
    RSE = props.CATGROUP;
//    header = '<div style="color:white;background-color:'+props.BanColor+'"><img style="margin:0px 0px 0px 10px !important;" src="'+ props.TYPE_IMG+ '"/><span id="infoheader-text">' + props.FACILITY + '</span></div>',
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.CATGROUP + '.png"/><p>' + props.FACILITY + '</p></div>',
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.LOC + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.PS1 + "</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.Timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    + FUND
    + TIP
  //  +TIP1a
  //  +TIP2a
  //  +TIP3a
    +"<div class='datafield' id='"+props.CATGROUP+"'style='color:#fff;padding:6px'>" + props.CATEGORY 
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
        if (props.Website === 'N/A') { Website = " ";}
        else { Website =  "<div class='datafield'><a class='one' href='"+ props.Website +"' target='_blank'>"+ props.Website +"</a></div><div class='labelfield'>Website</div>"};
    var tips = [];
    for (var i = 1; i <= 28; i++) {
        if (props['TIP'+i] > 0 || props['TIP'+i] != '0' ) {
            tips.push("<a class='one' href='https://www.dvrpc.org/TIP/" + props.ST + "/Project/" +props["TIP"+i] +"' target='_blank'>"+ props["TIP"+i]+"</a>");
        }
    }
    if (!tips.length) { TIP = " ";}
    else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};

    if (props.VisionType === 'Roadway Funded') {FUND ="<table class='infotable'><thead><tr><th>System Preservation<br><i>(millions in Y-O-E $)</i></th><th>Operational Improvements<br><i>(millions in Y-O-E $)</i></th><th>Total Funded Cost<br><i>(millions in Y-O-E $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.PresCosts).format('($0,0.0)') +"</td><td> "+ numeral(props.OpCosts).format('($0,0.0)') +"</td><td> "+ numeral(props.TTCost).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"}   else {FUND ="<table class='infotable'><thead><tr><th>Unfunded Cost<br><i>(millions in 2021 $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.Unfund_Ill).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"};
   
    RSE = props.CATGROUP;
//    header = '<div style="color:white;background-color:'+props.BanColor+'"><span id="infoheader-text"><img style="margin:0px 0px 0px 6px" src="'+ props.TYPE_IMG+ '"/>&nbsp;&nbsp;' + props.FACILITY + '</span></div>',
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.CATGROUP + '.png"/><p>'+ props.FACILITY + '</p></div>',    
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.LOC + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.PS1 + "</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.Timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    + FUND
    + TIP
    +"</div>"
    +"<div class='datafield' id='"+props.CATGROUP+"'style='color:#fff;padding:6px'>" + props.CATEGORY 
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
        if (props.Website === 'N/A') { Website = " ";}
        else { Website =  "<div class='datafield'><a class='one' href='"+ props.Website+"' target='_blank'>"+ props.Website+"</a></div><div class='labelfield'>Website</div>"};

    var tips = [];
    for (var i = 1; i <= 28; i++) {
        if (props['TIP'+i] > 0 || props['TIP'+i] != '0' ) {
            tips.push("<a class='one' href='https://www.dvrpc.org/TIP/" + props.ST + "/Project/" +props["TIP"+i] +"' target='_blank'>"+ props["TIP"+i]+"</a>");
        }
    }
    if (!tips.length) { TIP = " ";}
    else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};

    if (props.VisionType === 'Roadway Funded') {FUND ="<table class='infotable'><thead><tr><th>System Expansion<br><i>(millions in Y-O-E $)</i></th><th>System Preservation<br><i>(millions in Y-O-E $)</i></th><th>Operational Improvements<br><i>(millions in Y-O-E $)</i></th><th>Total Funded Cost<br><i>(millions in Y-O-E $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.ExpCosts).format('($0,0.0)') +"</td><td> "+ numeral(props.PresCosts).format('($0,0.0)') +"</td><td> "+ numeral(props.OpCosts).format('($0,0.0)') +"</td><td> "+ numeral(props.TTCost).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"}
    else {FUND ="<table class='infotable'><thead><tr><th>Unfunded Cost<br><i>(millions in 2021 $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.Unfund_Ill).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"};
   
    RSE = props.CATGROUP,
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.CATGROUP + '.png"/><p>' + props.FACILITY + '</p></div>',
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.LOC + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.PS1 + "</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.Timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    + FUND
    + TIP
    +"</div>"
    +"<div class='datafield' id='"+props.CATGROUP+"'style='color:#fff;padding:6px'>" + props.CATEGORY 
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
    if (props.Website === 'N/A') { Website = " ";}
    else { Website =  "<div class='datafield'><a class='one' href='"+ props.Website +"' target='_blank'>"+ props.Website +"</a></div><div class='labelfield'>Website</div>"};
      
    var tips = [];
    for (var i = 1; i <= 28; i++) {
        if (props['TIP'+i] > 0 || props['TIP'+i] != '0' ) {
            tips.push("<a class='one' href='https://www.dvrpc.org/TIP/" + props.STATE + "/Project/" +props["TIP"+i] +"' target='_blank'>"+ props["TIP"+i]+"</a>");
        }
    }
    if (!tips.length) { TIP = " ";}
    else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};

    if (props.VisionType === 'Roadway Funded') {FUND ="<table class='infotable'><thead><tr><th>System Expansion<br><i>(millions in Y-O-E $)</i></th><th>System Preservation<br><i>(millions in Y-O-E $)</i></th><th>Operational Improvements<br><i>(millions in Y-O-E $)</i></th><th>Total Funded Cost<br><i>(millions in Y-O-E $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.ExpCosts).format('($0,0.0)') +"</td><td> "+ numeral(props.PresCosts).format('($0,0.0)') +"</td><td> "+ numeral(props.OpCosts).format('($0,0.0)') +"</td><td> "+ numeral(props.TTCost).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"}
    else {FUND ="<table class='infotable'><thead><tr><th>Unfunded Cost<br><i>(millions in 2021 $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.Unfund_Ill).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"};
   
    RSE = props.CATGROUP,
//    header = '<div style="color:white;background-color:'+props.BanColor+'"><img style="margin:0px 0px 0px 10px !important;" src="'+ props.TYPE_IMG+ '"/><span id="infoheader-text">' + props.FACILITY + '</span></div>',
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.CATGROUP + '.png"/><p>' + props.FACILITY + '</p></div>',
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.LOC + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.PS1 + "</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.Timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    + FUND
    + TIP
  //  +TIP1a
  //  +TIP2a
  //  +TIP3a
    +"<div class='datafield' id='"+props.CATGROUP+"'style='color:#fff;padding:6px'>" + props.CATEGORY 
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
    if (props.Website === 'N/A') { Website = " ";}
    else { Website =  "<div class='datafield'><a class='one' href='"+ props.Website +"' target='_blank'>"+ props.Website +"</a></div><div class='labelfield'>Website</div>"};
      
    var tips = [];
    for (var i = 1; i <= 28; i++) {
        if (props['TIP'+i] > 0 || props['TIP'+i] != '0' ) {
            tips.push("<a class='one' href='https://www.dvrpc.org/TIP/" + props.STATE + "/Project/" +props["TIP"+i] +"' target='_blank'>"+ props["TIP"+i]+"</a>");
        }
    }
    if (!tips.length) { TIP = " ";}
    else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};

    RSE = props.CATGROUP,
//    header = '<div style="color:white;background-color:'+props.BanColor+'"><img style="margin:0px 0px 0px 10px !important;" src="'+ props.TYPE_IMG+ '"/><span id="infoheader-text">' + props.FACILITY + '</span></div>',
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.CATGROUP + '.png"/><p>' + props.FACILITY + '</p></div>',
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.LOC + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.PS1 + "</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.Timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    +"<table class='infotable'><thead><tr><th>Unfunded Cost<br><i>(millions in 2021 $)</i></th></tr></thead>"
    +"<tbody><tr><td> "+ numeral(props.Unfund_Ill).format('($0,0.0)') +"</td></tr></tbody>"
    +"</table><div class='labelfield'>Funding</div>"
    + TIP
  //  +TIP1a
  //  +TIP2a
  //  +TIP3a
    +"<div class='datafield' id='"+props.CATGROUP+"'style='color:#fff;padding:6px'>" + props.CATEGORY 
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
        if (props.Website === 'N/A') { Website = " ";}
        else { Website =  "<div class='datafield'><a class='one' href='"+ props.Website +"' target='_blank'>"+ props.Website +"</a></div><div class='labelfield'>Website</div>"};
    
    var tips = [];
    for (var i = 1; i <= 28; i++) {
        if (props['TIP'+i] > 0 || props['TIP'+i] != '0' ) {
            tips.push("<a class='one' href='https://www.dvrpc.org/TIP/" + props.ST + "/Project/" +props["TIP"+i] +"' target='_blank'>"+ props["TIP"+i]+"</a>");
        }
    }
    if (!tips.length) { TIP = " ";}
    else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};

    if (props.VisionType === 'Roadway Funded') {FUND ="<table class='infotable'><thead><tr><th>Local, Private, and Other Funded<br><i>(millions in Y-O-E $)</i></th><th>Total Funded Cost<br><i>(millions in Y-O-E $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.External_C).format('($0,0.0)') +"</td><td> "+ numeral(props.BPCosts).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"}
    else {FUND ="<table class='infotable'><thead><tr><th>Unfunded Cost<br><i>(millions in 2021 $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.Unfund_Ill).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"};
   
    RSE = props.CATGROUP,
//    header = '<div style="color:white;background-color:'+props.BanColor+'"><span id="infoheader-text"><img style="margin:0px 0px 0px 6px" src="'+ props.TYPE_IMG+ '"/>&nbsp;&nbsp;' + props.FACILITY + '</span></div>',
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.CATGROUP + '.png"/><p>' + props.FACILITY + '</p></div>',  
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.LOC + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.PS1 + "</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.Timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    + FUND
    + TIP
    +"</div>"
    +"<div class='datafield' id='"+props.CATGROUP+"'style='color:#fff;padding:6px'>" + props.CATEGORY 
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
    if (props.Website === 'N/A') { Website = " ";}
    else { Website =  "<div class='datafield'><a class='one' href='"+ props.Website +"' target='_blank'>"+ props.Website +"</a></div><div class='labelfield'>Website</div>"};
    
    var tips = [];
    for (var i = 1; i <= 28; i++) {
        if (props['TIP'+i] > 0 || props['TIP'+i] != '0' ) {
            tips.push("<a class='one' href='https://www.dvrpc.org/TIP/" + props.ST + "/Project/" +props["TIP"+i] +"' target='_blank'>"+ props["TIP"+i]+"</a>");
        }
    }
    if (!tips.length) { TIP = " ";}
    else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};

    if (props.VisionType === 'Transit Funded') {FUND ="<table class='infotable'><thead><tr><th>Total State and Federal Costs<br><i>(millions in Y-O-E $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.PresCosts).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"}
    else {FUND ="<table class='infotable'><thead><tr><th>Unfunded Cost<br><i>(millions in 2021 $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.Unfund_Ill).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"};
    
    TSP = props.CATGROUP,
//    header = '<div style="color:white;background-color:'+props.BanColor+'"><img style="margin:0px 0px 0px 10px !important;" src="'+ props.TYPE_IMG+ '"/><span id="infoheader-text">' + props.FACILITY + '</span></div>',
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.CATGROUP + '.png"/><p>' + props.FACILITY + '</p></div>',
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.LOC + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.PS1 + "</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.Timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    + FUND
    + TIP
    +"<div class='datafield' id='"+props.CATGROUP+"'style='color:#fff;padding:6px'>" + props.CATEGORY 
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
    if (props.Website === 'N/A') { Website = " ";}
    else { Website =  "<div class='datafield'><a class='one' href='"+ props.Website +"' target='_blank'>"+ props.Website +"</a></div><div class='labelfield'>Website</div>"};
      
    var tips = [];
    for (var i = 1; i <= 28; i++) {
        if (props['TIP'+i] > 0 || props['TIP'+i] != '0' ) {
            tips.push("<a class='one' href='https://www.dvrpc.org/TIP/" + props.STATE + "/Project/" +props["TIP"+i] +"' target='_blank'>"+ props["TIP"+i]+"</a>");
        }
    }
    if (!tips.length) { TIP = " ";}
    else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};

    if (props.VisionType === 'Transit Funded') {FUND ="<table class='infotable'><thead><tr><th>Total State and Federal Costs<br><i>(millions in Y-O-E $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.PresCosts).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"}
    else {FUND ="<table class='infotable'><thead><tr><th>Unfunded Cost<br><i>(millions in 2021 $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.Unfund_Ill).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"};
    
    TSP = props.CATGROUP,
//    header = '<div style="color:white;background-color:'+props.BanColor+'"><img style="margin:0px 0px 0px 10px !important;" src="'+ props.TYPE_IMG+ '"/><span id="infoheader-text">' + props.FACILITY + '</span></div>',
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.CATGROUP + '.png"/><p>' + props.FACILITY + '</p></div>',
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.LOC + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.PS1 + "</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.Timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    + FUND
    + TIP
  //  +TIP1a
  //  +TIP2a
  //  +TIP3a
    +"<div class='datafield' id='"+props.CATGROUP+"'style='color:#fff;padding:6px'>" + props.CATEGORY 
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
    if (props.Website === 'N/A') { Website = " ";}
    else { Website =  "<div class='datafield'><a class='one' href='"+ props.Website +"' target='_blank'>"+ props.Website +"</a></div><div class='labelfield'>Website</div>"};
      
    var tips = [];
    for (var i = 1; i <= 28; i++) {
        if (props['TIP'+i] > 0 || props['TIP'+i] != '0' ) {
            tips.push("<a class='one' href='https://www.dvrpc.org/TIP/" + props.STATE + "/Project/" +props["TIP"+i] +"' target='_blank'>"+ props["TIP"+i]+"</a>");
        }
    }
    if (!tips.length) { TIP = " ";}
    else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};

    if (props.VisionType === 'Transit Funded') {FUND ="<table class='infotable'><thead><tr><th>Total State and Federal Costs<br><i>(millions in Y-O-E $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.OpCosts).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"}
    else {FUND ="<table class='infotable'><thead><tr><th>Unfunded Cost<br><i>(millions in 2021 $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.Unfund_Ill).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"};
    
    TSP = props.CATGROUP,
//    header = '<div style="color:white;background-color:'+props.BanColor+'"><img style="margin:0px 0px 0px 10px !important;" src="'+ props.TYPE_IMG+ '"/><span id="infoheader-text">' + props.FACILITY + '</span></div>',
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.CATGROUP + '.png"/><p>' + props.FACILITY + '</p></div>',
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.LOC + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.PS1 + "</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.Timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    // +"<table class='infotable'><thead><tr><th>State and Local <br>Funded Cost<br><i>(millions in Y-O-E $)</i></th><th>Federal New Starts /<br>Core Capacity<br><i>(millions in Y-O-E $)</i></th><th>Unfunded Cost<br><i>(millions in 2021 $)</i></th></tr></thead>"
    // +"<tbody><tr><td> "+ numeral(props.OpCosts).format('($0,0.0)') +"</td><td> "+ numeral(props.External_C).format('($0,0.0)') +"</td><td> "+ numeral(props.Unfund_Ill).format('($0,0.0)') +"</td></tr></tbody>"
    // +"</table><div class='labelfield'>Funding</div>"
    + FUND
    + TIP
  //  +TIP1a
  //  +TIP2a
  //  +TIP3a
    +"<div class='datafield' id='"+props.CATGROUP+"'style='color:#fff;padding:6px'>" + props.CATEGORY 
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
    if (props.Website === 'N/A') { Website = " ";}
    else { Website =  "<div class='datafield'><a class='one' href='"+ props.Website +"' target='_blank'>"+ props.Website +"</a></div><div class='labelfield'>Website</div>"};
    
    var tips = [];
    for (var i = 1; i <= 28; i++) {
        if (props['TIP'+i] > 0 || props['TIP'+i] != '0' ) {
            tips.push("<a class='one' href='https://www.dvrpc.org/TIP/" + props.ST + "/Project/" +props["TIP"+i] +"' target='_blank'>"+ props["TIP"+i]+"</a>");
        }
    }
    if (!tips.length) { TIP = " ";}
    else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};

    if (props.VisionType === 'Transit Funded') {FUND ="<table class='infotable'><thead><tr><th>Total State and Federal Costs<br><i>(millions in Y-O-E $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.OpCosts).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"}
    else {FUND ="<table class='infotable'><thead><tr><th>Unfunded Cost<br><i>(millions in 2021 $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.Unfund_Ill).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"};
    
    TSP = props.CATGROUP,
//    header = '<div style="color:white;background-color:'+props.BanColor+'"><img style="margin:0px 0px 0px 10px !important;" src="'+ props.TYPE_IMG+ '"/>' + props.FACILITY + '</div>',
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.CATGROUP + '.png"/><p>' + props.FACILITY + '</p></div>',
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.LOC + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.PS1 + "</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.Timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    + FUND
    + TIP
    +"<div class='datafield' id='"+props.CATGROUP+"'style='color:#fff;padding:6px'>" + props.CATEGORY 
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
    if (props.Website === 'N/A') { Website = " ";}
    else { Website =  "<div class='datafield'><a class='one' href='"+ props.Website +"' target='_blank'>"+ props.Website +"</a></div><div class='labelfield'>Website</div>"};
    
  //  if (props.TIP1a ==='0'){ var TIP1a = '';}
  //      else { var TIP1a = "<div class='datafield'><a class='one' href='http://www.dvrpc.org/asp/TIPsearch/" + props.TIPYEAR + "/" + props.STATE + "/Tip-Search/DetailPrintTIP.asp?projid="+props.TIP1a +"' target='_blank'>"+ props.TIP1a+"</a></div><div class='labelfield'>TIP Project(s)</div>"};
        
    var tips = [];
    for (var i = 1; i <= 28; i++) {
        if (props['TIP'+i] > 0 || props['TIP'+i] != '0' ) {
            tips.push("<a class='one' href='https://www.dvrpc.org/TIP/" + props.STATE + "/Project/" +props["TIP"+i] +"' target='_blank'>"+ props["TIP"+i]+"</a>");
        }
    }
    if (!tips.length) { TIP = " ";}
    else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};

   
    // if (props.VisionType === 'Transit Funded') {FUND ="<table class='infotable'><thead><tr><th>State and Local<br><i>(millions in Y-O-E $)</i></th><th>Federal New Starts /<br>Core Capacity<br><i>(millions in Y-O-E $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.ExpCosts).format('($0,0.0)') +"</td><td> "+ numeral(props.External_C).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"}
    if (props.VisionType === 'Transit Funded') {FUND = "<div class='datafield'>Funds fully obligated prior to 2022</div><div class='labelfield'>Funding</div>"}
    else {FUND ="<table class='infotable'><thead><tr><th>Unfunded Cost<br><i>(millions in 2021 $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.Unfund_Ill).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"};

    TSP = props.CATGROUP,
//    header = '<div style="color:white;background-color:'+props.BanColor+'"><img style="margin:0px 0px 0px 10px !important;" src="'+ props.TYPE_IMG+ '"/><span id="infoheader-text">' + props.FACILITY + '</span></div>',
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.CATGROUP + '.png"/><p>' + props.FACILITY + '</p></div>',
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.LOC + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.PS1 + "</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.Timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    + FUND
    + TIP
  //  +TIP1a
  //  +TIP2a
  //  +TIP3a
    +"<div class='datafield' id='"+props.CATGROUP+"'style='color:#fff;padding:6px'>" + props.CATEGORY 
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
    
    if (props.Website === 'N/A') { Website = " ";}
    else { Website =  "<div class='datafield'><a class='one' href='"+ props.Website+"' target='_blank'>"+ props.Website+"</a></div><div class='labelfield'>Website</div>"};
    
    var tips = [];
        for (var i = 1; i <= 28; i++) {
            if (props['TIP'+i] > 0 || props['TIP'+i] != '0' ) {
                tips.push("<a class='one' href='https://www.dvrpc.org/TIP/" + props.ST + "/Project/" +props["TIP"+i] +"' target='_blank'>"+ props["TIP"+i]+"</a>");
            }
        }
    if (!tips.length) { TIP = " ";}
        else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};
    
    if (props.VisionType === 'Transit Funded') {FUND ="<table class='infotable'><thead><tr><th>State and Local<br><i>(millions in Y-O-E $)</i></th><th>Federal New Starts /<br>Core Capacity<br><i>(millions in Y-O-E $)</i></th><th>Total Funded Cost<br><i>(millions in Y-O-E $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.ExpCosts).format('($0,0.0)') +"</td><td> "+ numeral(props.External_C).format('($0,0.0)') +"</td><td> "+ numeral(props.TTCost).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"}
    else {FUND ="<table class='infotable'><thead><tr><th>Unfunded Cost<br><i>(millions in 2021 $)</i></th></tr></thead><tbody><tr><td> "+ numeral(props.Unfund_Ill).format('($0,0.0)') +"</td></tr></tbody></table><div class='labelfield'>Funding</div>"};

    TSP =  props.CATGROUP,
//    header = '<div style="color:white;background-color:'+props.BanColor+'"><img style="margin:0px 0px 0px 0px" src="'+ props.TYPE_IMG+ '"/>' + props.FACILITY + '</div>',
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.CATGROUP + '.png"/><p>' + props.FACILITY + '</p></div>',
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.LOC + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.PS1 + "</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.Timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    + FUND
    + TIP
    +"<div class='datafield' id='"+props.CATGROUP+"'style='color:#fff;padding:6px'>" + props.CATEGORY 
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
    if (props.Website === 'N/A') { Website = " ";}
    else { Website =  "<div class='datafield'><a class='one' href='"+ props.Website +"' target='_blank'>"+ props.Website +"</a></div><div class='labelfield'>Website</div>"};
      
    RSE = props.CATGROUP,
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.CATGROUP + '.png"/><p>' + props.FACILITY + '</p></div>',
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.LOC + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.PS1 + "</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.Timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    +"<table class='infotable'><thead><tr><th>Total External Cost<br><i>(millions in 2021 $)</i></th></tr></thead>"
    +"<tbody><tr><td> "+ numeral(props.External_C).format('($0,0.0)') +"</td></tr></tbody>"
    +"</table><div class='labelfield'>Funding</div>"
    // + TIP
    +"<div class='datafield' id='"+props.CATGROUP+"'style='color:#fff;padding:6px'>" + props.CATEGORY 
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
    if (props.Website === 'N/A') { Website = " ";}
    else { Website =  "<div class='datafield'><a class='one' href='"+ props.Website +"' target='_blank'>"+ props.Website +"</a></div><div class='labelfield'>Website</div>"};

    if (props.External_C === 'TBD') {EXT ="<tbody><tr><td> "+ props.External_C +"</td></tr></tbody>"}
    else {EXT ="<tbody><tr><td> "+ numeral(props.External_C).format('($0,0.0)') +"</td></tr></tbody>"};
    RSE = props.CATGROUP,
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="lib/images/'+ props.CATGROUP + '.png"/><p>' + props.FACILITY + '</p></div>',     
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.LOC + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.PS1 + "</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.Timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    +"<table class='infotable'><thead><tr><th>Total Extrernal Cost<br><i>(millions in 2021 $)</i></th></tr></thead>"
    + EXT
    +"</table><div class='labelfield'>Funding</div>"
 //   + TIP
  //  + (tips.length > 0 ? '<b>Tip Project(s):</b> ' + tips.join(', ') : '')
    +"</div>"
    +"<div class='datafield' id='"+props.CATGROUP+"'style='color:#fff;padding:6px'>" + props.CATEGORY 
    +"</div>",
    layerName = 'layer8';
    
    document.getElementById('infoheader').innerHTML = header;                   //push content to info box header
    document.getElementById('info').innerHTML = content;                        //push content to info box
    document.getElementById('infoheader').className = RSE;           //push class to create style for info header
    toggleinfo(); 
};

 
