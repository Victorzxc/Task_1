const map = require('./index');
const assert = require('assert');

describe("map", function () {
    it('должна удваивать числа', () => {
        assert.deepEqual(map([1, 2, 3], (x) => x * 2), [2, 4, 6]);
    });

    it('должна преобразовывать в строки', () => {
        assert.deepEqual(map([1, 2, 3], (x) => String(x)), ["1", "2", "3"]);
    });

    it('должна обрабатывать пустой массив', () => {
        assert.deepEqual(map([], (x) => x * 2), []);
    });

    it('должна корректно использовать индекс', () => {
        assert.deepEqual(map([1, 2, 3], (x, i) => x + i), [1, 3, 5]);
    });

    it('должна обрабатывать сложную логику', () => {
        const array = [1, 2, 3, 4, 5];
        const result = map(array, (x) => {
            if (x % 2 === 0) {
                return x * 2;
            } else {
                return x + 1;
            }
        });
        assert.deepEqual(result, [2, 4, 4, 8, 6]);
    });

    it('должна обрабатывать undefined значения', () => {
        assert.deepEqual(map([1, undefined, 3], (x) => x * 2), [2, NaN, 6]);
    });

    it('должна обрабатывать null значения', () => {
        assert.deepEqual(map([1, null, 3], (x) => x * 2), [2, 0, 6]);
    });

    it('должна передавать элемент, индекс и массив в callback', () => {
        assert.deepEqual(map([10, 20, 30], (item, index, array) => item + index + array.length), [13, 24, 35]);
    });

    it('не должна изменять исходный массив', () => {
        const array = [1, 2, 3];
        map(array, (x) => x * 2);
        assert.deepEqual(array, [1, 2, 3], "Не должна изменять исходный массив");

    });

    it('должна трансформировать массив строк', () => {
        assert.deepEqual(map(["audi", "bmw", "lada"], (str) => str.toUpperCase()), ["AUDI", "BMW", "LADA"])
    })
});