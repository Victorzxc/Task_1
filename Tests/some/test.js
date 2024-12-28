const some = require('./index');
const assert = require('assert');

describe("some", function () {
    it('должна вернуть true, если хотя бы один элемент удовлетворяет условию', () => {
        assert.strictEqual(some([1, 2, 3, 4, 5], (x) => x > 3), true);
    });

    it('должна вернуть false, если ни один элемент не удовлетворяет условию', () => {
        assert.strictEqual(some([1, 2, 3, 4, 5], (x) => x > 5), false);
    });

    it('должна работать с пустым массивом и возвращать false', () => {
        assert.strictEqual(some([], (x) => x > 0), false);
    });

    it('должна правильно использовать индекс', () => {
        assert.strictEqual(some([10, 20, 30], (x, i) => i === 1), true);
    });

    it('должна работать с массивом строк', () => {
        assert.strictEqual(some(["Porsche", "Ferrari", "Lamborghini"], (str) => str.length > 5), true);
    });

    it('должна возвращать false для массива строк, не удовлетворяющих условию', () => {
        assert.strictEqual(some(["Porsche", "Ferrari", "Lamborghini"], (str) => str.length > 16), false);
    });

    it('должна правильно обрабатывать undefined значения', () => {
        assert.strictEqual(some([1, undefined, 3], (x) => x === undefined), true);
    });


    it('должна правильно обрабатывать null значения', () => {
        assert.strictEqual(some([1, null, 3], (x) => x === null), true);
    });

    it('не должна вызывать callback на последующих элементах после нахождения истинного', () => {
        let callCount = 0;
        some([1, 2, 3, 4, 5], (x) => {
            callCount++;
            return x > 2;
        });
        assert.strictEqual(callCount, 3, 'callback была вызвана только 3 раза');
    });
});