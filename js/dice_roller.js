function Dice(){
    let Num = document.getElementById("numofdice").value;
    let real = document.getElementById("rnumofdice");
    let img = document.getElementById("img_container");
    const values = [];
    const images = [];
    if(Num > 2){
        real.textContent ="please roll dice between 1-2";
    }
    else{
            for(let i = 0; i < Num; i++){
            const numbers = Math.trunc(Math.random() * 6 + 1);
            console.log(numbers);
            values.push(numbers);
                real.textContent =`${values} have been selected`;
                image = `<img src="/media/${numbers}.png">`;
                //let rimage = [...image];
                images.push(image);
                img.innerHTML = images;
            }
        }
}
//please know that functions can work without if's;