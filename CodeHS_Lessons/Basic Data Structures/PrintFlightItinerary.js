function start(){
    var arr = ["San Francisco", "New York", "Chicago", "Honolulu"];
    for(var i = 0; i < arr.length; i++){
        var cur = arr[i];
        print(cur);
        if (i < arr.length - 1 ){
            print(" -> ");
        }
    }
}