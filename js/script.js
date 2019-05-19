/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

/* */


//An array of quote objects with properties: quote, source, citation, year, color, and tags
    //SOme of them don't have the year and citation properties.
var quotes = [{quote: "It doesn’t matter how slow you go, as long as you don’t stop.",
                source: "Confucius",
                citation: "Analects",
                year: "500 BC",
                color: '#ff9966',
                tags: "Philosophy"
                },
               {quote: "Success is the sum of small efforts, repeated day-in and day-out.",
                   source: "Robert Collier",
                   citation: "The Book of Life",
                   year: 1925,
                   color: "#666633",
                   tags: "Personal Development"
               },
            {quote: "The meaning of life is to find your gift. The purpose of life is to give it away.",
                source: "Anonymous",
                 year: 2010,
                color: "#3333cc",
                 tags: "Philosophy"   },
            {quote:"You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.",
                source: "George Lorimer",
                color: "#996600",
                tags: "Motivational quote"
            },
            {quote: "Choose to be optimistic, it feels better.",
                source: "Dalai Lama",
                citation: "Goodreads",
                color: "#993399",
                tags: "Personal Development"},
            {quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
            source: "Patrick McKenzie",
            citation: "Twitter",
            year: 2016,
            color:  "#36b55c",
            tags: "Technology"}];









//function that generates random number and returns a quote object randomly
function getRadomQuote() {
    var randomNum = Math.floor(Math.random() * quotes.length);
    return quotes[randomNum];
}





//function that prints the quote, its source, citation, year, color, and category
function printQuote() {
    //Retrieving the quote
    var quote = getRadomQuote();
    //variable that stores the html template in the form of string
    var html = '';

    //html templates for the citation and year
    var citation = ' <span class="citation"> ' +quote.citation +' </span>';
    var year = '  <span class="year"> ' +quote.year +'</span>';

    //html templates for quote and source properties
    html += '<p class="quote"> '+quote.quote +'</p>\n';
    html+=    '<p class="source"> ' + quote.source  + '\n';

    //if citation property exists, then display it
    if(quote.citation){
        html += citation;

    }
    //if the year property exists, then display it
    if(quote.year){
        html += year;

    }
    //html template for tags property
    html+='<span class = "tags"> ' + ", " +quote.tags + '</span>\n';
    //closing tag for source
    html += '</p>';

    //Handles the background color of the button that generates the quote.

    document.getElementById('loadQuote').style.backgroundColor = quote.color;
    //Handle the background color of each quote
    document.body.style.backgroundColor = quote.color;
    //Displaying the html template on the browser
    document.getElementById('quote-box').innerHTML = html;
}


//New quote will be displayed every 30 seconds
window.setInterval(printQuote, 30000);


//When "Show another quote" button is clicked, the quote object and its properties will be displayed
document.getElementById('loadQuote').addEventListener("click", printQuote, false);




// Remember to delete the comments that came with this file, and replace them with your own code comments.