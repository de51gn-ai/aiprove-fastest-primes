const fs = require('fs');
const N = +fs.readFileSync(0, 'utf-8').trim();
if (N < 2) { console.log(0); process.exit(0); }
// Odd-only sieve: index i represents number 2*i+3.
const size = ((N - 1) >> 1);
const sieve = new Uint8Array(size);
const limit = Math.floor(Math.sqrt(N));
for (let i = 0; i < size; i++) {
  if (sieve[i]) continue;
  const p = 2 * i + 3;
  if (p > limit) break;
  const start = ((p * p) - 3) >> 1;
  for (let j = start; j < size; j += p) sieve[j] = 1;
}
let count = 1; // prime 2
for (let i = 0; i < size; i++) if (!sieve[i]) count++;
console.log(count);
