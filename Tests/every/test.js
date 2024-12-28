const every = require('./index');
const assert = require('assert');

describe("every", function () {
    it('должна вернуть true, если все элементы удовлетворяют условию', () => {
        assert.strictEqual(every([2, 4, 6, 8], (x) => x % 2 === 0), true);
    });

    it('должна вернуть false, если хотя бы один элемент не удовлетворяет условию', () => {
        assert.strictEqual(every([2, 4, 6, 7], (x) => x % 2 === 0), false);
    });

    it('должна работать с пустым массивом и возвращать true', () => {
        assert.strictEqual(every([], (x) => x > 0), true);
    });

    it('должна правильно использовать индекс', () => {
        assert.strictEqual(every([10, 20, 30], (x, i) => i < 3), true);
    });

    it('должна работать с массивом строк', () => {
        assert.strictEqual(every(["Porsche", "Audi", "Ferrari"], (str) => str.length > 3), true);
    });

    it('должна возвращать false для массива строк, если не все удовлетворяют условию', () => {
        assert.strictEqual(every(["Porsche", "Ferrari", "BMV"], (str) => str.length > 3), false);
    });


    it('должна правильно обрабатывать undefined значения', () => {
        assert.strictEqual(every([undefined, undefined], (x) => x === undefined), true);
    });

    it('должна правильно обрабатывать null значения', () => {
        assert.strictEqual(every([null, null], (x) => x === null), true);
    });

    it('не должна вызывать callback на последующих элементах после нахождения ложного', () => {
        let callCount = 0;
        every([1, 2, 3, 4, 5], (x) => {
            callCount++;
            return x < 3;
        });
        assert.strictEqual(callCount, 3, 'callback была вызвана только 3 раза');
    });
});