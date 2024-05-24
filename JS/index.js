var desc = document.getElementById("quote");
var Quotes = [
  `“Be yourself; everyone else is already taken.”
― Oscar Wilde`,
  `“A room without books is like a body without a soul.”
― Marcus Tullius Cicero`,
  `“You know you're in love when you can't fall asleep because reality
   is finally better than your dreams.”
― Dr. Seuss`,
  `“You only live once, but if you do it right, once is enough.”
― Mae West`,
  `“In three words I can sum up everything I've
  learned about life: it goes on.”
― Robert Frost`,
];

function addQuote() {
    var setQuote = Math.floor(Math.random() * Quotes.length);
    desc.innerHTML = Quotes[setQuote];
    
}

function displayQuote() {
    addQuote();
}


