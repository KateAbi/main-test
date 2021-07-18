let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
function array_find(array, string) {
    if (array.indexOf(string, 0))
        return string;
}
let result = array_find(testData, '/^raf.*/i');
console.log(result);