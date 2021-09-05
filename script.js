// declare quote array variable
let apiQuotes = [];

// get API quotes
async function getQuotes() {
  // declare URL API variable
  const apiUrl = 'https://type.fit/api/quotes';
  // try-catch function
  try {
    // Wait for URL data and then set into respond variable
    const response = await fetch(apiUrl);
    // global variable
    apiQuotes = await response.json();
    console.log(apiQuotes);
  } catch (error) {
    alert (error);
    // Catch error here
  }
}

// On load
getQuotes();
