console.log("script is working");

const box = document.getElementsByClassName("box");

// Array(box).forEach(function(element){
//     console.log(element);
//     element.onclick = function(){
//         console.log("You clicked a box");
//     };
//     });
// });
let instruction = document.getElementById("instruction");
let boxcolor = ["green", "red", "yellow", "blue"];
let flag = true;
let color = null;
let tapColor = null;
let score = 0;
let success = new Audio("/music/tap.wav");
let fail = new Audio("/music/fail.wav");

function match(no) {
  if (color == tapColor) {
    instruction.innerHTML = "tap success " + boxcolor[no];
    color = boxcolor[no];
    score++;
  } else {
    instruction.innerHTML = "OUT :( <br> your score was " + score;
  }
}

function rand(code) {
  let no = Math.floor(Math.random() * 4);
  // play a music when tapped.
  success.play();
  //this code is only for starting.
  if (flag) {
    flag = false;
    instruction.innerHTML = "tap " + boxcolor[no];
    // instruction.style.backgroundColor = boxcolor[no];
    color = boxcolor[no];
  } else {
    tapColor = boxcolor[code];
    match(no);
  }
}

//bind was used to pass argument.
const green = document
  .getElementById("box-1")
  .addEventListener("click", rand.bind(this, 0));
const red = document
  .getElementById("box-2")
  .addEventListener("click", rand.bind(this, 1));
const yellow = document
  .getElementById("box-3")
  .addEventListener("click", rand.bind(this, 2));
const blue = document
  .getElementById("box-4")
  .addEventListener("click", rand.bind(this, 3));
