function init() {

Tabletop.init( 
{ key: ‘https://docs.google.com/spreadsheets/d/e/2PACX-1vQI1sEckR-HC4RtNneB85ejTala0Lbjys0vbiGAS8VS94ZD5ooJexM8KUIRi1Q90lSWNm0XufN44LBA/pubhtml',
  
  callback: function(data, tabletop) {
  console.log(data) },
    simpleSheet: true 
    
    } )
}

window.addEventListener(‘DOMContentLoaded’, init)
