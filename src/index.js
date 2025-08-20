/**
 * Função para calcular a soma de dois números
 * @param {number} a - Primeiro número
 * @param {number} b - Segundo número
 * @returns {number} Soma dos números
 */
export function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Ambos os parâmetros devem ser números');
  }
  return a + b;
}

/**
 * Função para calcular a subtração de dois números
 * @param {number} a - Primeiro número
 * @param {number} b - Segundo número
 * @returns {number} Subtração dos números
 */
export function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Ambos os parâmetros devem ser números');
  }
  return a - b;
}

/**
 * Função para calcular a multiplicação de dois números
 * @param {number} a - Primeiro número
 * @param {number} b - Segundo número
 * @returns {number} Multiplicação dos números
 */
export function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Ambos os parâmetros devem ser números');
  }
  return a * b;
}

/**
 * Função para calcular a divisão de dois números
 * @param {number} a - Primeiro número
 * @param {number} b - Segundo número
 * @returns {number} Divisão dos números
 */
export function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Ambos os parâmetros devem ser números');
  }
  if (b === 0) {
    throw new Error('Divisão por zero não é permitida');
  }
  return a / b;
}

/**
 * Função para verificar se um número é par
 * @param {number} num - Número a ser verificado
 * @returns {boolean} true se for par, false se for ímpar
 */
export function isEven(num) {
  if (typeof num !== 'number') {
    throw new Error('O parâmetro deve ser um número');
  }
  return num % 2 === 0;
}

/**
 * Função para verificar se um número é primo
 * @param {number} num - Número a ser verificado
 * @returns {boolean} true se for primo, false caso contrário
 */
export function isPrime(num) {
  if (typeof num !== 'number') {
    throw new Error('O parâmetro deve ser um número');
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
