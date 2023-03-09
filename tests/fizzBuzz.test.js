const { default: expect } = require('expect');

const fizzBuzz = require('../fizzBuzz');

test('Valor',() => {
    expect(fizzBuzz(3)).toBe("Fizz");
})

test('Valor',() => {
    expect(fizzBuzz(5)).toBe("Buzz");
})

test('Valor',() => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
})


