export function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both parameters must be numbers');
  }
  return a + b;
}

export function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both parameters must be numbers');
  }
  return a - b;
}


export function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both parameters must be numbers');
  }
  return a * b;
}

export function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both parameters must be numbers');
  }
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

export function isEven(num) {
  if (typeof num !== 'number') {
    throw new Error('Parameter must be a number');
  }
  return num % 2 === 0;
}

export function isPrime(num) {
  if (typeof num !== 'number') {
    throw new Error('Parameter must be a number');
  }
  
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  
  return true;
}

export function factorial(num) {
  if (typeof num !== 'number') {
    throw new Error('Parameter must be a number');
  }
  
  if (num < 0) {
    throw new Error('Factorial is not defined for negative numbers');
  }
  
  if (num === 0 || num === 1) {
    return 1;
  }
  
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  
  return result;
}

export function power(base, exponent) {
  if (typeof base !== 'number' || typeof exponent !== 'number') {
    throw new Error('Both parameters must be numbers');
  }
  
  if (exponent === 0) return 1;
  if (exponent === 1) return base;
  
  let result = 1;
  const absExponent = Math.abs(exponent);
  
  for (let i = 0; i < absExponent; i++) {
    result *= base;
  }
  
  return exponent < 0 ? 1 / result : result;
}

export function findMax(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Parameter must be an array');
  }
  
  if (numbers.length === 0) {
    throw new Error('Array cannot be empty');
  }
  
  if (!numbers.every(num => typeof num === 'number')) {
    throw new Error('All elements of the array must be numbers');
  }
  
  return Math.max(...numbers);
}

export function findMin(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Parameter must be an array');
  }
  
  if (numbers.length === 0) {
    throw new Error('Array cannot be empty');
  }
  
  if (!numbers.every(num => typeof num === 'number')) {
    throw new Error('All elements of the array must be numbers');
  }
  
  return Math.min(...numbers);
}


export function calculateAverage(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Parameter must be an array');
  }
  
  if (numbers.length === 0) {
    throw new Error('Array cannot be empty');
  }
  
  if (!numbers.every(num => typeof num === 'number')) {
    throw new Error('All elements of the array must be numbers');
  }
  
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}
