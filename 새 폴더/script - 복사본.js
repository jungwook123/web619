document.addEventListener('DOMContentLoaded', () => {
    const heroText = document.querySelector('.hero h1');
    const words = ['Manchester United', 'Glory Glory Man United', 'The Red Devils'];
    let wordIndex = 0;

    setInterval(() => {
        heroText.textContent = words[wordIndex];
        wordIndex = (wordIndex + 1) % words.length;
    }, 3000);
});
