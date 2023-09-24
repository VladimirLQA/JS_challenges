/*
* Return the number (count) of vowels in the given string.
* We will consider a, e, i, o, u as vowels for this Kata (but not y).
* The input string will only consist of lower case letters and/or spaces.
*/

{
    function getCount(str) {
        return str.toLowerCase().split("").reduce((count, char) => {
            if ("aeiou".includes(char)) count++
            return count;
        }, 0);
    }

    console.log(getCount("abracadabra")); // 5
}

{
    function getCount(str) {
        return (str.match(/[aeiou]/ig) || []).length;
    }

    console.log(getCount("abracadabra")); // 5
}

{
    function getCount(str) {
        return str.toLowerCase().split("").filter(c => "aeiou".includes(c)).length;
    }

    console.log(getCount("abracadabra")); // 5
}

{
    function getCount(str) {
        return str.replace(/[^aeiou]/gi, "").length;
    }

    console.log(getCount("abracadabra")); // 5
}