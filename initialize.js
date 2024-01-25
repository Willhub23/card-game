function createGame() {

    const sessionCode = generateRandomSessionCode();

    sessionStorage.setItem('sessionCode', sessionCode);


    window.location.href = 'lobby.html';

}

function joinGame() {
    const sessionIdInput = document.getElementById("session-id-input");
    const sessionId = sessionIdInput.value;

    // Validate the session ID (you may want to implement more validation)
    if (sessionId && sessionId.length === 5) {
        // Store the session code in sessionStorage
        sessionStorage.setItem('sessionCode', sessionId);

        // Redirect to the lobby page
        window.location.href = 'lobby.html';
    } else {
        // Display an error message or handle the invalid session ID
        alert('Invalid Session ID. Please enter a 5-character code.');
    }

}

function generateRandomSessionCode() {
    const maxLength = 5;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let sessionCode = '';
  
    for (let i = 0; i < maxLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      sessionCode += characters.charAt(randomIndex);
    }
  
    return sessionCode;
  }
  