const { default: expect } = require('expect');

const calculator = require('../calculator');

test('adds a + b', () => {
    expect(calculator.sum(4,5)).toBe(9);
})

test('substracts a - b', () => {
    expect(calculator.substract(4,5)).toBe(-1);
})

test('multiplies a * b', () => {
    expect(calculator.multiply(4,5)).toBe(20);
})

test('divides a / b', () => {
    expect(calculator.divide(15,5)).toBe(3);
})

test('Raises to power a ^ b', () => {
    expect(calculator.power(9,2)).toBe(81);
})

