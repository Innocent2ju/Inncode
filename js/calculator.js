
let display = document.getElementById("displayview");
function calc(input){
    display.value += input;
}
function Cleardisplay(){
   try{
    display.value ="";
   }
   catch(error){
    console.error(error);
   }
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value ="error";
    }
}
