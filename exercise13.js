function subsetString(str){

    var subString= [ ];
    for(i=0;i<str.length;i++){
        for(j=i+1;j<str.length+1;j++){
            subString.push(str.slice(i,j));
        }
    }
    console.log(subString);

}
var userString=prompt("Enter the string you want to get subset of: ");
subsetString(userString);