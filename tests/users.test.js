// You already have the methods imported
const { default: expect } = require('expect');
const {getUser, getUsers} = require('../users');


// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want
test ('Usario por id', () => {
    expect(getUser(1).username).toBe("hpLover4");
});
// READ documentation