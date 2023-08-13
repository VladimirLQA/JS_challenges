{
    const distinct = (a: number[]): number[] => {
        return [...new Set(a)];
    }
}

{
    const distinct = (a: number[]): number[] => {
        const hashMap: Record<number, boolean> = {};
        return a.reduce((accumulator: number[], item: number) => {
            if (!hashMap[item]) {
                hashMap[item] = true;
                accumulator.push(item);
            }
            return accumulator;
        }, []);
    }
}

{
    const distinct = (a: number[]): number[] => {
        const resultArray: number[] = [];
        a.forEach(number => { if (resultArray.indexOf(number) === -1) resultArray.push(number) });
        return resultArray;
    }
}

{
    const distinct = (a: number[]): number[] => a.filter((v: number, i: number) => a.indexOf(v) === i);
}