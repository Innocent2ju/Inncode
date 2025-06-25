let elapsedtime = 0;
let starttime = 0;
let timestring;
running = false
let stopper; 
function starttimer(){
    if(!running){
        starttime = Date.now() - elapsedtime;
        stopper = setInterval(update, 10)
    }
}
function update(){
    time = Date.now();
    elapsedtime = time - starttime;
    let hour = Math.trunc(elapsedtime / (1000 *60 *60));
    let min = Math.floor(elapsedtime / (1000 *60) % 60);
    let sec = Math.floor(elapsedtime /1000 % 60);
    let milisec = Math.floor(elapsedtime % 1000/10);
    timestring = `${hour} : ${min} : ${sec} : ${milisec}`;
    document.getElementById("timer").textContent = timestring;
}
function stoptimer(){
    clearInterval(stopper);
    running = false;
    elapsedtime = Date.now() - starttime;
}
function reset(){
    clearInterval(stopper);
    elapsedtime = 0;
    starttime = 0;
    running = false;
    document.getElementById("timer").textContent = `00 : 00 : 00 :00`;
}