function countVowel(str){
    var count=0;
    str=str.split("");
    for(i=0;i<str.length;i++){
        if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){

        count++;
        }
    }
    return count;
}
console.log(countVowel("The quick brown fox is very clever"));