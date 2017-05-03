/**
 * Created by nmekala on 5/3/17.
 */
var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
function transform(arr){
    for(var i=0; i<arr.length;i++){
        for(var j=0; j<arr.length; j++){
            var temp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;
        }
    }
    console.log(arr);
}
transform(arr);