const readline = require('readline-sync');
const fs = require('fs');
const path = './input.txt';
const contenuFichier = fs.readFileSync(path, 'utf8');
const lignes = contenuFichier.split('\n');
// console.log(lignes);

/**
 * Permet de convertir un tableau de lignes en un tableau de groupes
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
let groups = formatGroups(lignes);
// console.log(groups);

// On récupère la somme de chaque groupe stocké dans "groups"
let sumOfAllGroups = sumArray(groups);
// console.log(groupSum);

// On récupère le plus grand nombre du tableau "sumOfAllGroups"
let max = getMaxNumber(sumOfAllGroups);

// On affiche le résultat
// Output: 68787
// console.log(max);

/* PART 2 */

// Fonction qui retourne les 3 plus grands chiffres du tableau dans une array
function getThreeMaxNumbers(numbers) {
    let max = [];
    for (let i = 0; i < 3; i++) {
        let maxNumber = getMaxNumber(numbers);
        max.push(maxNumber);
        numbers.splice(numbers.indexOf(maxNumber), 1);
    }
    return max;
}

// Fonction qui retourne l'addition de ses éléments
function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;    
}

console.log(sum(getThreeMaxNumbers(sumOfAllGroups)));





