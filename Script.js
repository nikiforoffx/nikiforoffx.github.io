const Tabletop = require('tabletop'); 
var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1itDmeN0nb5fdg4-k4HG5zE1hegS8mvwYcXnT0dQOfxM/pubhtml';

function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: false } )
  }

 function showInfo(data, tabletop) {
  // do something with the data
  console.log(JSON.stringify(data, null, 2));
}

//initialise and kickstart the whole thing.
init()
       

            
 

