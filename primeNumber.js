// check whether number is prime or not
function isPrime(n){
    var divisor = 2;
    while(n > divisor){
        if(n % divisor == 0){
            return false;
        }
        else
          divisor ++;
    }
    return True;
}
