//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////  Declare Shared Values //////////////////////

var hlweight = 6, 			//weight of highlighted feature outline
	hlColor = "#EFA06A";	//color of point, outline and line highlights

// required variables DO NOT REMOVE
var polyLayer= [],layersearch, props, header, content, titleName, headerClass;

////////////////////////////////////////////////////
///Individual Feature actions /////////////////////	

//Group 1 Layer Selections ////////////
//  layer1
function highlightLayer1(e) {
    initializeHL(e);
        if (props.Website === 'N/A') { Website = " ";}
        else { Website =  "<div class='datafield'><a class='one' href='"+ props.Website+"' target='_blank'>"+ props.Website+"</a></div><div class='labelfield'>Website</div>"};
    
	var tips = [];
        for (var i = 1; i <= 22; i++) {
        	if (props['TIP'+i] !== 0) {
        		tips.push("<a class='one' href='http://www.dvrpc.org/asp/TIPsearch/" + props.TIPYEAR + "/" + props.STATE + "/Tip-Search/DetailPrintTIP.asp?projid="+props["TIP"+i] +"' target='_blank'>"+ props["TIP"+i]+"</a>");
        	}
        }
	if (!tips.length) { TIP = " ";}
        else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};

    RSE = 'RSE'+ props.VisionType[8],
  //  ICON = '<img src="'+ props.TYPE_IMG+ '"/>',
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="'+ props.TYPE_IMG + '"/><p>' + props.FACILITY + '</p></div>',
 //   header = '<span id="infoheader-text">&nbsp;&nbsp;' + props.FACILITY + '</span>',

    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.LOC + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.PS1 + "</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.Timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    +"<table class='infotable'><thead><tr><th>System Expansion Cost<br><i>(millions in Y-O-E $)</i></th><th>Total Funded Cost<br><i>(millions in Y-O-E $)</i></th><th>Unfunded Cost<br><i>(millions in 2017 $)</i></th></tr></thead>"
    +"<tbody><tr><td> "+ numeral(props.ExpCosts).format('($0,0.0)') +"</td><td> "+ numeral(props.TTCost).format('($0,0.0)') +"</td><td> "+ numeral(props.UnfundCost).format('($0,0.0)') +"</td></tr></tbody>"
    +"</table><div class='labelfield'>Funding</div>"
    + TIP
    +"</div>"
    +"<div class='datafield' style='background-color:"+props.BanColor+";color:#fff'>" + props.CATEGORY 
    +"</div>",
    layerName = 'layer1';

    //  contentPush(header, content, layerName, titleName, headerClass);
    //  contentPush(header, content, layerName);  
        document.getElementById('infoheader').innerHTML = header;                   //push content to info box header
        document.getElementById('info').innerHTML = content;                        //push content to info box
    //  document.getElementById('featureName').innerHTML = FNtitle;             //push Feature Type (optional, see below for manual version)
   //   document.getElementById('featureName').className = dynClass;          //push class to create style for feature name
        document.getElementById('infoheader').className = RSE;           //push class to create style for info header
    //  document.getElementById('iconography').className = window[dynIco]; 
    //    document.getElementById('iconography').innerHTML = ICON;     
        toggleinfo(); 
    //  console.log(tips);
};
//Group 3 Layer Selections ////////////
//  layer3
function highlightLayer3(e) {
    initializeHL(e);
        if (props.Website === 'N/A') { Website = " ";}
        else { Website =  "<div class='datafield'><a class='one' href='"+ props.Website +"' target='_blank'>"+ props.Website+"</a></div><div class='labelfield'>Website</div>"};
    
    var tips = [];
        for (var i = 1; i <= 22; i++) {
            if (props['TIP'+i] !== 0) {
                tips.push("<a class='one' href='http://www.dvrpc.org/asp/TIPsearch/" + props.TIPYEAR + "/" + props.STATE + "/Tip-Search/DetailPrintTIP.asp?projid="+props["TIP"+i] +"' target='_blank'>"+ props["TIP"+i]+"</a>");
            }
        }
    if (!tips.length) { TIP = " ";}
        else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};
    
    RSE = 'RSE'+ props.VisionType[8],
 //   header = '<div style="color:white;background-color:'+props.BanColor+'"><span id="infoheader-text"><img style="margin:0px 0px 0px 6px" src="'+ props.TYPE_IMG+ '"/>&nbsp;&nbsp;' + props.FACILITY + '</span></div>',
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="'+ props.TYPE_IMG + '"/><p>' + props.FACILITY + '</p></div>',     
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.LOC + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.PS1 + "</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.Timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    +"<table class='infotable'><thead><tr><th>TIP Programmed Costs<br><i>(millions in Y-O-E $)</i></th><th>Illustrative Project Cost<br><i>(millions in 2017 $)</i></th></tr></thead>"
    +"<tbody><tr><td> "+ numeral(props.TTCost).format('($0,0.0)') +"</td><td> "+ numeral(props.UnfundCost).format('($0,0.0)') +"</td></tr></tbody>"
    +"</table><div class='labelfield'>Funding</div>"
    + TIP
    +"</div>"
    +"<div class='datafield' style='background-color:"+props.BanColor+";color:#fff'>" + props.CATEGORY 
    +"</div>",
    layerName = 'layer3';

    document.getElementById('infoheader').innerHTML = header;                   //push content to info box header
    document.getElementById('info').innerHTML = content;                        //push content to info box
    document.getElementById('infoheader').className = RSE;           //push class to create style for info header
    toggleinfo(); 
};
//Group 3 Layer Selections ////////////
//  layer3
function highlightLayer3pt(e) {
    initializeHL(e);
    if (props.Website === 'N/A') { Website = " ";}
    else { Website =  "<div class='datafield'><a class='one' href='"+ props.Website +"' target='_blank'>"+ props.Website+"</a></div><div class='labelfield'>Website</div>"};
    
 var tips = [];
        for (var i = 1; i <= 22; i++) {
            if (props['TIP'+i] !== 0) {
                tips.push("<a class='one' href='http://www.dvrpc.org/asp/TIPsearch/" + props.TIPYEAR + "/" + props.STATE + "/Tip-Search/DetailPrintTIP.asp?projid="+props["TIP"+i] +"' target='_blank'>"+ props["TIP"+i]+"</a>");
            }
        }
    if (!tips.length) { TIP = " ";}
        else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};
    
    RSE = 'RSE'+ props.VisionType[8],
