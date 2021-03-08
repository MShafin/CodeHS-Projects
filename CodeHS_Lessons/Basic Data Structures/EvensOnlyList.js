function start(){
    var arr = [1,2,3,4,5,6];
    var even = onlyEvens(arr);
    println(even);
}

function onlyEvens(arr){
    var result = [];
    for(var i = 0; i < arr.length; i++){
        var cur = arr[i];
        if(cur % 2 == 0){
            result.push(arr[i]);
        }
    }
    return(result);
}