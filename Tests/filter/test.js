const filter = require('./index');
const assert = require('assert');

describe("filter", function () {
    it('должна отфильтровать четные числа', () => {
        assert.deepStrictEqual(filter([1, 2, 3, 4, 5, 6], (x) => x % 2 === 0), [2, 4, 6]);
    });

    it('должна вернуть пустой массив, если ни один элемент не удовлетворяет условию', () => {
        assert.deepStrictEqual(filter([1, 3, 5], (x) => x % 2 === 0), []);
    });

    it('должна обрабатывать пустой массив', () => {
        assert.deepStrictEqual(filter([], (x) => x > 0), []);
    });

    it('должна корректно использовать индекс', () => {
        assert.deepStrictEqual(filter([10, 20, 30, 40, 50], (x, i) => i % 2 === 0), [10, 30, 50]);
    });

    it('должна работать с массивом строк', () => {
        assert.deepStrictEqual(filter(["Porsche", "Ferrari", "Lamborghini", "Audi", "BMW"], (str) => str.length > 5), ["Porsche", "Ferrari", "Lamborghini"]);
    });

    it('должна правильно обрабатывать undefined значения', () => {
        assert.deepStrictEqual(filter([1, undefined, 3, undefined], (x) => x === undefined), [undefined, undefined]);
    });

    it('должна правильно обрабатывать null значения', () => {
        assert.deepStrictEqual(filter([1, null, 3, null], (x) => x === null), [null, null]);
    });

    it('не должна изменять исходный массив', () => {
        const arr = [1, 2, 3];
        filter(arr, (x) => x > 1)
        assert.deepStrictEqual(arr, [1, 2, 3], "Не должна изменять исходный массив");
    });
});