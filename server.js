// 0 1 1 2 3 5 8
var fibArr = [0,1];
for(var i = 2; i<9; i++){
    fibArr[i] = fibArr[i-2]+fibArr[i-1];
}
console.log(fibArr);