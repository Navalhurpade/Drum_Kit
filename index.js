//Adding Event Listeners to Mouse and KeyBord !!!
for (var i = 0; i < 7; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", clickHandller);
}
document.addEventListener("keypress", keybordHandller)



//Triggering the Mouse OR keybord Event
function clickHandller() {
  playAudio(this.innerHTML);
  buttonAnimation(this.innerHTML);
}

function keybordHandller(event) {
  playAudio(event.key);
  buttonAnimation(event.key);
}

//  Animating Buttons
function buttonAnimation(currentAnimation) {
  var animatingKey = "." + currentAnimation
  document.querySelector(animatingKey).classList.add("pressed");
  setTimeout (function(){
    document.querySelector(animatingKey).classList.remove("pressed");
  },300)
}

//playing The Sound...
function playAudio(play) {
  switch (play) {
    case "w":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;

    case "a":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;

    case "s":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;

    case "d":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;

    case "j":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;

    case "k":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;

    case "l":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    default:
  }
}
