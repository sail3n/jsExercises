function testJson(data){
    try{
        JSON.parse(data);
        return true;
    }
    catch(e){
        console.log(e);
        return false;

    }
    
}
jsondata='{"firstName":"John", "lastName":"Doe"}';

    
console.log(testJson(jsondata));