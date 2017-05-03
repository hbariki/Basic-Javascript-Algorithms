// check whether it is a palindrome
isPalindrome('level');
function isPalindrome(str){
    str = str.replace(' ', ' ').toLowerCase();
    return (str == str.split('').reverse('').join(''))
}