//    header = '<div style="color:white;background-color:'+props.BanColor+'"><span id="infoheader-text"><img style="margin:0px 0px 0px 6px" src="'+ props.TYPE_IMG+ '"/>&nbsp;&nbsp;' + props.FACILITY + '</span></div>',
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="'+ props.TYPE_IMG + '"/><p>' + props.FACILITY + '</p></div>',
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.LOC + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.PS1 + "</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.Timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    +"<table class='infotable'><thead><tr><th>TIP Programmed Costs<br><i>(millions in Y-O-E $)</i></th><th>Illustrative Project Cost<br><i>(millions in 2017 $)</i></th></tr></thead>"
    +"<tbody><tr><td> "+ numeral(props.TTCost).format('($0,0.0)') +"</td><td> "+ numeral(props.UnfundCost).format('($0,0.0)') +"</td></tr></tbody>"
    +"</table><div class='labelfield'>Funding</div>"
    + TIP
  //  + TIP2a
 //   + TIP3a
    +"</div>"
    +"<div class='datafield' style='background-color:"+props.BanColor+";color:#fff'>" + props.CATEGORY 
    +"</div>",
    layerName = 'layer3pt';

    document.getElementById('infoheader').innerHTML = header;                   //push content to info box header
    document.getElementById('info').innerHTML = content;                        //push content to info box
    document.getElementById('infoheader').className = RSE;           //push class to create style for info header
    toggleinfo(); 
};
//Group 4 Layer Selections ////////////
//  layer4
function highlightLayer4(e) {
    initializeHL(e);
        if (props.Website === 'N/A') { Website = " ";}
        else { Website =  "<div class='datafield'><a class='one' href='"+ props.Website +"' target='_blank'>"+ props.Website +"</a></div><div class='labelfield'>Website</div>"};
    var tips = [];
        for (var i = 1; i <= 22; i++) {
            if (props['TIP'+i] !== 0) {
                tips.push("<a class='one' href='http://www.dvrpc.org/asp/TIPsearch/" + props.TIPYEAR + "/" + props.STATE + "/Tip-Search/DetailPrintTIP.asp?projid="+props["TIP"+i] +"' target='_blank'>"+ props["TIP"+i]+"</a>");
            }
        }
    if (!tips.length) { TIP = " ";}
        else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};
    
    RSE = 'RSE'+ props.VisionType[8],
