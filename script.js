var displayValue=(num)=>result.value+=num
// function displayValue(num){
//     result.value+=num
//     // let res=document.querySelector("#result")
//     // res.value+=num
// }
var clearBox=()=>result.value=""
// function clearBox(){
//     result.value=""
//    // document.querySelector("#result").value=""
// }
var evaluateExpression=()=>result.value=eval(result.value)
// function evaluateExpression(){
//     result.value=eval(result.value)
//     // let res=document.querySelector("#result")
//     // let cur_val=res.value
//     // let result=eval(cur_val)
//     // res.value=result
// }
var backspace=()=>result.value=result.value.slice(0,-1)
// function backspace(){
//     let res=document.querySelector("#result")
//     let cur_val=res.value
//     res.value=cur_val.slice(0,-1)
// }