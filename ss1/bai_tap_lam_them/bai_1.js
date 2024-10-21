// Sử dụng ES6 ( arrow function, fitter)
//
// 1. Viết hàm kiểm tra 1 số có phải là số nguyên tố
// 2. Cho 1 mảng số nguyên. Sử dụng filter để lọc ra các số là số nguyên tố

const isPrime = num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const primes = (array) => array.filter(isPrime);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numbers = primes(arr)

console.log(numbers);