//    header = '<div style="color:white;background-color:'+props.BanColor+'"><span id="infoheader-text"><img style="margin:0px 0px 0px 6px" src="'+ props.TYPE_IMG+ '"/>&nbsp;&nbsp;' + props.FACILITY + '</span></div>',
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="'+ props.TYPE_IMG + '"/><p>' + props.FACILITY + '</p></div>',    
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.LOC + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.PS1 + "</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.Timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    +"<table class='infotable'><thead><tr><th>Funded Cost<br><i>(millions in Y-O-E $)</i></th><th>Unfunded Cost<br><i>(millions in 2017 $)</i></th></tr></thead>"
    +"<tbody><tr><td> "+ numeral(props.TTCost).format('($0,0.0)') +"</td><td> "+ numeral(props.UnfundCost).format('($0,0.0)') +"</td></tr></tbody>"
    +"</table><div class='labelfield'>Funding</div>"
    + TIP
    +"</div>"
    +"<div class='datafield' style='background-color:"+props.BanColor+";color:#fff'>" + props.CATEGORY 
    +"</div>",
    layerName = 'layer4';

    document.getElementById('infoheader').innerHTML = header;                   //push content to info box header
    document.getElementById('info').innerHTML = content;                        //push content to info box
    document.getElementById('infoheader').className = RSE;           //push class to create style for info header
    toggleinfo(); 
};

//Group 5 Layer Selections ////////////
//  layer5
function highlightLayer5(e) {
    initializeHL(e);
        if (props.Website === 'N/A') { Website = " ";}
        else { Website =  "<div class='datafield'><a class='one' href='"+ props.Website +"' target='_blank'>"+ props.Website +"</a></div><div class='labelfield'>Website</div>"};
    
    var tips = [];
        for (var i = 1; i <= 22; i++) {
            if (props['TIP'+i] !== 0) {
                tips.push("<a class='one' href='http://www.dvrpc.org/asp/TIPsearch/" + props.TIPYEAR + "/" + props.STATE + "/Tip-Search/DetailPrintTIP.asp?projid="+props["TIP"+i] +"' target='_blank'>"+ props["TIP"+i]+"</a>");
            }
        }
    if (!tips.length) { TIP = " ";}
        else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};
    
    RSE = 'RSE'+ props.VisionType[8],
//    header = '<div style="color:white;background-color:'+props.BanColor+'"><span id="infoheader-text"><img style="margin:0px 0px 0px 6px" src="'+ props.TYPE_IMG+ '"/>&nbsp;&nbsp;' + props.FACILITY + '</span></div>',
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="'+ props.TYPE_IMG + '"/><p>' + props.FACILITY + '</p></div>',  
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.LOC + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.PS1 + "</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.Timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    +"<table class='infotable'><thead><tr><th>Local, Private, and Other Funded<br><i>(millions in Y-O-E $)</i></th><th>State and Federal Funded<br><i>(millions in Y-O-E $)</i></th><th>Unfunded Cost<br><i>(millions in 2017 $)</i></th></tr></thead>"
    +"<tbody><tr><td> "+ numeral(props.External_C).format('($0,0.0)') +"</td><td> "+ numeral(props.BPCosts).format('($0,0.0)') +"</td><td> "+ numeral(props.UnfundCost).format('($0,0.0)') +"</td></tr></tbody>"
    +"</table><div class='labelfield'>Funding</div>"
    + TIP
    +"</div>"
    +"<div class='datafield' style='background-color:"+props.BanColor+";color:#fff'>" + props.CATEGORY 
    +"</div>",
    layerName = 'layer5';

    document.getElementById('infoheader').innerHTML = header;                   //push content to info box header
    document.getElementById('info').innerHTML = content;                        //push content to info box
    document.getElementById('infoheader').className = RSE;           //push class to create style for info header
    toggleinfo(); 
};

