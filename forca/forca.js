// Palavras para o jogo
const words = ["javascript", "html", "css", "web", "programacao", "desenvolvimento"];

// Selecionar uma palavra aleatória
let word = words[Math.floor(Math.random() * words.length)];

// Inicializar a palavra a ser adivinhada com underscores
let guessedWord = "_".repeat(word.length);

// Número de tentativas restantes
let attemptsLeft = 6;

// Variável para contar a quantidade de letras na palavra
let letterCount = word.length;

// Elementos HTML
const wordDisplay = document.getElementById("word-display");
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const attemptsSpan = document.getElementById("attempts");
const message = document.getElementById("message");

// Exibir a palavra inicial com underscores
wordDisplay.textContent = guessedWord;
// ...

// Variável para armazenar as letras já jogadas
const lettersPlayed = [];

// Elemento HTML para exibir as letras já jogadas
const lettersPlayedDisplay = document.getElementById("letters-played");

// ...

// Manipulador de eventos para o botão de adivinhar
guessButton.addEventListener("click", () => {
    const guess = guessInput.value.toLowerCase();
    
    if (guess.length !== 1 || !/[a-z]/.test(guess)) {
        message.textContent = "Por favor, insira uma letra válida.";
        return;
    }

    if (lettersPlayed.includes(guess)) {
        message.textContent = `Você já tentou a letra "${guess}".`;
    } else {
        lettersPlayed.push(guess);
        lettersPlayedDisplay.textContent = `Letras jogadas: \n ${lettersPlayed.join(", ")}`;

        if (word.includes(guess)) {
            for (let i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    guessedWord = guessedWord.substr(0, i) + guess + guessedWord.substr(i + 1);
                }
            }
            wordDisplay.textContent = guessedWord;
        } else {
            attemptsLeft--;
            attemptsSpan.textContent = attemptsLeft;
        }

        guessInput.value = "";
        
        if (guessedWord === word) {
            message.textContent = "Parabéns! Você ganhou!";
            guessInput.disabled = true;
            guessButton.disabled = true;
        } else if (attemptsLeft === 0) {
            message.textContent = `Fim de jogo. A palavra era: ${word}`;
            guessInput.disabled = true;
            guessButton.disabled = true;
        }
    }
});

// Exibir a quantidade de letras na palavra escolhida no formato textContent
const letterCountMessage = `Esta palavra tem ${letterCount} letra${letterCount !== 1 ? 's' : ''}.`;
const letterCountDisplay = document.getElementById("letter-count");
letterCountDisplay.textContent = letterCountMessage