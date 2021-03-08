function start(){
    min(1,2);
    min(9000,9001);
}

function min(x,y){
    if(x < y){
        println("MINIMUM VALUE IS: " + x);
        return(x);
    }else if(y < x){
        println("MINIMUM VALUE IS: " + y);
        return(y);
    }else if(x == y){
        println("MINIMUM VALUE IS: " + x);
        return(x);
    }
}