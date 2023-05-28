/*
* Coding in function topSecret, function accept 1 parameter:file.
* file is an encrypted string. Encryption using the right shift 3.
* Your job is to decrypt the file and read the contents of the file,
* and then answer my three questions. If the answer is correct,
* you will pass the test. Note: the decryption should be left shift;
* Shift is only for uppercase and lowercase letters, other characters will
* remain the same; The shift mode is a cyclic shift, for example:
*
* character "A" after decryption should be "X" instead of ">"
* character "B" after decryption should be "Y" instead of "?"
* character "C" after decryption should be "Z" instead of "@"
* character "a" after decryption should be "x" instead of "^"
* character "b" after decryption should be "y" instead of "_"
* character "c" after decryption should be "z" instead of "`"
*/

{
    function topSecret(str: string): string{
        let dict: string[] = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p',
            'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y','z'];
        let Dict: string[] = ['A', 'B', 'C', 'D','E', 'F', 'G', 'H', 'I','J', 'K', 'L', 'M', 'N', 'O', 'P',
            'Q', 'R','S', 'T', 'U', 'V', 'W', 'X', 'Y','Z'];
        return str.replace(/[a-z]/gi,v => {
            if (v === v.toLowerCase()) {
                return dict.indexOf(v.toLowerCase()) - 3 < 0 ?
                    dict[dict.indexOf(v.toLowerCase()) - 3 + 26] : dict[dict.indexOf(v.toLowerCase()) - 3]}
            if (v === v.toUpperCase()) {
                return Dict.indexOf(v) - 3 < 0 ?
                    Dict[Dict.indexOf(v)- 3 + 26] : Dict[Dict.indexOf(v)-3]}
            return v;
        });
    }

    console.log(topSecret("Pb qdph lv Mrkq")); // "My name is John"
}

{
    function topSecret(str: string): string{
        let ans: string = "";
        for (let i = 0; i < str.length; i++){
            let char = str[i];
            if(char.match(/[A-Za-z]/)) {
                // @ts-ignore
                let code = char.charCodeAt() - 3;
                if( code < 65){
                    code = code + 26;
                } else if( code < 97 && code > 93 ){
                    code = code + 26;
                }
                char = String.fromCharCode(code);
            }
            ans += char;
        }
        return ans;
    }

    console.log(topSecret("Pb qdph lv Mrkq")); // "My name is John"
}