function filter(array, callback, index = 0, result = []) {

    if (index === array.length) {
        return result;
    }

    if (callback(array[index], index, array)) {
        result.push(array[index]);
    }

    return filter(array, callback, index + 1, result);
}

module.exports = filter;