function pigLatin(str) {
  const idx = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      idx.push(i);
    }
  }

  const words = str.split(' ');

  // checks if the string is empty;
  if (str === '') {
    return '';
  }

  const vowels = 'aeiou';
  const regex = /[^aeiou]/; // Non vowels regex.

  let latinStr = '';

  words.map((word) => {
    // checks if the string starts with a vowel:
    if (vowels.includes(word[0])) {
      latinStr += word + 'way ';
    }

    // checks if the string starts with a consonant:
    if (regex.test(word[0])) {
      let lowestIdx = word.length - 1;

      for (let i = 0; i < vowels.length; i++) {
        if (
          word.indexOf(vowels[i]) !== -1 &&
          word.indexOf(vowels[i]) < lowestIdx
        ) {
          lowestIdx = word.indexOf(vowels[i]);
        }
      }

      const beginChars = word.slice(0, lowestIdx);
      const remainingChars = word.slice(lowestIdx);

      if (words.length > 0) {
        latinStr += remainingChars + beginChars + 'ay ';
      } else {
        latinStr += remainingChars + beginChars + 'ay';
      }
    }
  });

  return latinStr.trimEnd();
}

module.exports = pigLatin;
