function userChoice(choice) {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];

    const result = getResult(choice, computerChoice);

    document.getElementById('result').innerHTML = `You chose ${choice}. Computer chose ${computerChoice}. Result: ${result}`;
}

function getResult(user, computer) {
    if (user === computer) {
        return "It's a tie!";
    } else if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}
