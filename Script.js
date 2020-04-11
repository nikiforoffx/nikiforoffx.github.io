       var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1itDmeN0nb5fdg4-k4HG5zE1hegS8mvwYcXnT0dQOfxM/pubhtml';
       var data = [ { name: "Carrot", category: "Vegetable", healthiness: "Adequate" }, 
                    { name: "Pork Shoulder", category: "Meat", healthiness: "Questionable" }, 
                    { name: "Bubblegum", category: "Candy", healthiness: "Super High"} ]
            
       function init() {
                Tabletop.init( { key: publicSpreadsheetUrl, callback: showInfo, simpleSheet: true } )
                            }

            function showInfo(data, tabletop) {
                     alert("Successfully processed!")
                     console.log(data) 
                                              }

                 




            window.addEventListener("DOMContentLoaded", init);

