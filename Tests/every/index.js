function every(array, callback, index = 0) {

    if (index === array.length) {
        return true;
    }

    if (!callback(array[index], index, array)) {
        return false;
    }

    return every(array, callback, index + 1);
}

module.exports = every;
