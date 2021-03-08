//School's Out
//Shafin Mohammed
//March 31
//
//Determiens whether there is no school today

function start(){
var weekday = readBoolean("Is today a weekday? ");
weekday = !weekday;
var holiday = readBoolean("Is today a holiday? ");
var noSchoolToday = holiday || weekday;
println("There is no school today: " + noSchoolToday);
}


//Example
/*

Is today a weekday? true
Is today a holiday? true
There is no school today: true

Is today a weekday? true
Is today a holiday? false
There is no school today: false

*/