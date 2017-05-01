/**
 * Created by nmekala on 4/29/17.
 */
var str = "welcome to coding algorithms";
var strArr = str.split('');
console.log(strArr);
var i = 0;
var reversedStr = '';
while(i < strArr.length) {
     i++;
    reversedStr += strArr[strArr.length - i];
}
console.log(reversedStr);