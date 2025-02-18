
// detecting button press

var numberOfButton = document.querySelectorAll(".drum").length;
for ( var i =0;i< numberOfButton;i++){
document.querySelectorAll(".drum")[i].addEventListener("click" ,function(){
   var x = this.innerHTML;
   makeSound(x);
   animation(x);
   

})
}
// detecting keyboard pressed
document.addEventListener("keypress" , function(event){
   makeSound(event.key)
   animation(event.key)
});

function makeSound(key){
switch (key)
   

 {
   case "w":
      var tom1= new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

   case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
   case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
   case "d":
      var tom4 = new Audio("sounds/tom-4.mp3") ;
      tom4.play();
      break;
   case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
      case "k":
      var kick_bass = new Audio("sounds/kick-bass.mp3");
      kick_bass.play();
      break;

      case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

   default: console.log(x)
      break;
}
}

function animation(currentKey){
   var y = document.querySelector("." + currentKey);
   y.classList.add("pressed");
   setTimeout(function(){
      y.classList.remove("pressed")

   },200);

}