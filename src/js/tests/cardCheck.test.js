import { luhnAlgorithm } from '../cardCheck';

test.each([
  ['4111111111111111', true],
  ['3714496353984314', true],
  ['4111111111111112', false],
  ['qwerty', false],
  ['', false],
  ['0', false],
  ['4111111111111111111111', false],
])(('it should be %s'), (input, expected) => {
  expect(luhnAlgorithm(input)).toBe(expected);
});
