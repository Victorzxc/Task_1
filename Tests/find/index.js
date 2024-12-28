function find(array, callback, index = 0) {

    if (index === array.length) {
        return undefined;
    }

    if (callback(array[index], index, array)) {
        return array[index];
    }

    return find(array, callback, index + 1);

}

module.exports = find;