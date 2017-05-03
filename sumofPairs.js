// sum of pairs of number on hashTable approach
var arr = [1,2,3,4,5,6,7,8,9];
var hashTable = {};
var targetSum = 10;
console.log("=== HashTable approach ===");
for(var i=0; i<arr.length;i++){
    if(arr[i] in hashTable){
        console.log(targetSum - arr[i] + ', '+arr[i]);
    }else {
        hashTable[targetSum - arr[i]] = arr[i];
    }
}
