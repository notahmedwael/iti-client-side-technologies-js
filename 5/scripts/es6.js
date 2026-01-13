// Swap with destructuring

let a = 5, b = 10;
console.log(`Before Swap a: ${a}, b: ${b}`);
[a, b] = [b, a];
console.log(`After Swap a: ${a}, b: ${b}`);

console.log(`=======================================`)

// Max and min using rest and spread

const minMax = (...nums) =>{
    let min = Math.min(...nums)
    let max = Math.max(...nums);

    return {min, max}
}

const {min, max} = minMax(1, 2, 34, 55, 9, 27);

console.log(
    `Min: ${min} \nMax: ${max}
    `)