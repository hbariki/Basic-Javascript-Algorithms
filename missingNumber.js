// find the missing number and works for only 1 difference
var arr = [5,4,2,1];
var n = arr.length;
total = (n+1)*(n+2)/2;
for(var i=0; i<arr.length;i++){
    total -= arr[i];
}
console.log(total);
