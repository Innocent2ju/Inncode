function Diceroller(){
    let numberofdice = document.getElementById("numberofdice").value;
    let context = document.getElementById("context");
    let imagecon = document.getElementById("imagecon");
    let result = Math.trunc(Math.random() * 6 +1);
  if(numberofdice == 1){
    context.textContent = `${result} have been selected`;
    imagecon.innerHTML = `<img src="media/${result}.png">`;
  }
  else if(numberofdice == 2){
    result2 = Math.trunc(Math.random() * 6 +1).join(", ");
    finalresult = result += result2;
    context.textContent = `${finalresult} have been selected`;
    imagecon.innerHTML = `<img src="media/${finalresult}.png">`;
    
  }
  else if(numberofdice > 2){
    context.textContent = `Please input the number of dice from 1-2`;
  }
  else{
    context.textContent = `Please input the number of dice`;
  }
 console.log(result);
}