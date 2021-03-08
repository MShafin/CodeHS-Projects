function start(){
    var arr = [10,20,30,40];
    var double = doubleList(arr);
    println(double);
    }

function doubleList(arr){
    var result = [];
    for(var i = 0; i < arr.length; i++){
        result.push(arr[i]);
        result.push(arr[i]);
    }
    return(result);
}