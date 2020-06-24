$(document).ready(function() { 

fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var rngNum = Math.floor(Math.random() * 1600)
        // console.log(data);
        
        var quote = data[rngNum].text
        var author = data[rngNum].author
        
        var $authorSpan = $("<span>", {
            id: "author",
            text:" - " + author,
        }) 
       
        $("#quote").text(quote)
        $("#author-block").append($authorSpan)
        
    });

})