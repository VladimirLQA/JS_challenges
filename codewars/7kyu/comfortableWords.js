/*
 * A comfortable word is a word which you can type always 
 * alternating the hand you type with (assuming you type 
 * using a QWERTY keyboard and use fingers as shown in the image below).
 * 
 * That being said, complete the function which receives a word and 
 * returns `true` if it's a comfortable word and `false` otherwise.
 * 
 * The word will always be a string consisting of only ascii letters from a to z.
 * To avoid problems with image availability, here's the lists of letters for each hand:
 * 
 * Left: `q, w, e, r, t, a, s, d, f, g, z, x, c, v, b`
 * Right: `y, u, i, o, p, h, j, k, l, n, m`
 * 
 * Examples
 * "yams"  -->  true
 * "test"  -->  false
 */

const comfortableWord = word => {

    const left = 'q, w, e, r, t, a, s, d, f, g, z, x, c, v, b'.split(', ')
    const right = 'y, u, i, o, p, h, j, k, l, n, m'.split(', ')

    let isComfortable = [...word].map((e, i) =>  i % 2 ? right.includes(e) : left.includes(e)) 
    return isComfortable.every(el => el === true) || isComfortable.every(el => el === false)
};


console.log(comfortableWord('yams'));
console.log(comfortableWord('test'));

console.log(`==============================================`);

const comfortable_word = word => {
    let right = ['y', 'u', 'i', 'o', 'p', 'h', 'j', 'k', 'l', 'n', 'm'];
    let left = ['q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v', 'b'];
    let arr = [];
    if (right.includes(word[0])) {
        word.split('').map((v, i) => {
            if (i % 2 === 0) {
                if (right.includes(v)) { arr.push(true) }
                else { arr.push(false) }
            }
            if (i % 2 !== 0) {
                if (left.includes(v)) { arr.push(true) }
                else { arr.push(false) }
            }
        })
    }
    if (left.includes(word[0])) {
        word.split('').map((v, i) => {
            if (i % 2 !== 0) {
                if (right.includes(v)) { arr.push(true) }
                else { arr.push(false) }
            }
            if (i % 2 === 0) {
                if (left.includes(v)) { arr.push(true) }
                else { arr.push(false) }
            }
        })
    }
    return arr.every(v => v === true)
};

console.log(comfortable_word('yams'));
console.log(comfortable_word('test'));