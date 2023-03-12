/*
* Simple, given a string of words, return the length of the shortest word(s).
* String will never be empty and you do not need to account for different data types.
* */

function findShort(string) {
    return Math.min(...string.split` `.map (s => s.length));
}
console.log(findShort('name fantastic boy avadakedavra'));

function findShort(s){
    let arr = s.split` `;
    let min = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < min) {
            min = arr[i].length;
        }
    }
    return min
}

console.log(findShort('name fantastic boy avadakedavra'));

function findShort(s){
    return s.split` `.map(a => a.length).reduce((a, b) => Math.min(a, b))
}

console.log(findShort('name fantastic boy avadakedavra'));