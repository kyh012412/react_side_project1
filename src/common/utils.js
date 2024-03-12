export function shuffleArray(arr) {
  arr.forEach((_, idx) => {
    const randomIdx = Math.floor(Math.random() * arr.length);
    [arr[randomIdx], arr[idx]] = [arr[idx], arr[randomIdx]];
  });
}

export function reset() {
  alert('reset pressed');
}

export function addCard() {
  alert('addCard pressed');
}

export function hint() {
  alert('hint pressed');
}
