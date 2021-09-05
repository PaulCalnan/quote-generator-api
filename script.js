// DOM targets
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Declare quote array variable
let apiQuotes = [];

// Show loading spinner
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide loading spinner
function completeLoading() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

// Show new quote function using random index * api array length
function newQuote() {
  loading();
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // Check if author field is blank and replace with 'unknown'
  if (!quote.author) {
    authorText.textContent = 'Unknown';
  } else {
  authorText.textContent = quote.author;
}
  // Check quote length to determine styling
  if (quote.text.length > 120) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
  // Insert quote, Hide loader 
  quoteText.textContent = quote.text;
  completeLoading();
}

// Get API quotes
async function getQuotes() {
  loading();
  // declare URL API variable
  const apiUrl = 'https://type.fit/api/quotes';
  // Try-catch function
  try {
    // Wait for URL data and then set into respond variable
    const response = await fetch(apiUrl);
    // Global variable that holds the response in JSON
    apiQuotes = await response.json();
    // Call newQuote function after apiQuotes data loaded
    newQuote();
  } catch (error) {
    alert (error);
    // Catch error here
  }
}

// Tweet quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On load
getQuotes();
