import Validator from '../app.js';

test('correct name', () => {
  const name = new Validator('name-123_user');
  expect(name.validateUsername()).toBe(true);
});

test('many numbers', () => {
  const name = new Validator('name-123456_user');
  expect(name.validateUsername()).toBe(false);
});

test('first character is invalid', () => {
  const name = new Validator('1name');
  expect(name.validateUsername()).toBe(false);
});

test('last character is invalid 1', () => {
  const name = new Validator('name-');
  expect(name.validateUsername()).toBe(false);
});

test('last character is invalid 2', () => {
  const name = new Validator('name_');
  expect(name.validateUsername()).toBe(false);
});
