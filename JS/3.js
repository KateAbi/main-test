function MultiplicatorUnitFailure() { }
function primitiveMultiply(a, b) {
    if (Math.random() < 0.5)
        return a * b;
    else
        throw new MultiplicatorUnitFailure();
}
function reliableMultiply(a, b) {
    var x;
    while (!x) {
        try {
            x = primitiveMultiply(a, b);
        } catch (error) {
            if (!error instanceof MultiplicatorUnitFailure) {
                throw error;
            }
        }
    }
    return x;
}
console.log(reliableMultiply(8, 8));
