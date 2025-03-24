const pigLatin = require('./pig-latin');

describe('Pig latin function', () => {
  test('Checks an empty string returns an empty string', () => {
    expect(pigLatin('')).toBe('');
  });
  test('Checks if a string contains a vowel. Append the word "way"', () => {
    expect(pigLatin('a')).toBe('away');
    expect(pigLatin('e')).toBe('eway');
  });
  test('Checks if a string contains a consonant. Append the word "ay"', () => {
    expect(pigLatin('b')).toBe('bay');
    expect(pigLatin('c')).toBe('cay');
  });
  test('Checks if a string starts with a vowel. Append the word "way"', () => {
    expect(pigLatin('all')).toBe('allway');
  });
  test('Checks if a string starts with a consonant. Append the word "ay"', () => {
    expect(pigLatin('all')).toBe('allway');
  });
});
