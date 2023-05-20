/**Create a function that takes a string and returns the string ciphered with Rot13. 
 * If there are numbers or special characters included in the string, they should be returned as they are. 
 * Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
 * 
 * */


// First solution
function rot13(message) {

    const originalAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"

    return message.replace(/[a-z]/gi, letter => cipher[originalAlpha.indexOf(letter)])

}

console.log(rot13('fantasy44'))
console.log(rot13('f2nt3asy13'))

// Second solution

function rot13(message) {

    const alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';

    return message.replace(/[a-z]/gi, letter => alpha[alpha.indexOf(letter) + 13]);
}

console.log(rot13('fantasy44'))
console.log(rot13('f2nt3asy13'))



