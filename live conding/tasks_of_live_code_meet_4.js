// 3 задача
// "Ваша задача состоит в том, чтобы вернуть выходную строку, созданную из входной строки s , 
// заменив каждый символ в s числом, представляющим количество раз,
// которое этот символ встречается в s, и разделив каждое число символом(символами) sep."


function freqSep(str, separator) {
    return [...str.toLowerCase()].map((el, index, arr) =>
        arr.filter(e => el === e).length).join(`${separator} `)
}

console.log(freqSep('Toster', ';'))
console.log(freqSep('ffaanntazzzy', ';'))
console.log(freqSep('aaaaaaaaaaa', ';'))