//Group 2 Layer Selections
//  layer2
function highlightLayer2(e) {
    initializeHL(e);
    if (props.Website === 'N/A') { Website = " ";}
    else { Website =  "<div class='datafield'><a class='one' href='"+ props.Website +"' target='_blank'>"+ props.Website +"</a></div><div class='labelfield'>Website</div>"};
    
    var tips = [];
    for (var i = 1; i <= 22; i++) {
            if (props['TIP'+i] !== 0) {
                tips.push("<a class='one' href='http://www.dvrpc.org/asp/TIPsearch/" + props.TIPYEAR + "/" + props.STATE + "/Tip-Search/DetailPrintTIP.asp?projid="+props["TIP"+i] +"' target='_blank'>"+ props["TIP"+i]+"</a>");
            }
        }
    if (!tips.length) { TIP = " ";}
        else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};
    
    TSP = 'TSP'+ props.VisionType[8],
//    header = '<div style="color:white;background-color:'+props.BanColor+'"><img style="margin:0px 0px 0px 10px !important;" src="'+ props.TYPE_IMG+ '"/><span id="infoheader-text">' + props.FACILITY + '</span></div>',
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="'+ props.TYPE_IMG + '"/><p>' + props.FACILITY + '</p></div>',
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.LOC + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.PS1 + "</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.Timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    +"<table class='infotable'><thead><tr><th>Federal and State Funded Cost<br><i>(millions in Y-O-E $)</i></th><th>Unfunded Cost<br><i>(millions in 2017 $)</i></th></tr></thead>"
    +"<tbody><tr><td> "+ numeral(props.PreCosts).format('($0,0.0)') +"</td><td> "+ numeral(props.UnfundCost).format('($0,0.0)') +"</td></tr></tbody>"
    +"</table><div class='labelfield'>Funding</div>"
    + TIP
    +"<div class='datafield' style='background-color:"+props.BanColor+";color:#fff'>" + props.CATEGORY 
    +"</div>",
    layerName = 'layer2'; 

    document.getElementById('infoheader').innerHTML = header;                   //push content to info box header
    document.getElementById('info').innerHTML = content;                        //push content to info box
    document.getElementById('infoheader').className = TSP;           //push class to create style for info header
    toggleinfo(); 
};
//  layer2pt
function highlightLayer2pt(e) {
    initializeHL(e);
    if (props.Website === 'N/A') { Website = " ";}
    else { Website =  "<div class='datafield'><a class='one' href='"+ props.Website +"' target='_blank'>"+ props.Website +"</a></div><div class='labelfield'>Website</div>"};
    
  //  if (props.TIP1a ==='0'){ var TIP1a = '';}
  //      else { var TIP1a = "<div class='datafield'><a class='one' href='http://www.dvrpc.org/asp/TIPsearch/" + props.TIPYEAR + "/" + props.STATE + "/Tip-Search/DetailPrintTIP.asp?projid="+props.TIP1a +"' target='_blank'>"+ props.TIP1a+"</a></div><div class='labelfield'>TIP Project(s)</div>"};
        
    var tips = [];
    for (var i = 1; i <= 22; i++) {
            if (props['TIP'+i] !== 0) {
                tips.push("<a class='one' href='http://www.dvrpc.org/asp/TIPsearch/" + props.TIPYEAR + "/" + props.STATE + "/Tip-Search/DetailPrintTIP.asp?projid="+props["TIP"+i] +"' target='_blank'>"+ props["TIP"+i]+"</a>");
            }
        }
    if (!tips.length) { TIP = " ";}
        else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};
    

    TSP = 'TSP'+ props.VisionType[8],
