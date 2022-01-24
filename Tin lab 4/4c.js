function palindrome(str){
    var lowRegStr = str.toLowerCase();
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
}
console.log(palindrome('tenet'));