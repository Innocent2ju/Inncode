const max = 100;
const min = 10;
const answer = Math.trunc(Math.random() * (max - min) + min);
console.log(answer);
running = true;
attempts = 0;
while(running){
    guess = window.prompt(`choose a number from 1-100`);
    guess = Number(guess);
    if(isNaN(guess) || guess == ""){
        window.alert("Input numbers please")
    }
    else if (guess > answer){
        window.alert("This is above the number");
        attempts ++;
    }
    else if(guess < answer){
        window.alert("It is less than the number");
        attempts ++;
    }
    else{
        window.alert(`congratulations you attempted ${attempts} times`)
        running = false;
    }
}