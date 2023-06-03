/*
* The function giveMeFive accepts 1 parameter, obj, which is an object.
* Create an array (which you will eventually return).
* Then, traverse obj, checking each key and value.
* If the length of the key is equal to 5, then push the key to your array.
* Separately, if the length of the value is equal to 5, then push the value to your array.
* At the end, return your array.
*/

{
    function giveMeFive(obj) {
        let five = [];
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (key.length === 5) five.push(key);
                if (obj[key].length === 5) five.push(obj[key]);
            }
        }
        return five;
    }

    console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"})); // ["earth","world"]
    console.log(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"})); // ["Ihave","money","model"]
    console.log(giveMeFive({Pears:"than", apple:"sweet"})); //["Pears","apple","sweet"])
}

console.log(`==============================================================`);
console.log(`==============================================================`);

{
    const giveMeFive = obj => Object.entries(obj).join`,`.split`,`.filter( el => el.length === 5);

    console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"})); // ["earth","world"]
    console.log(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"})); // ["Ihave","money","model"]
    console.log(giveMeFive({Pears:"than", apple:"sweet"})); //["Pears","apple","sweet"])
}