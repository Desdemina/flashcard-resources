document.addEventListener('DOMContentLoaded', function() {
    const cards = Array.from(document.querySelectorAll('.card'));
    let currentCardIndex = 0;

    function showCard(index) {
        cards.forEach((card, i) => {
            card.classList.toggle('active', i === index);
        });
    }

    document.querySelector('.flashcards').addEventListener('click', function(e) {
        if (e.target.closest('.card')) {
            e.target.closest('.card').classList.toggle('flipped');
        }
    });

    window.nextCard = function() {
        currentCardIndex = (currentCardIndex + 1) % cards.length;
        showCard(currentCardIndex);
    };

    window.prevCard = function() {
        currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
        showCard(currentCardIndex);
    };

    // Show the first card on page load
    if (cards.length > 0) showCard(0);
});
