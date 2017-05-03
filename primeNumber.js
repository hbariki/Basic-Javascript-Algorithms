// find the prime factors of a number
function primeFactors(n){
    var divisor = 2;
    var factors = [];
    while(n > 2){
        if(n % divisor == 0){
            factors.push(divisor);
            n = n/divisor;
        }
        else {
            divisor++;
        }
    }
    return factors;
}
Primefactors(69)

