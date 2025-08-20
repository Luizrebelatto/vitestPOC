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

/**
 * Função para calcular o fatorial de um número
 * @param {number} num - Número para calcular o fatorial
 * @returns {number} Fatorial do número
 */
export function factorial(num) {
  if (typeof num !== 'number') {
    throw new Error('O parâmetro deve ser um número');
  }
  
  if (num < 0) {
    throw new Error('Fatorial não é definido para números negativos');
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

/**
 * Função para calcular a potência de um número
 * @param {number} base - Base
 * @param {number} exponent - Expoente
 * @returns {number} Resultado da potência
 */
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

/**
 * Função para encontrar o maior número em um array
 * @param {number[]} numbers - Array de números
 * @returns {number} Maior número do array
 */
export function findMax(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('O parâmetro deve ser um array');
  }
  
  if (numbers.length === 0) {
    throw new Error('O array não pode estar vazio');
  }
  
  if (!numbers.every(num => typeof num === 'number')) {
    throw new Error('Todos os elementos do array devem ser números');
  }
  
  return Math.max(...numbers);
}

/**
 * Função para encontrar o menor número em um array
 * @param {number[]} numbers - Array de números
 * @returns {number} Menor número do array
 */
export function findMin(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('O parâmetro deve ser um array');
  }
  
  if (numbers.length === 0) {
    throw new Error('O array não pode estar vazio');
  }
  
  if (!numbers.every(num => typeof num === 'number')) {
    throw new Error('Todos os elementos do array devem ser números');
  }
  
  return Math.min(...numbers);
}

/**
 * Função para calcular a média de um array de números
 * @param {number[]} numbers - Array de números
 * @returns {number} Média dos números
 */
export function calculateAverage(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('O parâmetro deve ser um array');
  }
  
  if (numbers.length === 0) {
    throw new Error('O array não pode estar vazio');
  }
  
  if (!numbers.every(num => typeof num === 'number')) {
    throw new Error('Todos os elementos do array devem ser números');
  }
  
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}
