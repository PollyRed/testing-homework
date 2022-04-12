export default function disableCards(cards, name) {
  for (const card of cards) {
    if (!card.classList.contains(name)) {
      card.classList.add('cdisabled');
    }
  }
}

export function enableCards(cards) {
  for (const card of cards) {
    card.classList.remove('cdisabled');
  }
}
