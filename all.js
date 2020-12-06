let numberOfFaces = 0;
const theLeftSide = document.getElementById("leftSide");
const theRightSide = document.getElementById("rightSide");
let howManytimeYouTry = 0;
const playAgain = document.getElementById("playAgain");
const easyLevel = 2;
const normalLevel = 5;
const difficultLevel = 8;
const cancel = 0;

let level = +prompt(
  "which level you want to play\n\n" +
    "1.Easy\n\n" +
    "2.Normal\n\n" +
    "3.Difficult\n\n" +
    "pls entry 1 or 2 or 3\n\n"
);
console.log(typeof level);
if (level === 3) {
  numberOfFaces = difficultLevel;
} else if (level === 2) {
  numberOfFaces = normalLevel;
} else if (level === 1) {
  numberOfFaces = easyLevel ;
} else if (level === cancel ) {
  alert("Game cancel");
} else {
  alert("pls entry 1 or 2 or 3");
}

function generateFaces() {
  for (let i = 0; i < numberOfFaces; i++) {
    let face = document.createElement("img");
    face.src = "https://upload.cc/i1/2020/12/04/41ZykL.png";
    let randomTop = Math.floor(Math.random() * 400) + 1;
    let randomLeft = Math.floor(Math.random() * 400) + 1;
    face.style.top = randomTop + "px";
    face.style.left = randomLeft + "px";
    theLeftSide.appendChild(face);
  }
  const leftSideImages = theLeftSide.cloneNode(true);
  leftSideImages.removeChild(leftSideImages.lastElementChild);
  theRightSide.appendChild(leftSideImages);
  let last = theLeftSide.lastElementChild;
  last.addEventListener("click", nextLevel);
  console.log(last);
  document.body.addEventListener("click", gameOver);
}

function nextLevel(event) {
  while (theLeftSide.firstChild) {
    theLeftSide.removeChild(theLeftSide.firstChild);
  }
  while (theRightSide.firstChild) {
    theRightSide.removeChild(theRightSide.firstChild);
  }
  event.stopPropagation();
   
  switch(level){
    case 1:
      numberOfFaces+=easyLevel
      break;
    case 2:
      numberOfFaces+=normalLevel
      break;
    case 3:
      numberOfFaces+=difficultLevel;
      break;
  }

  howManytimeYouTry += 1;
  generateFaces();
}

function gameOver() {
  let finalcount = (howManytimeYouTry += 1);
  alert("Game Over! " + " you have try " + finalcount + " time ");
  document.body.removeEventListener("click", gameOver);
  theLeftSide.lastElementChild.removeEventListener("click", nextLevel);
}

playAgain.addEventListener("click", refresh);
function refresh(event) {
  event.stopPropagation();
  window.location.reload("Refresh");
}
