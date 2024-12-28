// Написать функцию, которая на вход принимает целое число и возвращает факториал этого числа.
function fac(num) {
    if (num < 2) {
        return 1;
    } else {
        return num * fac(num - 1);
    }
}

console.log(fac(10));

// Написать функцию, которая на вход принимает строку и возвращает длину самого длинного слова в этой строке.

// const learn = 'Su-47 amidst the advancement of aviation technology there is one experimental fighter aircraft that presents extraordinary designer'
// const arr = learn.split(' ')
// let max = 0
// for (const num of arr){
//     const numl = num.length

//     if (numl > max) { 
//         max = numl; 
//     }

// }
// console.log(max);

const learn = 'Su-47 amidst the advancement of aviation technology there is one experimental fighter aircraft that presents extraordinary designer';
function findlongnuml(word) {

    const num = word.split(' ')
    let max = 0
    for (const word of num) {
        const wordl = word.length

        if (wordl > max) {
            max = wordl;
        }
    }

    return max;
}

const findlongword = findlongnuml(learn);
console.log(findlongword);





// Написать функцию, которая на вход принимает массив, состоящий из массивов целых чисел
// (например: [[1, 2, 3], [4, 5], [6, 7, 8, 9]]) и возвращает массив состоящий
// из наибольшего числа каждого предоставленного подмассива.

const number = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];

function findMaxInSubArrays(numberofnumbers) {
    let maxnumber = [];

    for (const num of numberofnumbers) {
        const maxnum = findMax(num);
        maxnumber.push(maxnum);
    }
    return maxnumber;

    function findMax(numbers) {
        let max = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = numbers[i];
            }
        }
        return max;
    }
}
const result = findMaxInSubArrays(number);
console.log(result);



// Написать функцию, которая на вход принимает строку и целое число и обрезает строку (первый аргумент),
// если она длиннее заданной максимальной длины строки (второй аргумент) и возвращает обрезанную строку с «…» в конце.
const line = 'Behind the window the symbols of red painting the face of the lady in black behind the window I will never forget the magic lady the lady in black';
const maxlength = 36;
function truncateString(line, maxLength) {

    if (line.length > maxLength) {

        const truncatedstring = line.slice(0, maxLength);

        return truncatedstring + "...";
    } else {

        return line;
    }
}

const result1 = truncateString(line, maxlength);
console.log(result1)



// Написать функцию, которая на вход принимает строку
// и возвращает эту строку в формате: каждое слово начинается с заглавной буквы, остальные в нижнем регистре.

const str = 'С наступающим НОВЫМ годом!';
function capitalizewords(text) {

    const words = text.split(" ");


    const capitalizedwords = words.map((word) => {
        if (word.length === 0) {
            return "";
        }
        const firstletter = word.charAt(0).toUpperCase();
        const restOfword = word.slice(1).toLowerCase();
        return firstletter + restOfword;
    });

    return capitalizedwords.join(" ");
}
console.log(capitalizewords(str));

// Написать функцию, которая на вход принимает два массива и целое число n.
// Функция должна скопировать каждый элемент первого массива во второй по порядку начиная с индекса n второго массива и
// вернуть полученный массив.
// Входные массивы не должны изменяться. (например: при входных данных  ([1, 2, 3], [4, 5], 1) должно вернуться [4, 1, 2, 3, 5].
function copyWithOffset(test1, test2, n) {

    const copiedTest2 = [...test2];

    for (let i = 0; i < test1.length; i++) {

        copiedTest2.splice(n + i, 0, test1[i]);

    }

    return copiedTest2;

}

const test1 = [1, 2, 3];
const test2 = [4, 5];
const n = 1;
const res = copyWithOffset(test1, test2, n);
console.log(res);


// Написать функцию, которая на вход принимает массив и удаляет в нем все "ложные значения"

const test = [1, false, null, undefined, NaN, 0, "", 2];
function removeFalsyValues(falsee) {
    return falsee.filter(Boolean);
}

const filtered = removeFalsyValues(test);
console.log(filtered);






// Написать функцию, которая на вход принимает массив, состоящий из двух строк. Функция должна вернуть true,
// если строка в первом элементе массива содержит все буквы строки во втором элементе массива (регистр игнорируется).

function containsAllLetters(ar) {


    const str1 = ar[0].toLowerCase();
    const str2 = ar[1].toLowerCase();

    for (let char of str2) {
        if (!str1.includes(char)) {
            return false;
        }
    }
    return true;
}
const test3 = ["sorry", "sorr"];
console.log(containsAllLetters(test3)); // Output: true



// Написать функцию, которая на вход принимает масссив и целое число.
// Функция должна разбить массив (первый аргумент) на группы длиной size (второй агрумент) и вернуть их в виде двумерного массива.

const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const num = 3

function splitarray(elements, num) {
    const chunkedarray = [];
    for (let i = 0; i < elements.length; i += num) {
        const chunk = elements.slice(i, i + num);
        chunkedarray.push(chunk);
    }
    return chunkedarray;
}
const result2 = splitarray(elements, num);
console.log(result2)


// Используя рекурсию (без использования циклов).
// Написать функцию, которая принимает массив и целое число (n) и заполняет массив числами от n до 1

function fillArrayRecursively(arr, n) {

    if (n <= 0) {
        return;
    }


    arr.push(n);
    fillArrayRecursively(arr, n - 1);
}

const arr1 = [];
fillArrayRecursively(arr1, 5);
console.log(arr1);


// _____________________________________________________________________________

// 1. Написать функцию, которая принимает на вход массив из двух чисел и возвращает сумму этих двух чисел плюс сумму всех чисел между ними. 
// Наименьшее число не всегда будет на первом месте. 

