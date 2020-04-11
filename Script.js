function init() {

Tabletop.init( 
{ key: 'https://docs.google.com/spreadsheets/d/1itDmeN0nb5fdg4-k4HG5zE1hegS8mvwYcXnT0dQOfxM/pubhtml', 
  
  callback: function(data, tabletop) {
  console.log(data) },
    simpleSheet: true 
    
    } )
}

window.addEventListener(‘DOMContentLoaded’, init)


