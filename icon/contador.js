function updateCountdown() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 100); // Adicione 100 dias à data atual

    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = '<h2>Tempo Esgotado!</h2>';
    } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

        document.getElementById('days').textContent = days;
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
