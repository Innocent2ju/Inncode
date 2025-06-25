answer = document.getElementById("answer"); 
    
let passwordlength = 12;
    let numbers = "1234567890";
    let lowerchars = "abcdefghijklmnopqrstuvwxyz";
    let upperchars ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let symbols = "!@#$%^&*~";
    let chosen = numbers + lowerchars + symbols + upperchars;
    let password = [];
    running = true;
function generatepassword(){
    if(running){
   for(i = 0; i < 12; i++){
        number = Math.trunc(Math.random() * 70);
        password.push(chosen[number]);
        //console.log(chosen[number]);
        //console.log(password);
        answer.innerHTML = password;
    }
    }else{
        answer.textContent = "Please do not click this button frequently";
        running = true;
    }
}

