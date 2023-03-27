const fs = require('fs');

// Lire le contenu du fichier input.txt et le stocker dans une variable data
const data = fs.readFileSync('input.txt', 'utf8');

// Diviser les parties de jeu en un tableau
const games = data.trim().split('\n');

// Initialiser les compteurs pour les scores des joueurs
let scoreLeft = 0;
let scoreRight = 0;

// Initialiser les compteurs de parties gagnés par les joueurs
let winLeft = 0;
let winRight = 0;

// Déterminer le choix du joueur à partir de la lettre
function getChoice(player) {
    switch (player) {
        case 'A':
            return 1;
        case 'B':
            return 2;
        case 'C':
            return 3;
        case 'X':
            return 1;
        case 'Y':
            return 2;
        case 'Z':
            return 3;
    }
}

function getWinner(choiceLeft, choiceRight) {
    let winner;
    if (choiceLeft === choiceRight) {
        winner = 'draw';
    } else if (choiceLeft === 1 && choiceRight === 2) {
        winner = 'right';
    } else if (choiceLeft === 1 && choiceRight === 3) {
        winner = 'left';
    } else if (choiceLeft === 2 && choiceRight === 1) {
        winner = 'left';
    } else if (choiceLeft === 2 && choiceRight === 3) {
        winner = 'right';
    } else if (choiceLeft === 3 && choiceRight === 1) {
        winner = 'right';
    } else if (choiceLeft === 3 && choiceRight === 2) {
        winner = 'left';
    }
    return winner;
}

// Boucler sur chaque partie de jeu et déterminer le vainqueur
for (const game of games) {
    const [moveLeft, moveRight] = game.trim().split(' ');

    choiceLeft = getChoice(moveLeft);
    choiceRight = getChoice(moveRight);

    // Déterminer le vainqueur de la partie
    let winner = getWinner(choiceLeft, choiceRight);

    // Mettre à jour les scores des joueurs en fonction du vainqueur
    if (winner === 'left') {
        winLeft++;
        scoreLeft += 6;
        if (choiceLeft === 1) {
            scoreLeft += 1;
        } else if (choiceLeft === 2) {
            scoreLeft += 2;
        } else if (choiceLeft === 3) {
            scoreLeft += 3;
        }
        
    } else if (winner === 'right') {
        winRight++;
        scoreRight += 6;
        if (choiceRight === 1) {
            scoreRight += 1;
        } else if (choiceRight === 2) {
            scoreRight += 2;
        } else if (choiceRight === 3) {
            scoreRight += 3;
        }
        
    } else if (winner === 'draw') {
        if (choiceLeft === 1 && choiceRight === 1) {
            scoreLeft += 2;
            scoreRight += 2;
        } else if (choiceLeft === 2 && choiceRight === 2) {
            scoreLeft += 4;
            scoreRight += 4;
        } else if (choiceLeft === 3 && choiceRight === 3) {
            scoreLeft += 6;
            scoreRight += 6;
        } 

    }
}

// Afficher les scores des joueurs
console.log("Score left: " + scoreLeft);
console.log("Score right: " + scoreRight);