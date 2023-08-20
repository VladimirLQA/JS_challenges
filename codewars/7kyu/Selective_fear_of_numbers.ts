/*
* I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated:
* The number I'm afraid of depends on which day of the week it is...
* This is a concrete description of my mental illness:

Monday --> 12

Tuesday --> numbers greater than 95

Wednesday --> 34

Thursday --> 0

Friday --> numbers divisible by 2

Saturday --> 56

Sunday --> 666 or -666

Write a function which takes a string (day of the week) and an integer (number to be tested)
* so it tells the doctor if I'm afraid or not. (return a boolean)*/

{
    type Day = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

    function amIAfraid(day: Day, num: number): boolean {
        switch (day) {
            case "Monday": return num === 12;
            case "Tuesday": return num > 95;
            case "Wednesday": return num === 34;
            case "Thursday": return num === 0;
            case "Friday": return !(num % 2);
            case "Saturday": return num === 56;
            case "Sunday": return num === 666 || num === -666;
            default: return false;
        }
    }
}

{
    interface DayTests {
        [day: string]: (num: number) => boolean;
    }

    function amIAfraid(day: string, num: number): boolean {
        const dayTests: DayTests = {
            Monday: i => i === 12,
            Tuesday: i => i > 98,
            Wednesday: i => i === 34,
            Thursday: i => i === 0,
            Friday: i => !(i % 2),
            Saturday: i => i === 56,
            Sunday: i => Math.abs(i) === 666,
        }

        const dayTest = dayTests[day];

        if (dayTest) {
            return dayTest(num);
        }
        return false;
    }
}

{
    function amIAfraid(day: string, num: number): boolean {
        return day === 'Monday' && num === 12 ||
            (day === 'Tuesday' && num > 95) ||
            (day === 'Wednesday' && num === 34) ||
            (day === 'Thursday' && num === 0) ||
            (day === 'Friday' && num % 2 === 0) ||
            (day === 'Saturday' && num === 56) ||
            (day === 'Sunday' && (num === 666 || num === -666));
    }

}
