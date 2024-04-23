let coloredBoxes = document.querySelectorAll('.box');

let colorForGuess = document.getElementById('color');

let scorePoints = document.getElementById('score');

 

let gameLevel;

let guessColor;

let score = 0;

let gameInProgress = false;

 

function resetGame() {

    if (!gameInProgress) {

        alert("ჯერ აირჩიეთ თამაშის სირთულე !");

        return;

    }

    try {

        let gameLvl = prompt("გთხოვთ ჩაწეროთ რა სირთულის თამაში გსურთ:  1 - ადვილი , 2 - საშუალო ან 3 - რთული ");

 

        if(gameLvl !== '1' && gameLvl !== '2' && gameLvl !== '3'){

            alert("გთხოვთ შეიყვანოთ შესაბამისი რიცხვი");

            return;

        }

        if (gameLvl == '1') {

            playGame(3)

        } else if (gameLvl == '2') {

            playGame(6)

        } else {

            playGame(9)

        }

   

        score = 0;

        scorePoints.innerHTML = `Score : ${score}`

    } catch (error) {

        alert(error)

    }

   

}

 

function playGame(level) {

    gameInProgress = true;

    gameLevel = level;

 

    for (let i = 0; i < coloredBoxes.length; i++) {

        if (i < gameLevel) {

            coloredBoxes[i].style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`

            coloredBoxes[i].style.opacity = 1;

        } else {

            coloredBoxes[i].style.opacity =0;

        }

    }

    guessColor = coloredBoxes[Math.floor(Math.random() * level)].style.backgroundColor;

    colorForGuess.innerHTML = `Guess Color : ${guessColor}`;

 

}

 

for (let i = 0; i < coloredBoxes.length; i++) {

    coloredBoxes[i].addEventListener('click', function () {

        if (!gameInProgress) {

            alert("თამაშის დასაწყებად აირჩიეთ სირთულე !")

            return;

        }

           

        if (coloredBoxes[i].style.backgroundColor == guessColor) {

            alert("სწორია :)) ყოჩაღ და რამე !")

            if (gameLevel == 3) {

                score += 10;

            } else if (gameLevel == 6) {

                score += 20;

            } else {

                score += 30;

            }

            scorePoints.innerHTML = `Score : ${score}`

            playGame(gameLevel)

        } else {

            alert("არასწორია :))კიდევ სცადე !")

            if (gameLevel == 3) {

                score -= 5;

            } else if (gameLevel == 6) {

                score -= 10;

            } else {

                score -= 15;

            }

            scorePoints.innerHTML = `Score : ${score}`

            playGame(gameLevel)

        }

    })

}

 

function swapColors() {

    if (!gameInProgress) {

        alert("ჯერ აირჩიეთ თამაშის სირთულე !");

        return;

    }

    playGame(gameLevel)

}

 

function swapColorFormat() {

    let parts;

    if (!gameInProgress) {

        alert("ჯერ აირჩიეთ თამაშის სირთულე !");

        return;

    }

    let char = "r"

    let indexOfrgb = guessColor.search(char)

 

    if(indexOfrgb == 0){

        const numbersString = guessColor.slice(4, -1);

      parts = numbersString.split(',').map(Number);

    }

    else{

        parts = guessColor.trim().split(/\s+/);

    }

 

    if (parts.length === 3) {

     

      const valid = parts.every(part => !isNaN(part) && parseInt(part) >= 0 && parseInt(part) <= 255);

      if (!valid) {

        return null;

      }

      const hex = "#" + parts.map(part => part.toString(16).padStart(2, '0')).join("");

      colorForGuess.innerHTML = `Guess Color : ${hex}`;

      guessColor = hex;

    } else if (parts.length === 1 && parts[0].startsWith("#")) {

      const hex = parts[0].slice(1);

      const r = parseInt(hex.slice(0, 2), 16);

      const g = parseInt(hex.slice(2, 4), 16);

      const b = parseInt(hex.slice(4, 6), 16);

      colorForGuess.innerHTML = `Guess Color: rgb(${r}, ${g}, ${b})`;

      guessColor = `rgb(${r}, ${g}, ${b})`

    }

   

    else {

      return null;

    }

  }

 



//  let coloredBoxes = document.querySelectorAll('.box');

// let colorForGuess = document.getElementById('color');

// let scorePoints = document.getElementById('score');

 

// let gameLevel;

// let guessColor;

// let score = 0;

// let gameInProgress = false;

// function resetGame() {

//     if (!gameInProgress) {

//         alert("ჯერ აირჩიეთ თამაშის სირთულე !");

//         return;

//     }

//     try {

//         let gameLvl = prompt("გთხოვთ ჩაწეროთ რა სირთულის თამაში გსურთ:  1 - ადვილი , 2 - საშუალო ან 3 - რთული ");

//   if(gameLvl !== '1' && gameLvl !== '2' && gameLvl !== '3'){

//             alert("გთხოვთ შეიყვანოთ შესაბამისი რიცხვი");

//             return;

//         }

//         if (gameLvl == '1') {

//             playGame(3)

//         } else if (gameLvl == '2') {

//             playGame(6)

//         } else {

//             playGame(9)

//         }

   

//         score = 0;

//         scorePoints.innerHTML = `Score : ${score}`

//     } catch (error) {

//         alert(error)

//     }

   

// }

 

// function playGame(level) {

//     gameInProgress = true;

//     gameLevel = level;

 

//     for (let i = 0; i < coloredBoxes.length; i++) {

//         if (i < gameLevel) {

//             coloredBoxes[i].style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`

//             coloredBoxes[i].style.opacity = 1;

//         } else {

//             coloredBoxes[i].style.opacity =0;

//         }

//     }

//     guessColor = coloredBoxes[Math.floor(Math.random() * level)].style.backgroundColor;

//     colorForGuess.innerHTML = `Guess Color : ${guessColor}`;

 

// }

 

// for (let i = 0; i < coloredBoxes.length; i++) {

//     coloredBoxes[i].addEventListener('click', function () {

//         if (!gameInProgress) {

//             alert("თამაშის დასაწყებად აირჩიეთ სირთულე !")

//             return;

//         }

           

//         if (coloredBoxes[i].style.backgroundColor == guessColor) {

//             alert("სწორია :)) ყოჩაღ და რამე !")

//             if (gameLevel == 3) {

//                 score += 10;

//             } else if (gameLevel == 6) {

//                 score += 20;

//             } else {

//                 score += 30;

//             }

//             scorePoints.innerHTML = `Score : ${score}`

//             playGame(gameLevel)

//         } else {

//             alert("არასწორია :))კიდევ სცადე !")

//             if (gameLevel == 3) {

//                 score -= 5;

//             } else if (gameLevel == 6) {

//                 score -= 10;

//             } else {

//                 score -= 15;

//             }

//             scorePoints.innerHTML = `Score : ${score}`

//             playGame(gameLevel)

//         }

//     })

// }

 

// function swapColors() {

//     if (!gameInProgress) {

//         alert("ჯერ აირჩიეთ თამაშის სირთულე !");

//         return;

//     }

//     playGame(gameLevel)

// }

// function playGame(level) {

//     gameInProgress = true;

//     gameLevel = level;

 

//     for (let i = 0; i < coloredBoxes.length; i++) {

//         if (i < gameLevel) {

//             coloredBoxes[i].style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`

//             coloredBoxes[i].style.opacity = 1;

//         } else {

//             coloredBoxes[i].style.opacity =0;

//         }

//     }

//     guessColor = coloredBoxes[Math.floor(Math.random() * level)].style.backgroundColor;

//     colorForGuess.innerHTML = `Guess Color : ${guessColor}`;

 

// }

 

// for (let i = 0; i < coloredBoxes.length; i++) {

//     coloredBoxes[i].addEventListener('click', function () {

//         if (!gameInProgress) {

//             alert("თამაშის დასაწყებად აირჩიეთ სირთულე !")

//             return;

//         }

           

//         if (coloredBoxes[i].style.backgroundColor == guessColor) {

//             alert("სწორია :)) ყოჩაღ და რამე !")

//             if (gameLevel == 3) {

//                 score += 10;

//             } else if (gameLevel == 6) {

//                 score += 20;

//             } else {

//                 score += 30;

//             }

//             scorePoints.innerHTML = `Score : ${score}`

//             playGame(gameLevel)

//         } else {

//             alert("არასწორია :))კიდევ სცადე !")

//             if (gameLevel == 3) {

//                 score -= 5;

//             } else if (gameLevel == 6) {

//                 score -= 10;

//             } else {

//                 score -= 15;

//             }

//             scorePoints.innerHTML = `Score : ${score}`

//             playGame(gameLevel)

//         }

//     })

// }

 

// function swapColors() {

//     if (!gameInProgress) {

//         alert("ჯერ აირჩიეთ თამაშის სირთულე !");

//         return;

//     }

//     playGame(gameLevel)

// }

 

// function swapColorFormat() {

//     let parts;

//     if (!gameInProgress) {

//         alert("ჯერ აირჩიეთ თამაშის სირთულე !");

//         return;

//     }

//     let char = "r"

//     let indexOfrgb = guessColor.search(char)

 

//     if(indexOfrgb == 0){

//         const numbersString = guessColor.slice(4, -1);

//       parts = numbersString.split(',').map(Number);

//     }

//     else{

//         parts = guessColor.trim().split(/\s+/);

//     }

 

//     if (parts.length === 3) {

     

//       const valid = parts.every(part => !isNaN(part) && parseInt(part) >= 0 && parseInt(part) <= 255);

//       if (!valid) {

//         return null;

//       }

//       const hex = "#" + parts.map(part => part.toString(16).padStart(2, '0')).join("");

//       colorForGuess.innerHTML = `Guess Color : ${hex}`;

//       guessColor = hex;

//     } else if (parts.length === 1 && parts[0].startsWith("#")) {

//       const hex = parts[0].slice(1);

//       const r = parseInt(hex.slice(0, 2), 16);

//       const g = parseInt(hex.slice(2, 4), 16);

//       const b = parseInt(hex.slice(4, 6), 16);

//       colorForGuess.innerHTML = `Guess Color: rgb(${r}, ${g}, ${b})`;

//       guessColor = `rgb(${r}, ${g}, ${b})`

//     }

   

//     else {

//       return null;

//     }

//   }

 