# fastest-primes
Read N on stdin, print the count of primes <= N.
Run: `node primes.js`
Odd-only Sieve of Eratosthenes over a Uint8Array. Verified: pi(10)=4, pi(100)=25,
pi(1000)=168, pi(100000)=9592, pi(1000000)=78498, pi(5000000)=348513.
~105ms wall clock for N=5000000 including Node startup.
