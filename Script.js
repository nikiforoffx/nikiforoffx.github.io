       var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1itDmeN0nb5fdg4-k4HG5zE1hegS8mvwYcXnT0dQOfxM/pubhtml';
   
       function init() {
                Tabletop.init( { key: publicSpreadsheetUrl, callback: showInfo, simpleSheet: true } )
                            }

            function showInfo(data, Tabletop) {
                      console.log(data);
                
                            for (var i = 0; i < data.length; i++) {
                                    $('.googlelist').append(data[i].products);
                                                                  }

                                              }

            window.addEventListener('DOMContentLoaded', init);
