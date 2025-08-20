import { describe, it, expect } from 'vitest'
import { findMax, findMin, calculateAverage } from '../index.js'

describe('Array Utilities', () => {
  describe('findMax', () => {
    it('should find the largest number in an array of positive numbers', () => {
      expect(findMax([1, 2, 3, 4, 5])).toBe(5)
      expect(findMax([10, 20, 30, 40, 50])).toBe(50)
      expect(findMax([100, 200, 300])).toBe(300)
    })

    it('should find the largest number in an array with negative numbers', () => {
      expect(findMax([-1, -2, -3, -4, -5])).toBe(-1)
      expect(findMax([-10, -20, -30])).toBe(-10)
      expect(findMax([-100, -200, -300])).toBe(-100)
    })

    it('should find the largest number in a mixed array', () => {
      expect(findMax([-5, 0, 5, 10, -10])).toBe(10)
      expect(findMax([-100, 50, 0, -50, 100])).toBe(100)
    })

    it('should return the only number in a single-element array', () => {
      expect(findMax([5])).toBe(5)
      expect(findMax([-10])).toBe(-10)
      expect(findMax([0])).toBe(0)
    })

    it('should throw an error for empty arrays', () => {
      expect(() => findMax([])).toThrow('Array cannot be empty')
    })

    it('should throw an error for parameters that are not arrays', () => {
      expect(() => findMax('1,2,3')).toThrow('Parameter must be an array')
      expect(() => findMax(123)).toThrow('Parameter must be an array')
      expect(() => findMax(null)).toThrow('Parameter must be an array')
      expect(() => findMax(undefined)).toThrow('Parameter must be an array')
    })

    it('should throw an error for arrays with non-numeric elements', () => {
      expect(() => findMax([1, 2, '3', 4])).toThrow('All elements of the array must be numbers')
      expect(() => findMax([1, null, 3])).toThrow('All elements of the array must be numbers')
      expect(() => findMax([1, undefined, 3])).toThrow('All elements of the array must be numbers')
      expect(() => findMax([1, [2], 3])).toThrow('All elements of the array must be numbers')
    })
  })

  describe('findMin', () => {
    it('should find the smallest number in an array of positive numbers', () => {
      expect(findMin([1, 2, 3, 4, 5])).toBe(1)
      expect(findMin([10, 20, 30, 40, 50])).toBe(10)
      expect(findMin([100, 200, 300])).toBe(100)
    })

    it('should find the smallest number in an array with negative numbers', () => {
      expect(findMin([-1, -2, -3, -4, -5])).toBe(-5)
      expect(findMin([-10, -20, -30])).toBe(-30)
      expect(findMin([-100, -200, -300])).toBe(-300)
    })

    it('should find the smallest number in a mixed array', () => {
      expect(findMin([-5, 0, 5, 10, -10])).toBe(-10)
      expect(findMin([-100, 50, 0, -50, 100])).toBe(-100)
    })

    it('should return the only number in a single-element array', () => {
      expect(findMin([5])).toBe(5)
      expect(findMin([-10])).toBe(-10)
      expect(findMin([0])).toBe(0)
    })

    it('should throw an error for empty arrays', () => {
      expect(() => findMin([])).toThrow('Array cannot be empty')
    })

    it('should throw an error for parameters that are not arrays', () => {
      expect(() => findMin('1,2,3')).toThrow('Parameter must be an array')
      expect(() => findMin(123)).toThrow('Parameter must be an array')
      expect(() => findMin(null)).toThrow('Parameter must be an array')
      expect(() => findMin(undefined)).toThrow('Parameter must be an array')
    })

    it('should throw an error for arrays with non-numeric elements', () => {
      expect(() => findMin([1, 2, '3', 4])).toThrow('All elements of the array must be numbers')
      expect(() => findMin([1, null, 3])).toThrow('All elements of the array must be numbers')
      expect(() => findMin([1, undefined, 3])).toThrow('All elements of the array must be numbers')
    })
  })

  describe('calculateAverage', () => {
    it('should calculate the average of an array of positive numbers', () => {
      expect(calculateAverage([1, 2, 3, 4, 5])).toBe(3)
      expect(calculateAverage([10, 20, 30])).toBe(20)
      expect(calculateAverage([100, 200, 300, 400])).toBe(250)
    })

    it('should calculate the average of an array with negative numbers', () => {
      expect(calculateAverage([-1, -2, -3, -4, -5])).toBe(-3)
      expect(calculateAverage([-10, -20, -30])).toBe(-20)
      expect(calculateAverage([-100, -200, -300])).toBe(-200)
    })

    it('should calculate the average of a mixed array', () => {
      expect(calculateAverage([-5, 0, 5, 10, -10])).toBe(0)
      expect(calculateAverage([-100, 50, 0, -50, 100])).toBe(0)
    })

    it('should calculate the average of an array with decimal numbers', () => {
      expect(calculateAverage([1.5, 2.5, 3.5])).toBeCloseTo(2.5, 5)
      expect(calculateAverage([0.1, 0.2, 0.3, 0.4])).toBeCloseTo(0.25, 5)
    })

    it('should return the only number in a single-element array', () => {
      expect(calculateAverage([5])).toBe(5)
      expect(calculateAverage([-10])).toBe(-10)
      expect(calculateAverage([0])).toBe(0)
    })

    it('should throw an error for empty arrays', () => {
      expect(() => calculateAverage([])).toThrow('Array cannot be empty')
    })

    it('should throw an error for parameters that are not arrays', () => {
      expect(() => calculateAverage('1,2,3')).toThrow('Parameter must be an array')
      expect(() => calculateAverage(123)).toThrow('Parameter must be an array')
      expect(() => calculateAverage(null)).toThrow('Parameter must be an array')
      expect(() => calculateAverage(undefined)).toThrow('Parameter must be an array')
    })

    it('should throw an error for arrays with non-numeric elements', () => {
      expect(() => calculateAverage([1, 2, '3', 4])).toThrow('All elements of the array must be numbers')
      expect(() => calculateAverage([1, null, 3])).toThrow('All elements of the array must be numbers')
      expect(() => calculateAverage([1, undefined, 3])).toThrow('All elements of the array must be numbers')
    })
  })
})
