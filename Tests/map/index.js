function map(array, callback, index = 0, result = []) {

  if (index === array.length) {
    return result;
  }

  result.push(callback(array[index], index, array));

  return map(array, callback, index + 1, result);
}

module.exports = map;