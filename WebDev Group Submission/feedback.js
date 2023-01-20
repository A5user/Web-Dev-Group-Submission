function submitForm() {
    
    const courseSelect = document.getElementById("course-select");
    const rating = document.getElementById("rating");
    const feedback = document.getElementById("feedback");
    const recommendation = document.querySelector('input[name="recommendation"]:checked');
    const recommendationComments = document.getElementById("recommendation-comments");


    if (!courseSelect.value) {
      alert("Please select a course.");
      return;
    }

    if (!rating.value) {
      alert("Please provide a rating for the course.");
      return;
    }

    if (!feedback.value) {
      alert("Please provide feedback for the course.");
      return;
    }

    if (!recommendation) {
      alert("Please select whether you would recommend the course to others.");
      return;
    }

    // Submit
    alert(`Form submitted successfully!
    Course: ${courseSelect.value}
    Rating: ${rating.value}
    Feedback: ${feedback.value}
    Recommendation: ${recommendation.value}
    Recommendation Comments: ${recommendationComments.value}`);

    // Reset
    courseSelect.value = "";
    rating.value = "";
    feedback.value = "";
    recommendation.checked = false;
    recommendationComments.value = "";
  }
  document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your feedback!");
    
    document.getElementById("feedback-form").reset();
  });
  