//    header = '<div style="color:white;background-color:'+props.BanColor+'"><img style="margin:0px 0px 0px 10px !important;" src="'+ props.TYPE_IMG+ '"/><span id="infoheader-text">' + props.FACILITY + '</span></div>',
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="'+ props.TYPE_IMG + '"/><p>' + props.FACILITY + '</p></div>',
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.LOC + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.PS1 + "</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.Timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    +"<table class='infotable'><thead><tr><th>Federal and State Funded Cost<br><i>(millions in Y-O-E $)</i></th><th>Unfunded Cost<br><i>(millions in 2017 $)</i></th></tr></thead>"
    +"<tbody><tr><td> "+ numeral(props.PreCosts).format('($0,0.0)') +"</td><td> "+ numeral(props.UnfundCost).format('($0,0.0)') +"</td></tr></tbody>"
    +"</table><div class='labelfield'>Funding</div>"
    + TIP
  //  +TIP1a
  //  +TIP2a
  //  +TIP3a
    +"<div class='datafield' style='background-color:"+ props.BanColor +";color:#fff'>" + props.CATEGORY 
    +"</div>",
    layerName = 'layer2pt'; 

    document.getElementById('infoheader').innerHTML = header;                   //push content to info box header
    document.getElementById('info').innerHTML = content;                        //push content to info box
    document.getElementById('infoheader').className = TSP;           //push class to create style for info header
    toggleinfo(); 
};
//  layer6
function highlightLayer6(e) {
    initializeHL(e);
    if (props.Website === 'N/A') { Website = " ";}
    else { Website =  "<div class='datafield'><a class='one' href='"+ props.Website +"' target='_blank'>"+ props.Website +"</a></div><div class='labelfield'>Website</div>"};
    
    var tips = [];
        for (var i = 1; i <= 22; i++) {
            if (props['TIP'+i] !== 0) {
                tips.push("<a class='one' href='http://www.dvrpc.org/asp/TIPsearch/" + props.TIPYEAR + "/" + props.STATE + "/Tip-Search/DetailPrintTIP.asp?projid="+props["TIP"+i] +"' target='_blank'>"+ props["TIP"+i]+"</a>");
            }
        }
    if (!tips.length) { TIP = " ";}
        else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};
    
    TSP = 'TSP'+ props.VisionType[8],
//    header = '<div style="color:white;background-color:'+props.BanColor+'"><img style="margin:0px 0px 0px 10px !important;" src="'+ props.TYPE_IMG+ '"/>' + props.FACILITY + '</div>',
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="'+ props.TYPE_IMG + '"/><p>' + props.FACILITY + '</p></div>',
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.LOC + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.PS1 + "</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.Timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    +"<table class='infotable'><thead><tr><th>Funded Cost<br><i>(millions in Y-O-E $)</i></th><th>Unfunded Cost<br><i>(millions in 2017 $)</i></th></tr></thead>"
    +"<tbody><tr><td> "+ numeral(props.TTCost).format('($0,0.0)') +"</td><td> "+ numeral(props.UnfundCost).format('($0,0.0)') +"</td></tr></tbody>"
    +"</table><div class='labelfield'>Funding</div>"
    + TIP
    +"<div class='datafield' style='background-color:"+ props.BanColor +";color:#fff'>" + props.CATEGORY 
    +"</div>",
    layerName = 'layer6'; 

    document.getElementById('infoheader').innerHTML = header;                   //push content to info box header
    document.getElementById('info').innerHTML = content;                        //push content to info box
    document.getElementById('infoheader').className = TSP;           //push class to create style for info header
    toggleinfo(); 
};
//  layer7pt
function highlightLayer7pt(e) {
    initializeHL(e);
    if (props.Website === 'N/A') { Website = " ";}
    else { Website =  "<div class='datafield'><a class='one' href='"+ props.Website +"' target='_blank'>"+ props.Website +"</a></div><div class='labelfield'>Website</div>"};
    
  //  if (props.TIP1a ==='0'){ var TIP1a = '';}
  //      else { var TIP1a = "<div class='datafield'><a class='one' href='http://www.dvrpc.org/asp/TIPsearch/" + props.TIPYEAR + "/" + props.STATE + "/Tip-Search/DetailPrintTIP.asp?projid="+props.TIP1a +"' target='_blank'>"+ props.TIP1a+"</a></div><div class='labelfield'>TIP Project(s)</div>"};
        
    var tips = [];
    for (var i = 1; i <= 22; i++) {
            if (props['TIP'+i] !== 0) {
                tips.push("<a class='one' href='http://www.dvrpc.org/asp/TIPsearch/" + props.TIPYEAR + "/" + props.STATE + "/Tip-Search/DetailPrintTIP.asp?projid="+props["TIP"+i] +"' target='_blank'>"+ props["TIP"+i]+"</a>");
            }
        }
    if (!tips.length) { TIP = " ";}
        else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};
    

    TSP = 'TSP'+ props.VisionType[8],
