function some(array, callback, index = 0) {

    if (index === array.length) {
        return false;
    }

    if (callback(array[index], index, array)) {
        return true;
    }

    return some(array, callback, index + 1);
}

module.exports = some;