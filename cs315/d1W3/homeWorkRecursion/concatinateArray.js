


function concatenate(array) {
    if (array.length == 1)
        return array[0];
    let str = array.shift();
    return str + concatenate(array);
}