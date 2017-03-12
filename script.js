var quotes = [
"With people in the world such as Jamie Oliver and Clarissa Dickson-Wright there isn’t much hope for animals. - On Animal Welfare",
"In England, pop music seems now to be exclusively for children. If an artist is no good, why is it necessary to have that artist repeatedly rammed in our face? - On the music industry",
"I lost myself to music at a very early age, and I remained there. - On a life in music",
"I’ve never intended to be controversial but it’s very easy to be controversial in pop music because nobody ever is. - On being unique",
"Whenever I go past McDonalds I get very, very angry. - On modernity"
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}