// Variáveis
let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

// Função para fazer uma jogada
function makeMove(index) {
    if (!gameOver && board[index] === "") {
        board[index] = currentPlayer;
        document.getElementsByClassName("cell")[index].textContent = currentPlayer;
        checkWin();
        togglePlayer();
    }
}

// Função para alternar o jogador atual
function togglePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// Função para verificar se alguém ganhou
function checkWin() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameOver = true;
            document.getElementById("message").textContent = `${currentPlayer} venceu!`;
            return;
        }
    }

    if (!board.includes("")) {
        gameOver = true;
        document.getElementById("message").textContent = "Empate!";
    }
}

// Função para reiniciar o jogo
function resetGame() {
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    gameOver = false;
    document.getElementById("message").textContent = "";
    const cells = document.getElementsByClassName("cell");
    for (const cell of cells) {
        cell.textContent = "";
    }
}

// Iniciar o jogo
resetGame();
