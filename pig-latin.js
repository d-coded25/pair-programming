function pigLatin(str) {
  // checks if the string is empty;
  if (str === '') {
    return '';
  }

  const vowels = 'aeiou';
  const regex = /[^aeiou]/; // Non vowels regex.

  let latinStr = '';

  // checks if the string starts with a vowel:
  if (vowels.includes(str[0])) {
    console.log('Starts with a vowel');
    latinStr += str + 'way';
  }

  // checks if the string starts with a consonant:
  if (regex.test(str[0])) {
    console.log('Starts with a consonant');
    latinStr += str + 'ay';
  }

  return latinStr;
}

module.exports = pigLatin;
