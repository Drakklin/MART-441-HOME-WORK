var random_images_array = ["card1.gif", "card2.gif", "card3.gif", "card4.gif", "card5.gif"];
// i need to understand how and why this works better
const cards = document.querySelectorAll('.mem-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
// are the cards the same?
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  matchCheck();
}

function matchCheck() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
// how can I unflip the cards? What I have tried does not work.... so shuffle is just here to keep it from breaking
  isMatch ? killCards() : shuffle();
}

function killCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}



function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 10);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
