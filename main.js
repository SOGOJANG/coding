document.addEventListener('DOMContentLoaded', () => {
    const numbersContainer = document.getElementById('numbers');
    const generateBtn = document.getElementById('generate-btn');

    generateBtn.addEventListener('click', () => {
        generateAndDisplayNumbers();
    });

    function generateAndDisplayNumbers() {
        numbersContainer.innerHTML = '';
        const lottoNumbers = generateLottoNumbers();
        lottoNumbers.forEach(number => {
            const numberElement = document.createElement('div');
            numberElement.classList.add('number');
            numberElement.textContent = number;
            numberElement.style.backgroundColor = getNumberColor(number);
            numbersContainer.appendChild(numberElement);
        });
    }

    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    function getNumberColor(number) {
        if (number <= 10) return '#f44336'; // Red
        if (number <= 20) return '#ff9800'; // Orange
        if (number <= 30) return '#ffc107'; // Amber
        if (number <= 40) return '#4caf50'; // Green
        return '#2196f3'; // Blue
    }
});
