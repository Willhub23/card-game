document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const playerNameInput = document.getElementById("player-name")

    function startGame() {
        const playerName = playerNameInput.value;

        modal.style.display = "none";

        const sessionId = generateRandomSessionId();

        initializeGame(sessionId, playerName);

        modal.style.display = "block";
    }

});

function initializeGame(sessionId, playerName) {
    const numPlayers = parseInt(prompt("Enter the number of players:"));
    const playersContainer = document.getElementById("players");


    for (let i = 0; i < numPlayers; i++) {
        const player = document.createElement("div");
        player.classList.add("player");
        player.textContent = 'Player ${i + 1}';
        playersContainer.appendChild(player);
    }
}

function generateRandomSessionId() {
    return Math.random().toString(36).substring(2,15);
}