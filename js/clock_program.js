function starttime(){
    let now = new Date();
    let hour = now.getHours();
    let amshii = hour >= 12 ? "PM":"AM";
    hour = hour%12;
    hour = hour.toString().padStart(2,0)
    let min = now.getMinutes().toString().padStart(2,0);
    let sec = now.getSeconds().toString().padStart(2,0);
    let timestring = `${hour}: ${min}: ${sec} ${amshii}`;
    document.getElementById("timereader").innerHTML = timestring;
}
starttime();
setInterval(starttime, 1000);