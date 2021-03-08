function start(){
    var arr = [1,2,3,4];
    var reversed = reverseList(arr);
    println(reversed);
}

function reverseList(arr){
    var reverse = [];
    for(var i = arr.length - 1; i >= 0; i--){
        reverse.push(arr[i]);
    }
    return reverse;
}