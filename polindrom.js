// 1 ->
function isPalindrom(word) {

    word = word.toLowerCase();

    for (let i = 0, j = word.length - 1; i < word.length, j >= 0; i++, j--) {

        if (word[i] !== word[j]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrom('Abba'));
console.log(isPalindrom('abba'));

// 2 ->
function isPalindrom1(word) {

    return word.toLowerCase() === word.toLowerCase().split('').reverse().join('');
}

console.log(isPalindrom1('adda'));


// 3 ->
function isPalindrom(word) {

    word = word.toLowerCase();

    return word === word.toLowerCase().split('').reduceRight((acc, item) => {
        acc = acc + item;
        return acc;
    }, '')
}

console.log(isPalindrom('abba'));
console.log(isPalindrom('1321'));


// 4 ->
function isPalindrom(word) {

    const wordLowerCase = word.toLowerCase();
    let emptyStr = '';

    for (let i = wordLowerCase.length - 1; i >= 0; i--) {
        emptyStr += wordLowerCase[i];
    }

    return emptyStr === wordLowerCase;
}

console.log(isPalindrom('abba'));
console.log(isPalindrom('Abba'));


// 5 ->
function isPalindrom(word) {

    const wordLowerCase = word.toLowerCase();
    let arr = wordLowerCase.split('');
    const newArr = []

    for (let i = wordLowerCase.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return wordLowerCase === newArr.join('');
}

console.log(isPalindrom('abba'));
console.log(isPalindrom('Abba'));


// For digits 

const isPalindrom = (x) => {

    if (x < 0 || x % 10 === 0 && x !== 0) {
        return false;

    } else {

        let str = x.toString();
        return x.toString() === str.split('').reverse().join('');
    }

}

console.log(isPalindrom(121));

