function longestCountryName(str){
    var strLength=0;
    
    for(i=0;i<str.length;i++){
        if(str[i].length>strLength){
            strLength= str[i].length;
            largestName=i;  
        }        
    }
    return str[largestName];
    
}
countryList=["Nepal","China","Pakistan"];
console.log(longestCountryName(countryList));