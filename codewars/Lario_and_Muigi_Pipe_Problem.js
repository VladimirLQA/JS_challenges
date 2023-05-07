{
    function pipeFix(array) {
        let result = [];
        let pipe = Math.max.apply(null, array);
        for (let i = Math.min.apply(null, array); i <= pipe; i++) {
            result.push(i)
        }
        return console.log(result);
    }

    pipeFix([1, 2, 3, 5, 6, 8, 9])
}

{
    function pipeFix(num){
        let max = Math.max(...num)
        let min = Math.min(...num)
        return new Array(max-min+1).fill(min).map((a, b)=> a+b)
    }

    console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]))
}

{
    function pipeFix(numbers){
        let result = []
        let current = numbers[0];
        while(current <= numbers[numbers.length -1]) {
            result.push(current);
            current++;
        }
        return result;
    }
    console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]))
}

{
    function pipeFix(numbers){
        let [s, e] = [numbers[0], Math.max(...numbers)];
        return Array.from(Array(e-s+1), (n, i) => s + i );
    }
    console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]))
}




