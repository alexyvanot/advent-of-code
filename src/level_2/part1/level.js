const readline = require('readline-sync');
const fs = require('fs');
const path = './input.txt';
const contenuFichier = fs.readFileSync(path, 'utf8');
const lignes = contenuFichier.split('\n');
console.log(lignes);