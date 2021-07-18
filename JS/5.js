var arr = ['Solnce', 'vishlo', 'iz', 'za', 'tuchi'];

function recuseLog(array) {
    if (array.length > 0) {
        console.log(array.shift());
        recuseLog(array);
    }
}
recuseLog(arr);
