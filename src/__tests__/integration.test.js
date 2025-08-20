import { describe, it, expect } from 'vitest'
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
} from '../index.js'

describe('Integration Tests', () => {
  describe('Complex Mathematical Calculations', () => {
    it('should calculate complex mathematical expressions', () => {
      const result1 = subtract(multiply(add(2, 3), 4), divide(10, 2))
      expect(result1).toBe(15)

      const result2 = multiply(add(power(5, 2), 3), 2)
      expect(result2).toBe(56)

      const result3 = divide(add(factorial(4), 10), 2)
      expect(result3).toBe(17)
    })

    it('should verify mathematical properties', () => {
      expect(isEven(add(2, 4))).toBe(true)
      expect(isEven(add(10, 20))).toBe(true)

      expect(isEven(add(1, 3))).toBe(true)
      expect(isEven(add(5, 7))).toBe(true)

      expect(isEven(add(2, 3))).toBe(false)
      expect(isEven(add(10, 5))).toBe(false)
    })

    it('should work with arrays of mathematical results', () => {
      const powers = [1, 2, 3, 4, 5].map(n => power(2, n))
      expect(powers).toEqual([2, 4, 8, 16, 32])

      const allEven = powers.every(p => isEven(p))
      expect(allEven).toBe(true)

      expect(findMax(powers)).toBe(32)
      expect(findMin(powers)).toBe(2)
      expect(calculateAverage(powers)).toBe(12.4)
    })
  })

  describe('Validations and Error Handling', () => {
    it('should validate inputs in cascade', () => {
      const invalidInputs = ['string', null, undefined, [], {}]

      invalidInputs.forEach(input => {
        expect(() => add(input, 5)).toThrow()
        expect(() => isEven(input)).toThrow()
        expect(() => factorial(input)).toThrow()
      })
    })

    it('should handle edge cases', () => {
      expect(() => factorial(1000)).not.toThrow()
      
      expect(() => findMax([])).toThrow('Array cannot be empty')
      expect(() => findMin([])).toThrow('Array cannot be empty')
      expect(() => calculateAverage([])).toThrow('Array cannot be empty')
    })
  })

  describe('Mathematical Properties', () => {
    it('should verify commutative properties', () => {
      expect(add(5, 3)).toBe(add(3, 5))
      expect(add(-10, 20)).toBe(add(20, -10))

      expect(multiply(4, 7)).toBe(multiply(7, 4))
      expect(multiply(-5, 3)).toBe(multiply(3, -5))
    })

    it('should verify distributive properties', () => {
      const a = 2, b = 3, c = 4
      const left = multiply(a, add(b, c))
      const right = add(multiply(a, b), multiply(a, c))
      expect(left).toBe(right)
    })

    it('should verify mathematical identities', () => {
      expect(power(5, 0)).toBe(1)
      expect(power(-10, 0)).toBe(1)
      expect(power(0.5, 0)).toBe(1)

      expect(power(5, 1)).toBe(5)
      expect(power(-10, 1)).toBe(-10)
      expect(power(0, 1)).toBe(0)
    })
  })

  describe('Real World Scenarios', () => {
    it('should calculate student grades statistics', () => {
      const grades = [85, 92, 78, 96, 88, 91, 87, 94, 89, 93]
      
      const average = calculateAverage(grades)
      const highest = findMax(grades)
      const lowest = findMin(grades)
      
      expect(average).toBeCloseTo(89.3, 1)
      expect(highest).toBe(96)
      expect(lowest).toBe(78)
      
      expect(average).toBeGreaterThan(lowest)
      expect(average).toBeLessThan(highest)
    })

    it('should calculate compound interest', () => {
      const principal = 1000
      const rate = 0.05
      const years = 3
      
      const amount = multiply(principal, power(add(1, rate), years))
      
      expect(amount).toBeCloseTo(1157.63, 2)
    })

    it('should check prime numbers in a sequence', () => {
      const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
      const primes = numbers.filter(n => isPrime(n))
      
      expect(primes).toEqual([2, 3, 5, 7, 11, 13])
      expect(primes.length).toBe(6)
    })
  })
})
