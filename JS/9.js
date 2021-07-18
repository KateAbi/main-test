let testData4 = [{ "name": "Vasya", "email": "vasya@example.com", "age": 20 }, { "name": "Dima", "email": "dima@example.com", "age": 34 }, { "name": "Colya", "email": "colya@example.com", "age": 46 }, { "name": "Misha", "email": "misha@example.com", "age": 16 }, { "name": "Ashan", "email": "ashan@example.com", "age": 99 }, { "name": "Rafshan", "email": "rafshan@example.com", "age": 11 }, 1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false, [[[[1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false, [{ "name": "Rafshan", "email": "rafshan@example.com", "age": 11 }]]]]]]

function array_normalize(arr, shema, transform = false) {
    function normalize(type, elem) {
        if (typeof elem === 'string' || typeof elem === 'number') {
            if (type === 'string') {
                return typeof elem === type ? elem : transform ? JSON.stringify(elem) : null;
            }
            if (type === 'number') {
                return typeof elem === type ? elem : transform ? Number(elem) : null;
            }
            if (type === 'int') {
                return Number.isInteger(elem) ? elem : transform ? parseInt(elem) : null
            }
            if (type === 'float') {
                return typeof elem === "number" && !Number.isInteger(elem) ? elem : transform ? parseFloat(elem) : null
            }
        }
        if (type === 'bool' && typeof elem != 'object') {
            return typeof elem === "boolean" ? elem : transform ? Boolean(elem) : null
        }
        
        if (type === 'array') {
            return Array.isArray(elem) ? elem : transform ? [elem] : null;
        }
        return null;
    }
    return arr.map(elem => {
        if (typeof shema === 'object') {
            if (typeof elem === 'object' && !Array.isArray(elem)) {
                if (transform) {
                    const temp = {};
                    for (let [field, type] of Object.entries(shema)) {
                        temp[field] = normalize(type, elem[field]);
                    }
                    return temp;
                } else {
                    return null;
                }
            }
        } else {
            return normalize(shema, elem);
        }

    }).filter(e => e != null);
}
let result4 = array_normalize(testData4, { age: 'float' }, true);
console.log(result4);

