function init() {

Tabletop.init( 
{ key: ‘https://docs.google.com/spreadsheets/d/1itDmeN0nb5fdg4-k4HG5zE1hegS8mvwYcXnT0dQOfxM/pubhtml',
  
  callback: function(data, tabletop) {
  console.log(data) },
    simpleSheet: true 
    
    } )
}



window.addEventListener(‘DOMContentLoaded’, init)

<script src='https://cdnjs.cloudflare.com/ajax/libs/tabletop.js/1.5.1/tabletop.min.js'></script>
<script type='text/javascript'>    
  var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1itDmeN0nb5fdg4-k4HG5zE1hegS8mvwYcXnT0dQOfxM/pubhtml';

  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  function showInfo(data, tabletop) {
    alert('Successfully processed!')
    console.log(data);
  }

  window.addEventListener('DOMContentLoaded', init)
</script>
