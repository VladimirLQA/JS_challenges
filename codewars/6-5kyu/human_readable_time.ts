/*
* Write a function, which takes a non-negative integer (seconds)
* as input and returns the time in a human-readable format (HH:MM:SS)
* HH = hours, padded to 2 digits, range: 00 - 99
* MM = minutes, padded to 2 digits, range: 00 - 59
* SS = seconds, padded to 2 digits, range: 00 - 59
* The maximum time never exceeds 359999 (99:59:59)
*/

{
    function formatting(numVal: number): string {
        return numVal.toString().padStart(2, '0');
    }

    function humanReadable(seconds: number): string {
        let hh = Math.floor(seconds / 3600);
        let mm = Math.floor(seconds / 60) % 60;
        let ss = seconds % 60;
        // return `${formatting(hh)}:${formatting(mm)}:${formatting(ss)}`;

        return [hh, mm, ss].map((num) => String(num).padStart(2, '0')).join(':');
    }

    console.log(humanReadable(0)); // '00:00:00'
    console.log(humanReadable(5)); // '00:00:05'
    console.log(humanReadable(86399)); // '23:59:59'
    console.log(humanReadable(359999)); // '99:59:59'
}
