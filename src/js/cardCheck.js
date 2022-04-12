export function luhnAlgorithm(value) {
  if (/[^0-9-\s]+/.test(value) || value === '') return false;

  const trimmedValue = value.replace(/\D/g, '');

  if (trimmedValue.length !== 16) return false;

  let nCheck = 0;
  let bEven = false;

  for (let n = trimmedValue.length - 1; n >= 0; n -= 1) {
    let nDigit = parseInt(trimmedValue.charAt(n), 10);

    if (bEven) {
      nDigit *= 2;
      if (nDigit > 9) {
        nDigit -= 9;
      }
    }

    nCheck += nDigit;
    bEven = !bEven;
  }

  return (nCheck % 10) === 0;
}

export default function checkCard() {
  const submitBtn = document.querySelector('.btn');
  const input = document.querySelector('.form-control');
  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (luhnAlgorithm(input.value)) {
      input.classList.add('valid');
    } else {
      input.classList.add('invalid');
    }
  });
}
