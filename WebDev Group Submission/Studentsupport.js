//JSON data
fetch('faq-data.json')
  .then(response => response.json())
  .then(data => {
    // Get the FAQ section element
    let faqSection = document.getElementById("faq")

    // Iterate over the data and create HTML elements
    data.faq.forEach(item => {
      let question = document.createElement("h3");
      question.innerHTML = item.question;
      question.classList.add("question-class")

      let answer = document.createElement("p");
      answer.innerHTML = item.answer;
      answer.classList.add("answer-class")

      faqSection.appendChild(question);
      faqSection.appendChild(answer);
    });

    // Get the search input and suggestions container element
let searchInput = document.getElementById("search-input");
let suggestionsContainer = document.getElementById("suggestions");
let searchButton = document.getElementById("search-button");

// Add an event listener to the search button
searchButton.addEventListener("click", function() {
    // Get the search query
    let searchQuery = searchInput.value.toLowerCase();

// Fetch the JSON data
fetch('faq-data.json')
.then(response => response.json())
.then(data => {
  // Get the FAQ section element
  let faqSection = document.querySelector(".faq");
  faqSection.innerHTML = ''; // clear the current content in FAQ section

  // Filter the data by search query
  let filteredData = data.faq.filter(item => {
    return item.question.toLowerCase().indexOf(searchQuery) !== -1 || item.answer.toLowerCase().indexOf(searchQuery) !== -1;
  });

  // Iterate over the filtered data and create HTML elements
  filteredData.forEach(item => {
    let question = document.createElement("h3");
    question.innerHTML = item.question;

    let answer = document.createElement("p");
    answer.innerHTML = item.answer;

    faqSection.appendChild(question);
    faqSection.appendChild(answer);
});
});
});
searchInput.addEventListener("keyup", function() {
// code here is same as above
});

// Add an event listener to the search input
searchInput.addEventListener("input", function() {
  // Get the search query
  let searchQuery = searchInput.value.toLowerCase();

  // Fetch the JSON data
  fetch('faq-data.json')
    .then(response => response.json())
    .then(data => {
      // Filter the data by search query
      let filteredData = data.faq.filter(item => {
        return item.question.toLowerCase().indexOf(searchQuery) !== -1 || item.answer.toLowerCase().indexOf(searchQuery) !== -1;
      });

      // Get the first 3 suggestions
      let suggestions = filteredData.slice(0, 3);

      // Clear the current suggestions
      suggestionsContainer.innerHTML = "";

      // Iterate over the suggestions and create HTML elements
      suggestions.forEach(item => {
        let suggestion = document.createElement("p");
        suggestion.innerHTML = item.question;
        suggestionsContainer.appendChild(suggestion);
      });
    });
});





  });
