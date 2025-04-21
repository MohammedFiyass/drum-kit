/*document.querySelector("button").addEventListener("click",handleClick)

document.querySelectorAll(".drum")[1].addEventListener("click",handleClick)

document.querySelectorAll(".drum")[2].addEventListener("click",handleClick)
document.querySelectorAll(".drum")[3].addEventListener("click",handleClick)
document.querySelectorAll(".drum")[4].addEventListener("click",handleClick)
document.querySelectorAll(".drum")[5].addEventListener("click",handleClick)
document.querySelectorAll(".drum")[6].addEventListener("click",handleClick)
*/

var numberOfDrumButton= document.querySelectorAll(".drum").length;

for (var i=0;i<numberOfDrumButton;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick) 
    
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);

});

function handleClick(){
//this.style.color = "white";
var buttonClk = this.innerHTML;
makeSound(buttonClk); 
  // console.log(buttonClk);

}

function makeSound(key) {

    switch (key) {
        case "w":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
                audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
            break;
    
        default:
            break;
    }

}

