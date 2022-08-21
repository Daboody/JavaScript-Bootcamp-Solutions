console.log(10 * 20 * 15 * 3 % 190 % 10 / 400);

let num = 3;
console.log(num + num);
console.log(Number(`${num + num}`));
console.log(num * num - num)
console.log( num * num * num / num - num );
console.log( num + --num + --num / num);

let numTwo = "10";

// Solution One
console.log(Number(numTwo)+(Number(numTwo))); // 20

// Solution Two
console.log(Number(`${Number(numTwo)+Number(numTwo)}`)); // 20

// Solution Three
console.log(Number(numTwo)*Number(numTwo)/Number(numTwo)+Number(numTwo)); // 20

// Solution Four
console.log(Number(numTwo)**Number(numTwo)/ Number(numTwo)**Number(numTwo)*Number(numTwo)+Number(numTwo)); // 20