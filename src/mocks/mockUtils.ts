function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Simular un error por palabra  "FAIL" o "ERROR" o probabilidad 10%
function shouldFail(query?: string, probability = 0.1) {
  const q = (query ?? '').toUpperCase();

  if (q.includes('FAIL') || q.includes('ERROR')) return true;
  return Math.random() < probability;
}

export { sleep, randomInt, shouldFail };
