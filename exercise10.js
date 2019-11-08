
var num1 = prompt("Enter first number ");
var num2 = prompt("Enter second number ");
var num3 = prompt("Enter third number ");

arrange(num1,num2,num3);

function arrange(x,y,z){

    if (x>y && x>z){
        if(y>z){
            alert("The sorting is "+x+","+y+","+z);
        }else{
            alert("The sorting is "+x+","+z+","+y);
        }
    }
    if(y>x && y>z){
        if(x>z){
            alert("The sorting is "+y+","+x+","+z);
        }else{
            alert("The sorting is "+y+","+z+","+x);
        }
    }
    if(z>x && z>y){
        if(x>y){
            alert("The sorting is "+z+","+x+","+y);
        }else{
            alert("The sorting is "+z+","+y+","+x);
        }
    }

}

