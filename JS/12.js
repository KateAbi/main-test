let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];

function array_combine(arr, arr1) {
    for (key in arr1) {
        console.log(arr[key] + ": " + arr1[key]);
    }
}

let result = array_combine(testData, testData2);
console.log(result);
