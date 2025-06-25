/*let hello = (x, y) => console.log(x + y);

hello(1, 2);
*/
/*const number = [1, 2, 3, 4, 5];

let answer = number.map((x) => Math.pow(x, 2));


console.log(answer);*/


/*let me = {
    firstname :"innocent",
    lastname : "chidera",
    dob : "2007/ 07/ 24"
}
console.log(me.dob);
console.log(me.firstname);*/

/*running = true;
while(running){
    const fname = window.prompt("What's your firstname");
    const lname = window.prompt("What's your lastname");
    answer = fname + " " + lname;
    if(answer == ""){
        window.alert("Please input your name");
    }
    else if(fname == ""){
        window.alert ("Please input your firstname");
    }
    else if (lname ==""){
        window.alert ("Please input your lastname");
    }
    else {
        window.alert(`registration complete your username is ${answer}`);
        running = false;
    }
}
const profile = {
    firstname :fname,
    lastname :lname,
};
console.log(profile.fname);*/
/*let text = document.getElementById("text");
text.textContent = `your username is ${profile.firstname}`;*/
/*const fname = brocode;
let strname = fname.slice(0, fname.indexOf("c"))
console.log(strname)*/

const mybox = document.getElementById("container");
function change(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH 😒";
}
mybox.addEventListener("click", change);
 //Or
 /*mybox.addEventListener("click", function(event){
    event.target.style.backgroundCkolor = "tomato";
    event.target.textContent = "OUCH 😒";
});*/
//or


/*mybox.addEventListener("click", event => {
    event.target.style.backgroundCkolor = "tomato";
    event.target.textContent = "OUCH 😒";
});*/

// THE FIRST ONE IS CLICK ...THIS ONE IS GOING TO BE MOUSEOVER
/*const mybox = document.getElementById("container");
function change(event){
    event.target.style.backgroundCkolor = "Yellow";
    event.target.textContent = "DON'T DO THIS 🥲";
}
mybox.addEventListener("mouseover", change);*/