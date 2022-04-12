import { getPaySystem } from '../paySystemCheck';

test.each([
  ['2111111111111111', 'mir'],
  ['3111111111111111', 'amex'],
  ['4111111111111111', 'visa'],
  ['5111111111111111', 'master'],
  ['6111111111111111', 'unknown'],
])(('it should be %s'), (input, expected) => {
  expect(getPaySystem(input)).toBe(expected);
});
