import { describe, it, expect } from 'vitest'
import { add, subtract, multiply, divide } from '../index.js'

describe('Basic Math Functions', () => {
  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5)
      expect(add(10, 20)).toBe(30)
      expect(add(0, 5)).toBe(5)
    })

    it('should add negative numbers', () => {
      expect(add(-2, -3)).toBe(-5)
      expect(add(-10, 5)).toBe(-5)
      expect(add(5, -3)).toBe(2)
    })

    it('should add decimal numbers', () => {
      expect(add(2.5, 3.5)).toBe(6)
      expect(add(0.1, 0.2)).toBeCloseTo(0.3, 5)
    })

    it('should throw error for invalid parameters', () => {
      expect(() => add('2', 3)).toThrow('Both parameters must be numbers')
      expect(() => add(2, '3')).toThrow('Both parameters must be numbers')
      expect(() => add(null, 3)).toThrow('Both parameters must be numbers')
      expect(() => add(undefined, 3)).toThrow('Both parameters must be numbers')
    })
  })

  describe('subtract', () => {
    it('should subtract two positive numbers', () => {
      expect(subtract(5, 3)).toBe(2)
      expect(subtract(10, 5)).toBe(5)
      expect(subtract(0, 5)).toBe(-5)
    })

    it('should subtract negative numbers', () => {
      expect(subtract(-2, -3)).toBe(1)
      expect(subtract(-10, 5)).toBe(-15)
      expect(subtract(5, -3)).toBe(8)
    })

    it('should subtract decimal numbers', () => {
      expect(subtract(5.5, 3.2)).toBeCloseTo(2.3, 5)
      expect(subtract(0.3, 0.1)).toBeCloseTo(0.2, 5)
    })

    it('should throw error for invalid parameters', () => {
      expect(() => subtract('5', 3)).toThrow('Both parameters must be numbers')
      expect(() => subtract(5, '3')).toThrow('Both parameters must be numbers')
    })
  })

  describe('multiply', () => {
    it('should multiply two positive numbers', () => {
      expect(multiply(2, 3)).toBe(6)
      expect(multiply(10, 5)).toBe(50)
      expect(multiply(0, 5)).toBe(0)
    })

    it('should multiply negative numbers', () => {
      expect(multiply(-2, -3)).toBe(6)
      expect(multiply(-10, 5)).toBe(-50)
      expect(multiply(5, -3)).toBe(-15)
    })

    it('should multiply decimal numbers', () => {
      expect(multiply(2.5, 3)).toBe(7.5)
      expect(multiply(0.1, 0.2)).toBeCloseTo(0.02, 5)
    })

    it('should throw error for invalid parameters', () => {
      expect(() => multiply('2', 3)).toThrow('Both parameters must be numbers')
      expect(() => multiply(2, '3')).toThrow('Both parameters must be numbers')
    })
  })

  describe('divide', () => {
    it('should divide two positive numbers', () => {
      expect(divide(6, 2)).toBe(3)
      expect(divide(10, 5)).toBe(2)
      expect(divide(0, 5)).toBe(0)
    })

    it('should divide negative numbers', () => {
      expect(divide(-6, -2)).toBe(3)
      expect(divide(-10, 5)).toBe(-2)
      expect(divide(10, -2)).toBe(-5)
    })

    it('should divide decimal numbers', () => {
      expect(divide(7.5, 2.5)).toBe(3)
      expect(divide(0.6, 0.2)).toBe(3)
    })

    it('should throw error for division by zero', () => {
      expect(() => divide(5, 0)).toThrow('Division by zero is not allowed')
      expect(() => divide(-10, 0)).toThrow('Division by zero is not allowed')
    })

    it('should throw error for invalid parameters', () => {
      expect(() => divide('6', 2)).toThrow('Both parameters must be numbers')
      expect(() => divide(6, '2')).toThrow('Both parameters must be numbers')
    })
  })
})
