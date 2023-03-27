const readline = require('readline-sync');

const fs = require('fs');
const path = './input.txt';
const contenuFichier = fs.readFileSync(path, 'utf8');
const lignes = contenuFichier.split('\n');

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


groups = formatGroups(lignes);


// console.log(groups);

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

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

// console.log(groupSum);

console.log(getMaxNumber(groupSum));








  