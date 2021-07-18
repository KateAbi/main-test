function cloneDeep(object) {
    let clone = Object.assign({}, object);
    console.log(clone);
};
let apples = {
    color: "red",
    quantity: 10
};
cloneDeep(apples);
