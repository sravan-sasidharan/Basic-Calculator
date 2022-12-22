// 1- display_number
function displayNumber(num){
    result.value+=num;
}
// 2-clear
function clearBox(){
    result.value = "";
}
// 3-evaluate expr
function evalExpr(){
    result.value=eval(result.value);
}
// 4-remove last element from textbox
function remove(){
    result.value=result.value.slice(0,-1);
}
