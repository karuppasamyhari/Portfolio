// JavaScript for handling form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Perform form validation and further processing
    if (name && email && message) {
      // Form is valid, process the submission
      // Add your own code here to handle the form submission, such as sending the data to a server
  
      // Clear form inputs after successful submission
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
  
      // Display a success message or redirect to a thank you page
      alert("Thank you for your message!");
    } else {
      // Form is incomplete, show an error message or perform appropriate validation handling
      alert("Please fill in all the required fields.");
    }
  });
  