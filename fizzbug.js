const fizzbug = num => {
    if (!(num % 15)) return 'FizzBug';
    else if (!(num % 5)) return 'Bug';
    else if (!(num % 3)) return 'Fizz';
    return 'The number is not divisible by 3';
}

let num = 4;

console.log(fizzbug(num));