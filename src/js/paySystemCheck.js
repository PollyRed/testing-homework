import disableCards, { enableCards } from './domInteraction';

export function getPaySystem(value) {
  if (value[0] === '2') {
    return 'mir';
  }

  if (value[0] === '3') {
    return 'amex';
  }

  if (value[0] === '4') {
    return 'visa';
  }

  if (value[0] === '5') {
    return 'master';
  }

  return 'unknown';
}

export default function checkPaySystem() {
  const cards = Array.from(document.querySelectorAll('.card'));
  const input = document.querySelector('.form-control');

  input.addEventListener('input', (event) => {
    if (input.classList.contains('valid')) {
      input.classList.remove('valid');
    }

    if (input.classList.contains('invalid')) {
      input.classList.remove('invalid');
    }

    if (event.target.value === '') {
      enableCards(cards);
    }

    const paySystem = getPaySystem(event.target.value);

    if (paySystem !== 'unknown') {
      disableCards(cards, paySystem);
    }
  });
}
