/*
* Write a function to split a string and convert it into an array of words.
*/


{
    function stringToArray(string) {
        let array = [];
        let temp = '';
        for (let i = 0; i < string.length; i++) {
            if (string[i] !== ' ') {
                temp += string[i]
            } else {
                array.push(temp)
                temp = ''
            }
        }
        array.push(temp)
        return console.log(array);
    }

    stringToArray("I love arrays they are my favorite"); // ["I", "love", "arrays", "they", "are", "my", "favorite"]
    stringToArray("Robin Singh"); // ["Robin", "Singh"]
}