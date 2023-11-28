{
    const monotonic = (array) => {
        if(!array.length || array.length === 1) return true;    
        
        let isIncreasing = true;
        let isDecreasing = true;

        for (let i = 1; i < array.length - 1; i++) {

            if (array[i] > array[i + 1]) {
                isDecreasing = false;
            } else if (array[i] < array[i + 1]) {
                isIncreasing = false;
            }
        }

        return isIncreasing || isDecreasing;
    }

    const isMonotonic = [1, 2, 2, 3];
    const notMonotonic = [1, 2, 3, 4];

    console.log(monotonic(isMonotonic));
    console.log(monotonic(notMonotonic)); 
}