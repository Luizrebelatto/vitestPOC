#!/usr/bin/env node

/**
 * Script de demonstração das funcionalidades do projeto
 * Execute com: node scripts/demo.js
 */

import { 
  add, 
  subtract, 
  multiply, 
  divide, 
  isEven, 
  isPrime, 
  factorial, 
  power,
  findMax,
  findMin,
  calculateAverage
} from '../src/index.js'

console.log('🚀 Vitest POC - Demonstração das Funcionalidades\n')

// Funções matemáticas básicas
console.log('📊 Funções Matemáticas Básicas:')
console.log(`add(5, 3) = ${add(5, 3)}`)
console.log(`subtract(10, 4) = ${subtract(10, 4)}`)
console.log(`multiply(6, 7) = ${multiply(6, 7)}`)
console.log(`divide(20, 5) = ${divide(20, 5)}`)
console.log()

// Utilitários numéricos
console.log('🔢 Utilitários Numéricos:')
console.log(`isEven(8) = ${isEven(8)}`)
console.log(`isEven(7) = ${isEven(7)}`)
console.log(`isPrime(17) = ${isPrime(17)}`)
console.log(`isPrime(15) = ${isPrime(15)}`)
console.log(`factorial(5) = ${factorial(5)}`)
console.log(`power(2, 8) = ${power(2, 8)}`)
console.log()

// Utilitários de array
console.log('📈 Utilitários de Array:')
const numeros = [23, 45, 12, 67, 89, 34, 56, 78, 90, 12]
console.log(`Array: [${numeros.join(', ')}]`)
console.log(`Maior número: ${findMax(numeros)}`)
console.log(`Menor número: ${findMin(numeros)}`)
console.log(`Média: ${calculateAverage(numeros).toFixed(2)}`)
console.log()

// Exemplos de integração
console.log('🔗 Exemplos de Integração:')
console.log('Expressão: (5 + 3) * 2 - 10 / 2')
const resultado = subtract(multiply(add(5, 3), 2), divide(10, 2))
console.log(`Resultado: ${resultado}`)
console.log()

console.log('Verificando propriedades matemáticas:')
const a = 4, b = 6
console.log(`Soma de dois pares (${a} + ${b}): ${add(a, b)} é ${isEven(add(a, b)) ? 'par' : 'ímpar'}`)

const c = 3, d = 7
console.log(`Soma de dois ímpares (${c} + ${d}): ${add(c, d)} é ${isEven(add(c, d)) ? 'par' : 'ímpar'}`)
console.log()

// Cenário do mundo real
console.log('🎓 Cenário do Mundo Real - Notas de Alunos:')
const notas = [85, 92, 78, 96, 88, 91, 87, 94, 89, 93]
console.log(`Notas: [${notas.join(', ')}]`)
console.log(`Média da turma: ${calculateAverage(notas).toFixed(1)}`)
console.log(`Maior nota: ${findMax(notas)}`)
console.log(`Menor nota: ${findMin(notas)}`)

// Verificar se a média está entre a menor e maior nota
const media = calculateAverage(notas)
const maiorNota = findMax(notas)
const menorNota = findMin(notas)

if (media > menorNota && media < maiorNota) {
  console.log('✅ A média está corretamente entre a menor e maior nota')
} else {
  console.log('❌ Erro no cálculo da média')
}
console.log()

// Teste de performance
console.log('⚡ Teste de Performance:')
const inicio = performance.now()
const resultadoFatorial = factorial(100)
const fim = performance.now()
console.log(`factorial(100) = ${resultadoFatorial}`)
console.log(`Tempo de execução: ${(fim - inicio).toFixed(2)}ms`)
console.log()

console.log('🎉 Demonstração concluída!')
console.log('Para executar os testes, use: npm test')
console.log('Para ver a cobertura de testes, use: npm run test:coverage')
