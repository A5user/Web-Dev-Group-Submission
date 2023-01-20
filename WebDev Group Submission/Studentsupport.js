//JSON data
fetch('faq-data.json')
  .then(response => response.json())
  .then(data => {
    // FAQ 
    let faqSection = document.getElementById("faq")

   
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

    //Search input and suggestions
let searchInput = document.getElementById("search-input");
let suggestionsContainer = document.getElementById("suggestions");
let searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", function() {
 
    let searchQuery = searchInput.value.toLowerCase();


fetch('faq-data.json')
.then(response => response.json())
.then(data => {
 
  let faqSection = document.querySelector(".faq");
  faqSection.innerHTML = ''; // clear 

  // Filter 
  let filteredData = data.faq.filter(item => {
    return item.question.toLowerCase().indexOf(searchQuery) !== -1 || item.answer.toLowerCase().indexOf(searchQuery) !== -1;
  });

 // filtered data and write
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

});


searchInput.addEventListener("input", function() {
 
  let searchQuery = searchInput.value.toLowerCase();

 
  fetch('faq-data.json')
    .then(response => response.json())
    .then(data => {
      
      let filteredData = data.faq.filter(item => {
        return item.question.toLowerCase().indexOf(searchQuery) !== -1 || item.answer.toLowerCase().indexOf(searchQuery) !== -1;
      });

     
      let suggestions = filteredData.slice(0, 3);

      
      suggestionsContainer.innerHTML = "";

      
      suggestions.forEach(item => {
        let suggestion = document.createElement("p");
        suggestion.innerHTML = item.question;
        suggestionsContainer.appendChild(suggestion);
      });
    });
});





  });
