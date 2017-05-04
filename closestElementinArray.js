var array = [32,45,78,90,101,245,272];
var number = 99;
var currentDifference = null;
var currentClosestNumber = null;

for(var i=0;i<array.length;i++){
    var newDifference = Math.abs(number - array[i]);
    if(i == 0){
        currentDifference = newDifference;
        currentClosestNumber = array[i];
    }
    else {
        if(newDifference < currentDifference){
            currentDifference = newDifference;
            currentClosestNumber = array[i];
        }
    }
}
console.log(currentClosestNumber);