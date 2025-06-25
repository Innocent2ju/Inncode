let textboxx = document.getElementById("textbox");
let cel = document.getElementById("to_fahrenheit");
let fa = document.getElementById("to_celsius");
let answerboxx = document.getElementById("answerbox");
function convert(){
if(cel.checked){
    data = textboxx.value;
   answer = (data - 32) * 5/9; 
   answer = Math.round(answer, 3);
   answerboxx.textContent = answer + "°F";
}
else if(fa.checked){
    data = textboxx.value;
   answer = (data * 9/5) + 32;
   answer = Math.round(answer, 3);
   answerboxx.textContent = answer;
}
else{
    answerboxx.textContent ="Select a Unit";
}
}



