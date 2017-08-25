/*global $*/


var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var quotesArray= ["Greed, for lack of a better word, is good.", "I'm going to make him an offer he can't refuse.", "Badges? We ain't got no badges! We don't need no badges! I don't have to show you any stinking badges!"];

var currentQuote = '', currentAuthor = '';



function getQuote() {
        var quote = Math.floor(Math.random() * quotesArray.length);
        
        $('#text').html(quotesArray[quote]);
        
       
      
}


$(document).ready(function() {
  
  $('#new-quote').on('click', getQuote);
 
});