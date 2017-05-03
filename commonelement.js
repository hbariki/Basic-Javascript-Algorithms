// common element between the arrays

var arr1 = [1,3,5,7,9];
var arr2 = [3,4,5,6,7];
var i = 0, j=0;
while(i < arr1.length && j < arr1.length){
    if(arr1[i] < arr2[j]){
        i++;
    }
    else if(arr1[i] > arr2[j]){
        j++;
    }
    /*they are equal*/
    else{
        console.log(arr1[i]);
        i++;
        j++;
    }
}
