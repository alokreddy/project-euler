// This method will print the array of prime factors.
// The answer to this challenge is the max value in the array.

function findPrimeFactors(num){
    let primeFactors = [];
    let n = num;
    for (let index = 2; index * index < n; index++) {
        while(n % index === 0){
            primeFactors.push(index);
            n = n / index;
        }
    }
    if(n > 1) primeFactors.push(n)
    return primeFactors
}
