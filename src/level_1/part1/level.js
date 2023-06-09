// O(n²) poru le pire des cas

const readline = require('readline-sync');
const fs = require('fs');
const path = './input.txt';
const contenuFichier = fs.readFileSync(path, 'utf8'); // O(n)
const lignes = contenuFichier.split('\r\n'); // O(n)
console.log(lignes);

/**
 * Permet de convertir un tableau 1D en un tableau 2D
 * Exemple: <URL>.img
 * @param {*} lignes 
 * @returns 
 */
function formatGroups(lignes) {
    let sum = 0;
    let group = [];
    let groups = [];
    for (let i = 0; i < lignes.length; i++) {
        if (lignes[i] === '') {
            groups.push(group);
            group = [];
        } else {
            group.push(lignes[i]);
        }
    }
    groups.push(group);
    
    return groups;
}

/**
 * Retourne le plus grand nombre d'un tableau
 * @param {*} numbers 
 * @returns 
 */
function getMaxNumber(numbers) {
    let max = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
            maxIndex = i;
        }
    }
    return max;
}

/**
 * Retourne l'addtion de tous les tableaux d'un tableau
 * @param {*} groups 
 * @returns
 */
function sumArray(groups) {
    let groupSum = [];
    for (let i = 0; i < groups.length; i++) {
        let group = groups[i];
        let sum = 0;
        for (let j = 0; j < group.length; j++) {
            let value = group[j];
            let number = parseInt(value);
            sum += number;
        }
        groupSum.push(sum);
    }
    return groupSum;
}

// On récupère les groupes
let groups = formatGroups(lignes); // O(n)
// console.log(groups);

// On récupère la somme de chaque groupe stocké dans "groups"
let sumOfAllGroups = sumArray(groups); // O(n²)
// console.log(sumOfAllGroups);

// On récupère le plus grand nombre du tableau "sumOfAllGroups"
let max = getMaxNumber(sumOfAllGroups); // O(n)

// On affiche le résultat
// Output: 68787
console.log(max);

