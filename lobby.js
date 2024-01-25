document.addEventListener("DOMContentLoaded", function () {
    const sessionCodeElement = document.getElementById("session-code");
    const sessionCodeDisplayElement = document.getElementById("session-code-display");
  
    // Retrieve the session code from sessionStorage
    const sessionCode = sessionStorage.getItem('sessionCode');
  
    if (sessionCode) {
      // Display the session code in the HTML
      sessionCodeElement.textContent = sessionCode;
    } else {
      // Handle the case when no session code is found
      sessionCodeDisplayElement.textContent = "Invalid Session Code";
    }
  });
  
  function returnToHome() {
    // Clear the session code from sessionStorage
    sessionStorage.removeItem('sessionCode');
  
    // Redirect to the home/landing page
    window.location.href = 'landingPage.html';
  }

  function startGame() {

    window.location.href = 'index.html';
  }