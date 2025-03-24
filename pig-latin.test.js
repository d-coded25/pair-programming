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
  test('Checks if a string starts with a consonant. Remove consonant and any subsequent consonants until a vowel is reached. Append consonants and then append the word "ay"', () => {
    expect(pigLatin('sheffield')).toBe('effieldshay');
  });
  test('Checks if a multiple words with a consonant. Remove consonant and any subsequent consonants until a vowel is reached. Append consonants and then append the word "ay"', () => {
    expect(pigLatin('keep on coding')).toBe('eepkay onway odingcay');
  });
});
