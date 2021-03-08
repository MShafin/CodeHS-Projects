function start(){
    var arr = [1, 8, 3, 4, 2, 9];
    var product = 1;
    for(var i = 0; i < arr.length; i++){
        var cur = arr[i];
        product*= cur;
    }
    println(product);
}