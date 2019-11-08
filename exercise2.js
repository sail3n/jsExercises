function uppercaseString(str){
    str= str.split(" ");
    for(i=0;i<str.length;i++){
        str[i]=str[i].charAt(0).toUpperCase()+ str[i].substr(1);
    }
    return str.join(" ");
}

console.log(uppercaseString("the quick brown fox is very clever"));
