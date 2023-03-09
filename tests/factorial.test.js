const { default: expect } = require('expect');

const factorial = require('../factorial');

test('factorial n',() => {
    expect(factorial(4)).toBe(24);
})

test('factorial n',() => {
    expect(factorial(5)).toBe(120);
})