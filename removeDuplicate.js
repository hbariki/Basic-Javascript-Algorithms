// remove duplicate element in an array
function removeDuplicate(arr){
    var exists = {},
        outArr = [],
        elm;
    for(i = 0; i<arr.length; i++){
        elm = arr[i];
        if(!exists[elm]){
            outArr.push(elm);
            exists[elm] = true;
        }
    }
    return outArr;
}
removeDuplicate([1,3,3,4,5,5,6,7,8,9]);
