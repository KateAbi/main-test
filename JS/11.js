let testData3 = [{ "name": "Vasya", "email": "vasya@example.com", "age": 20, "skills": { "php": 0, "js": -1, "madness": 10, "rage": 10 } }, { "name": "Dima", "email": "dima@example.com", "age": 34, "skills": { "php": 5, "js": 7, "madness": 3, "rage": 2 } }, { "name": "Colya", "email": "colya@example.com", "age": 46, "skills": { "php": 8, "js": -2, "madness": 1, "rage": 4 } }, { "name": "Misha", "email": "misha@example.com", "age": 16, "skills": { "php": 6, "js": 6, "madness": 5, "rage": 2 } }, { "name": "Ashan", "email": "ashan@example.com", "age": 99, "skills": { "php": 0, "js": 10, "madness": 10, "rage": 1 } }, { "name": "Rafshan", "email": "rafshan@example.com", "age": 11, "skills": { "php": 0, "js": 0, "madness": 0, "rage": 10 } }]

function array_pluck(arr, key) {
    let array = [arr[0][key]];
    array.push(arr[1][key], arr[2][key], arr[3][key], arr[4][key], arr[5][key]);
    return array;
}
let result = array_pluck(testData3, 'name');
console.log(result);
//2 вариант
let testData3 = [{ "name": "Vasya", "email": "vasya@example.com", "age": 20, "skills": { "php": 0, "js": -1, "madness": 10, "rage": 10 } }, { "name": "Dima", "email": "dima@example.com", "age": 34, "skills": { "php": 5, "js": 7, "madness": 3, "rage": 2 } }, { "name": "Colya", "email": "colya@example.com", "age": 46, "skills": { "php": 8, "js": -2, "madness": 1, "rage": 4 } }, { "name": "Misha", "email": "misha@example.com", "age": 16, "skills": { "php": 6, "js": 6, "madness": 5, "rage": 2 } }, { "name": "Ashan", "email": "ashan@example.com", "age": 99, "skills": { "php": 0, "js": 10, "madness": 10, "rage": 1 } }, { "name": "Rafshan", "email": "rafshan@example.com", "age": 11, "skills": { "php": 0, "js": 0, "madness": 0, "rage": 10 } }]

function array_pluck(arr, key, key2) {
    let array = [arr[0][key][key2]];
    array.push(arr[1][key][key2], arr[2][key][key2], arr[3][key][key2], arr[4][key][key2], arr[5][key][key2]);
    return array;
}
let result = array_pluck(testData3, 'skills', 'php');
console.log(result);
