let interval;
let buttonStart = document.getElementsByClassName("play")[0];
let buttonstop = document.getElementsByClassName("stop")[0];
let buttonreset = document.getElementsByClassName("reset")[0];
let elementTens = document.getElementsByClassName("tens")[0];
let elementseconds = document.getElementsByClassName("seconds")[0];
let elementHours = document.getElementsByClassName("hours")[0];
let tens="00";
let seconds = "00";
let hours = "00";
function timestart(int ){
    tens++;
    if(tens<9){
        elementTens.innerHTML= "0" + tens;

    }
    if(tens>9){
        elementTens.innerHTML= tens;
    }
    if(tens>99){
        seconds++;
        elementseconds.innerHTML = "0" + seconds;
        tens=0;
        elementTens.innerHTML = "0" + tens;
    } 
    if(seconds>9){
        elementseconds.innerHTML = seconds;
    }
    if(seconds>59){
        hours++;
        elementHours.innerHTML = "0" + hours;
        seconds=0;
        elementseconds.innerHTML = "0" + seconds;
        tens=0;
        elementTens.innerHTML = "0" + tens;
    }
}
buttonStart.onclick = function(){
    interval = setInterval(timestart);
}
buttonstop.onclick = function(){
    clearInterval(interval);
}
buttonreset.onclick = function(){ 
    clearInterval(interval);  
    tens="00";
    seconds="00";
    hours = "00";
    elementHours.innerHTML = hours;
    elementTens.innerHTML = tens;
    elementseconds.innerHTML = seconds;   
}
