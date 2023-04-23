/*
Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return the number of litres Nathan will drink, 
rounded to the smallest value.

For example:
time = 3 ----> litres = 1
time = 6.7-- -> litres = 3
time = 11.8-- > litres = 5
*/

function litres(time) {
    return console.log(Math.floor(time * 0.5));
};
litres(2);
litres(1.4);
litres(12.3);
litres(0.82);
litres(11.8);
litres(1787);
litres(0);