//    header = '<div style="color:white;background-color:'+props.BanColor+'"><img style="margin:0px 0px 0px 10px !important;" src="'+ props.TYPE_IMG+ '"/><span id="infoheader-text">' + props.FACILITY + '</span></div>',
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="'+ props.TYPE_IMG + '"/><p>' + props.FACILITY + '</p></div>',
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.LOC + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.PS1 + "</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.Timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    +"<table class='infotable'><thead><tr><th>State and Local Funded Cost<br><i>(millions in Y-O-E $)</i></th><th>Federal New Starts / <br>Small Starts<br><i>(millions in Y-O-E $)</i></th><th>Unfunded Cost<br><i>(millions in 2017 $)</i></th></tr></thead>"
    +"<tbody><tr><td> "+ numeral(props.ExpCosts).format('($0,0.0)') +"</td><td> "+ numeral(props.External_C).format('($0,0.0)') +"</td><td> "+ numeral(props.UnfundCost).format('($0,0.0)') +"</td></tr></tbody>"
    +"</table><div class='labelfield'>Funding</div>"
    + TIP
  //  +TIP1a
  //  +TIP2a
  //  +TIP3a
    +"<div class='datafield' style='background-color:"+ props.BanColor +";color:#fff'>" + props.CATEGORY 
    +"</div>",
    layerName = 'layer2pt'; 

    document.getElementById('infoheader').innerHTML = header;                   //push content to info box header
    document.getElementById('info').innerHTML = content;                        //push content to info box
    document.getElementById('infoheader').className = TSP;           //push class to create style for info header
    toggleinfo(); 
};
//  layer7
function highlightLayer7(e) {
    initializeHL(e);
    
    if (props.Website === 'N/A') { Website = " ";}
    else { Website =  "<div class='datafield'><a class='one' href='"+ props.Website+"' target='_blank'>"+ props.Website+"</a></div><div class='labelfield'>Website</div>"};
    
    var tips = [];
        for (var i = 1; i <= 22; i++) {
            if (props['TIP'+i] !== 0) {
                tips.push("<a class='one' href='http://www.dvrpc.org/asp/TIPsearch/" + props.TIPYEAR + "/" + props.STATE + "/Tip-Search/DetailPrintTIP.asp?projid="+props["TIP"+i] +"' target='_blank'>"+ props["TIP"+i]+"</a>");
            }
        }
    if (!tips.length) { TIP = " ";}
        else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};
    
    TSP = 'TSP'+ props.VisionType[8],
