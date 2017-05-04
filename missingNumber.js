// find the missing number and works for only 1 difference
var arr = [3, 6, 9, 15, 18, 21];
var diff = (arr[arr.length-1] - arr[0])/arr.length;
var i = 0;
while(i < arr.length - 1) {
    if(arr[i+1] - arr[i] !== diff) {
        console.log(arr[i] + diff);
    }
    i++;
}