function sumall(array) {
    const min = Math.min(...array);
    const max = Math.max(...array);
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumall([4, 1]))



// 2. Написать функцию, которая на вход принимает два массива и возвращает новый массив с элементами найденными только в одном массиве, но не в
// обоих.

function finduniqueElements(array1, array2) {
    const set1 = new Set(array1);
    const set2 = new Set(array2);
    const unique1 = array1.filter(item => !set2.has(item));
    const unique2 = array2.filter(item => !set1.has(item));
    return [...unique1, ...unique2];
}

console.log(finduniqueElements([1, 2, 3], [3, 4, 5]));



// 3. Написать функцию, которая на вход принимает массив и еще один или несколько аргументов (точное количество не известно). Удалить из массива все
// элементы, которые имеют то же значение, что и эти аргументы.

function removeElements(arr, ...args) {
    return arr.filter(item => !args.includes(item));
}

console.log(removeElements([1, 2, 3, 4, 5], 2, 4));




// 4. Написать функцию, которая просматривает массив объектов (первый аргумент) и возвращает массив всех объектов, имеющих совпадающие пары имя и
// значение (второй aргумент).

function whatIsInAName(collection, source) {

    const sourceKeys = Object.keys(source);

    return collection.filter(obj => {

        return sourceKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
    });
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 }))




// 5. Написать функцию, которая конвертирует строку в spinal-case регистр.

function spinalCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2') 
        .toLowerCase()
        .replace(/\s+|_+/g, '-'); 
}

console.log(spinalCase("HappyNewYear")); 
console.log(spinalCase("Happy New Year")); 
console.log(spinalCase("Happy_New_Year")); 




// 6. Написать функцию, которая осуществляет поиск и замену в предложении. Первый аргумент - это строка, в которой осуществляется поиск и замена. Второй
// аргумент - это слово, которое нужно заменить, третий аргумент - слово, на которое нужно заменить. При замене сохраняйте регистр первого символа в
// исходном слове.

function replace(str, wordtorep, repword) {

    const firstChar = wordtorep.charAt(0);
    const repFirstChar = repword.charAt(0);

    const capitalizedword = firstChar === firstChar.toUpperCase() ?
        repFirstChar.toUpperCase() + repword.slice(1) :
        repFirstChar.toLowerCase() + repword.slice(1)

    const regex = new RegExp(wordtorep, "g")

    return str.replace(regex, capitalizedword);
}
console.log(replace("Это был тяжелый год", "тяжелый", "ежовый")) 





// 7. Написать функцию, которая на вход принимает последовательность букв и ищет пропущенные буквы. Если все буквы присутствуют в диапазоне, то
// возвращается undefined

function missingletter(str) {
    for (let i = 0; i < str.length - 1; i++) {

        const current = str.charCodeAt(i);
        const next = str.charCodeAt(i + 1);
        if (next - current > 1) {
            return String.fromCharCode(current + 1);
        }
    }
    return undefined;
}
console.log(missingletter("abcdefh")); //g




// 8. Написать функцию, которая принимает два или более массивов и возвращает новый массив уникальных значений. Значения должны быть отсортированы по их первоначальному порядку.

function uniteUniq(...arrs) {
    const unique = [];
    for (const array of arrs) {
        for (const item of array) {
            if (!unique.includes(item)) {
                unique.push(item)
            }
        }
    }
    return unique;
}

console.log(uniteUniq([1, 3, 2], [5, 2, 1, 4], [2, 1])); 




// 9. Написать функцию, которая заменяет символы & <, >, "(двойные кавычки), и "(апостроф) в строке их соответствующим HTML - кодом.

function convHTML(str) {
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
    return str.replace(/[&<>"']/g, char => htmlEntities[char]);
}
console.log(convHTML("rock & roll")); 
console.log(convHTML("earth < jupiter < sun")); 
console.log(convHTML('Роман "Война и мир"')) 




// 10. Написать функцию, которая суммирует все простые числа до n (аргумент функции)

function sumPrimes(num) {
    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    }

    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumPrimes(10)); 




// 11. Написать функцию, которая принимает массив и функцию и удаляет каждый элемент массива начиная с первого, пока функция не вернет true, а затем
// возвращает оставшуюся часть массива.

function dropElements(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr.slice(i);
        }
    }
    return [];
}
console.log(dropElements([1, 2, 3, 4], function (n) { return n >= 3; })) 




// 12. Написать функцию, которая принимает массив различной вложенности и возвращает одномерный массив.

function steamrollArray(arr) {
    let flattenedArray = [];
    for (let el of arr) {
        if (Array.isArray(el)) {
            flattenedArray.push(...steamrollArray(el))
        } else {
            flattenedArray.push(el)
        }
    }
    return flattenedArray
}

console.log(steamrollArray([1, [2], [3, [[4]]]])); 




// 13. Написать функцию, которая суммирует два аргумента вместе. Если указан только один аргумент, то возвращает функцию, которая ожидает второй
// аргумент и возвращает сумму.

function sumtwoarg(a, b) {
    if (arguments.length === 1) {
        if (typeof a !== "number") {
            return undefined
        }
        return function (c) {
            if (typeof c !== "number") {
                return undefined;
            }
            return a + c;
        }
    }
    if (typeof a !== "number" || typeof b !== "number") {
        return undefined;
    }
    return a + b;
}
console.log(sumtwoarg(2, 3)); 
console.log(sumtwoarg(2)(3)); 
console.log(sumtwoarg(2, "3")); 

// _____________________________________________________________________________