//    header = '<div style="color:white;background-color:'+props.BanColor+'"><img style="margin:0px 0px 0px 0px" src="'+ props.TYPE_IMG+ '"/>' + props.FACILITY + '</div>',
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="'+ props.TYPE_IMG + '"/><p>' + props.FACILITY + '</p></div>',
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.LOC + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.PS1 + "</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.Timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    +"<table class='infotable'><thead><tr><th>State and Local<br><i>(millions in Y-O-E $)</i></th><th>Federal New Starts / <br>Small Starts<br><i>(millions in Y-O-E $)</i></th><th>Unfunded Cost<br><i>(millions in 2017 $)</i></th></tr></thead>"
    +"<tbody><tr><td> "+ numeral(props.ExpCosts).format('($0,0.0)') +"</td><td> "+ numeral(props.External_C).format('($0,0.0)') +"</td><td> "+ numeral(props.UnfundCost).format('($0,0.0)') +"</td></tr></tbody>"
    +"</table><div class='labelfield'>Funding</div>"
    + TIP
    +"<div class='datafield' style='background-color:"+ props.BanColor +";color:#fff'>" + props.CATEGORY 
    +"</div>",
    layerName = 'layer7'; 

    document.getElementById('infoheader').innerHTML = header;                   //push content to info box header
    document.getElementById('info').innerHTML = content;                        //push content to info box
    document.getElementById('infoheader').className = TSP;           //push class to create style for info header
    toggleinfo(); 
};
//  layer8
function highlightLayer8(e) {
    initializeHL(e);
    if (props.Website === 'N/A') { Website = " ";}
    else { Website =  "<div class='datafield'><a class='one' href='"+ props.Website +"' target='_blank'>"+ props.Website +"</a></div><div class='labelfield'>Website</div>"};
    
    var tips = [];
        for (var i = 1; i <= 22; i++) {
            if (props['TIP'+i] !== 0) {
                tips.push("<a class='one' href='http://www.dvrpc.org/asp/TIPsearch/" + props.TIPYEAR + "/" + props.STATE + "/Tip-Search/DetailPrintTIP.asp?projid="+props["TIP"+i] +"' target='_blank'>"+ props["TIP"+i]+"</a>");
            }
        }
    if (!tips.length) { TIP = " ";}
        else { TIP =  "<div class='datafield'>"+tips.join(', ')+"</div><div class='labelfield'>TIP Project(s)</div>"};
    
    RSE = 'EXT'+ props.VisionType[11],
//    header = '<div style="color:white;background-color:'+props.BanColor+'"><span id="infoheader-text"><img style="margin:0px 0px 0px 6px" src="'+ props.TYPE_IMG+ '"/>&nbsp;&nbsp;' + props.FACILITY + '</span></div>',
    header = '<div id="infoheader-text"><img id="infoheader-icon" src="'+ props.TYPE_IMG + '"/><p>' + props.FACILITY + '</p></div>',     
    content = "<div id='baseInfo'>"
    +"<div class='datafield'>" + props.LOC + "</div><div class='labelfield'>Location</div>"
    +"<div class='datafield'>" + props.PS1 + "</div><div class='labelfield'>Project Scope</div>"
    +"<div class='datafield'>" + props.Timing + "</div><div class='labelfield'>Timing</div>"
    + Website 
    +"<table class='infotable'><thead><tr><th>Total Cost<br><i>(millions in Y-O-E $)</i></th></tr></thead>"
    +"<tbody><tr><td> "+ numeral(props.External_C).format('($0,0.0)') +"</td></tr></tbody>"
    +"</table><div class='labelfield'>Funding</div>"
    + TIP
  //  + (tips.length > 0 ? '<b>Tip Project(s):</b> ' + tips.join(', ') : '')
    +"</div>"
    +"<div class='datafield' style='background-color:"+ props.BanColor +";color:#fff;padding:6px'>" + props.CATEGORY 
    +"</div>",
    layerName = 'layer8';
    
    document.getElementById('infoheader').innerHTML = header;                   //push content to info box header
    document.getElementById('info').innerHTML = content;                        //push content to info box
    document.getElementById('infoheader').className = RSE;           //push class to create style for info header
    toggleinfo(); 
};

 
