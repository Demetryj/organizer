export const getFirstLetters = name => {
  const firstLetters = name
    .split(' ')
    .reduce((acc, word) => {
      acc.push(word[0]);

      if (acc.length > 2) {
        return acc.splice(0, 2);
      }
      return acc;
    }, [])
    .join('');

  return firstLetters;
};
