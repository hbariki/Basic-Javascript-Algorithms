var arr = [5,4,2,1];
var n = arr1.length;
total = (n+1)*(n+2)/2;
for(var i=0; i<arr.length;i++){
    total -= arr[i];
}
console.log(total);
