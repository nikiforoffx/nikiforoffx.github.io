       var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1itDmeN0nb5fdg4-k4HG5zE1hegS8mvwYcXnT0dQOfxM/pubhtml';
   
       function init() {
                Tabletop.init( { key: publicSpreadsheetUrl, callback: showInfo, simpleSheet: true } )
                            }

            function showInfo(data, tabletop) {
                      console.log(data);
                
                            for (var i = 0; i < data.length; i++) {
                                    document.getElementById(".googlelist").append('<div ><h1>' + data[i].products + '</h1></div><br>');
                                                                  }

                                              }

            window.addEventListener("DOMContentLoaded", init);
