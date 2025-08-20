import { describe, it, expect } from 'vitest'
import { isEven, isPrime, factorial, power } from '../index.js'

describe('Number Utilities', () => {
  describe('isEven', () => {
    it('should return true for even numbers', () => {
      expect(isEven(2)).toBe(true)
      expect(isEven(4)).toBe(true)
      expect(isEven(0)).toBe(true)
      expect(isEven(-2)).toBe(true)
      expect(isEven(-10)).toBe(true)
    })

    it('should return false for odd numbers', () => {
      expect(isEven(1)).toBe(false)
      expect(isEven(3)).toBe(false)
      expect(isEven(-1)).toBe(false)
      expect(isEven(-7)).toBe(false)
    })

    it('should throw error for invalid parameters', () => {
      expect(() => isEven('2')).toThrow('Parameter must be a number')
      expect(() => isEven(null)).toThrow('Parameter must be a number')
      expect(() => isEven(undefined)).toThrow('Parameter must be a number')
      expect(() => isEven([])).toThrow('Parameter must be a number')
    })
  })

  describe('isPrime', () => {
    it('should return true for prime numbers', () => {
      expect(isPrime(2)).toBe(true)
      expect(isPrime(3)).toBe(true)
      expect(isPrime(5)).toBe(true)
      expect(isPrime(7)).toBe(true)
      expect(isPrime(11)).toBe(true)
      expect(isPrime(13)).toBe(true)
      expect(isPrime(17)).toBe(true)
      expect(isPrime(19)).toBe(true)
      expect(isPrime(23)).toBe(true)
      expect(isPrime(29)).toBe(true)
    })

    it('should return false for non-prime numbers', () => {
      expect(isPrime(1)).toBe(false)
      expect(isPrime(4)).toBe(false)
      expect(isPrime(6)).toBe(false)
      expect(isPrime(8)).toBe(false)
      expect(isPrime(9)).toBe(false)
      expect(isPrime(10)).toBe(false)
      expect(isPrime(12)).toBe(false)
      expect(isPrime(15)).toBe(false)
      expect(isPrime(21)).toBe(false)
      expect(isPrime(25)).toBe(false)
    })

    it('should return false for negative numbers', () => {
      expect(isPrime(-1)).toBe(false)
      expect(isPrime(-2)).toBe(false)
      expect(isPrime(-10)).toBe(false)
    })

    it('should throw error for invalid parameters', () => {
      expect(() => isPrime('5')).toThrow('Parameter must be a number')
      expect(() => isPrime(null)).toThrow('Parameter must be a number')
      expect(() => isPrime(undefined)).toThrow('Parameter must be a number')
    })
  })

  describe('factorial', () => {
    it('should calculate factorial of positive numbers', () => {
      expect(factorial(0)).toBe(1)
      expect(factorial(1)).toBe(1)
      expect(factorial(2)).toBe(2)
      expect(factorial(3)).toBe(6)
      expect(factorial(4)).toBe(24)
      expect(factorial(5)).toBe(120)
      expect(factorial(6)).toBe(720)
    })

    it('should throw error for negative numbers', () => {
      expect(() => factorial(-1)).toThrow('Factorial is not defined for negative numbers')
      expect(() => factorial(-5)).toThrow('Factorial is not defined for negative numbers')
      expect(() => factorial(-10)).toThrow('Factorial is not defined for negative numbers')
    })

    it('should throw error for invalid parameters', () => {
      expect(() => factorial('5')).toThrow('Parameter must be a number')
      expect(() => factorial(null)).toThrow('Parameter must be a number')
      expect(() => factorial(undefined)).toThrow('Parameter must be a number')
    })
  })

  describe('power', () => {
    it('should calculate powers with positive exponents', () => {
      expect(power(2, 0)).toBe(1)
      expect(power(2, 1)).toBe(2)
      expect(power(2, 2)).toBe(4)
      expect(power(2, 3)).toBe(8)
      expect(power(3, 2)).toBe(9)
      expect(power(5, 3)).toBe(125)
    })

    it('should calculate powers with negative exponents', () => {
      expect(power(2, -1)).toBe(0.5)
      expect(power(2, -2)).toBe(0.25)
      expect(power(3, -2)).toBeCloseTo(0.1111111111111111, 10)
      expect(power(5, -3)).toBe(0.008)
    })

    it('should calculate powers with negative base', () => {
      expect(power(-2, 2)).toBe(4)
      expect(power(-2, 3)).toBe(-8)
      expect(power(-3, 2)).toBe(9)
      expect(power(-3, 3)).toBe(-27)
    })

    it('should calculate powers with zero base', () => {
      expect(power(0, 1)).toBe(0)
      expect(power(0, 5)).toBe(0)
      expect(power(0, 0)).toBe(1)
    })

    it('should throw error for invalid parameters', () => {
      expect(() => power('2', 3)).toThrow('Both parameters must be numbers')
      expect(() => power(2, '3')).toThrow('Both parameters must be numbers')
      expect(() => power(null, 3)).toThrow('Both parameters must be numbers')
      expect(() => power(2, null)).toThrow('Both parameters must be numbers')
    })
  })
})
