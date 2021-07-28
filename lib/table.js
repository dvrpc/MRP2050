$(document).ready(function() {

  $('#MRPtable').DataTable( {
    "ajax":{
      "url":"https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/MRP2050/FeatureServer/2/query?where=1=1&outFields=*&outSR=4326&f=pgeojson",
      "dataSrc": "features"
    },
    "oLanguage": {
   "sSearch": "Filter Table:"
    },
    "bAutoWidth" : false,
    "columns": [
      { "data": "properties.MRP_ID",
        "title": "MRP ID",
        "visible": false
      },
      { "data": "properties.FACILITY",
        "title": "Facility",
        "width": "15%",
      },
      { "data": "properties.PS1",
        "title": "Project Scope",
        "width": "32%",
        "className": "table-ps"
      },   
      { "data": "properties.Location",
        "title": "Location",
        "width": "5%",
      },
      { "data": "properties.Timing",
        "title": "Timing",
        "width": "5%",
      },  
       { "data": "properties.CATEGORY",
        "title": "Category",
        "width": "15%",
      },         
      { "data": "properties.PresCosts",
        "title": "Preservation Cost<br><i>(millions of Y-O-E $s)</i>",
        "className": "table-cat-costs",
         "width": "3%",
     //   render: $.fn.dataTable.render.number(  ',', '.', 2, '$' ),
        render: function ( data, type, row ) {
                  if (data == '0.00') {
                    return '-';
                    }
                  else {
                 //   return data;
                     var num = $.fn.dataTable.render.number(',', '.', 1, '$').display(data);              
                      return num ;
                    }
                }      
                 },
      { "data": "properties.OpCosts",
        "title": "Operation Cost <br><i>(millions of Y-O-E $s)</i>",
        "className": "table-cat-costs",
         "width": "3%",
         render: function ( data, type, row ) {
                  if (data == '0.00') {
                    return '-';
                    }
                  else {
                 //   return data;
                     var num = $.fn.dataTable.render.number(',', '.', 1, '$').display(data);              
                      return num ;
                    }
                }      
                 },
      { "data": "properties.ExpCosts",
        "title": "System Expansion Cost <br> <i>(millions of Y-O-E $s)</i>",
        "className": "table-cat-costs",
        "width": "3%",
        render: function ( data, type, row ) {
                  if (data == '0.00') {
                    return '-';
                    }
                  else {
                 //   return data;
                     var num = $.fn.dataTable.render.number(',', '.', 1, '$').display(data);              
                      return num ;
                    }
                }      
                 },
      { "data": "properties.TTCost",
        "title": "Funded Cost <br> <i>(millions of Y-O-E $s)</i>",
        "className": "table-cost",
        "width": "3%",
         render: function ( data, type, row ) {
                  if (data == '0.00') {
                    return '-';
                    }
                  else {
                 //   return data;
                     var num = $.fn.dataTable.render.number(',', '.', 1, '$').display(data);              
                      return num ;
                    }
                }      
                 },
      { "data": "properties.Unfund_Ill",
        "title": "Unfunded/<br>Illustrative Cost<br><i>(millions of 2021 $s)</i>",
        "className": "table-cost",
        "width": "3%",
        render: function ( data, type, row ) {
                  if (data == '0.00') {
                    return '-';
                    }
                  else {
                 //   return data;
                     var num = $.fn.dataTable.render.number(',', '.', 1, '$').display(data);              
                      return num ;
                    }
                }      
                 },
      { "data": "properties.External_C",
        "title": "External Cost<br><i>(millions of 2017 $s)</i>",
        "className": "table-cost",
        "width": "3%",
        render: function ( data, type, row ) {
                  if (data == '0.00') {
                    return '-';
                    }
                  else {
                 //   return data;
                     var num = $.fn.dataTable.render.number(',', '.', 1, '$').display(data);              
                      return num ;
                    }
                }      

      },
 /*     { "data": "properties.TIP1",
        "title": "TIP",
        "className": "table-cost",
        "width": "5%",
        render: function ( data, type, row ) {
                  if (data == '0') {
                    return '-';
                    }
                  else {

                return '<a class="one" href="http://www.dvrpc.org/asp/TIPsearch/'+ data[13]+'/'+ data[13] +'/Tip-Search/DetailPrintTIP.asp?projid='+ data +'" target="_blank">'+ data +'</a>'; 
                    }
                }      

      },
   */   
   //    { "data": "properties.TIPYEAR",
   //     "title": "TIPYEAR",
   //     "visible": false
   //   },
      { "data": "properties.Website",
        "title": "Website",
        "className": "table-cost",
        "width": "5%",
        render: function ( data, type, row ) {
                  if (data == 'N/A') {
                    return '-';
                    }
                  else {
                 //   return data;
                return '<a class="one" href='+data+' target="_blank">View Website</a>'; 
                    }
                }      

      },
  //       { data: "properties.STATE",
  //      title: "State" }                      
    ]
  });

 

}); 