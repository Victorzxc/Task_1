const find = require('./index');
const assert = require('assert');

describe("find", function () {
    it('должна вернуть первый элемент, удовлетворяющий условию', () => {
        assert.strictEqual(find([1, 2, 3, 4, 5], (x) => x > 3), 4);
    });

    it('должна вернуть undefined, если ни один элемент не удовлетворяет условию', () => {
        assert.strictEqual(find([1, 2, 3, 4, 5], (x) => x > 5), undefined);
    });

    it('должна работать с пустым массивом и возвращать undefined', () => {
        assert.strictEqual(find([], (x) => x > 0), undefined);
    });

    it('должна правильно использовать индекс', () => {
        assert.strictEqual(find([10, 20, 30], (x, i) => i === 1), 20);
    });

    it('должна работать с массивом строк', () => {
        assert.strictEqual(find(["Porsche", "Audi", "BMW"], (str) => str.length > 5), "Porsche");
    });

    it('должна возвращать undefined для массива строк, если ни один элемент не удовлетворяет условию', () => {
        assert.strictEqual(find(["Porsche", "Audi", "BMW"], (str) => str.length > 10), undefined);
    });

    it('должна правильно обрабатывать undefined значения', () => {
        assert.strictEqual(find([1, undefined, 3], (x) => x === undefined), undefined);
    });

    it('должна правильно обрабатывать null значения', () => {
        assert.strictEqual(find([1, null, 3], (x) => x === null), null);
    });


    it('не должна вызывать callback на последующих элементах после нахождения истинного', () => {
        let callCount = 0;
        find([1, 2, 3, 4, 5], (x) => {
            callCount++;
            return x > 2;
        });
        assert.strictEqual(callCount, 3, 'callback была вызвана только 3 раза');
    });
});