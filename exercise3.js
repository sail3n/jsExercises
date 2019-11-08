function reverseString(str){
    str=str.split("");
    str=str.reverse();
    str=str.join("");

    return str;
}
console.log(reverseString("Hello! Good Morning"));

