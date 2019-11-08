var remainder, reverse;
var reverse= 0;

function reverseNumber(num){
    var regex=/^[0-9]+$/;
    if(regex.test(num)){
        while(num>0){
            remainder= num%10;
            reverse=(reverse*10)+remainder;
            num=(num/10)|0;
        } 
    console.log(reverse);
    }else{
        alert("Please enter a valid number");
    }
}
var userNum=prompt("Enter a number to reverse:");
reverseNumber(userNum);



