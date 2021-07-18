let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
function array_skip_until(array, value) {
    while (array[0] != value) {
        array.splice(0, 1);
    }
}
array_skip_until(testData, "Rafshan")
console.log(testData);
