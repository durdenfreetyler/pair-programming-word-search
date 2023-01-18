const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));

  const verticalJoin = letters[0].map((_, colIndex) =>
    letters.map((row) => row[colIndex]).join("")
  );

  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

const result = wordSearch(
  [
    ["A", "W", "C", "F", "Q", "U", "A", "L"],
    ["S", "E", "I", "N", "F", "E", "L", "D"],
    ["C", "F", "C", "F", "Q", "U", "A", "L"],
    ["A", "M", "J", "T", "E", "V", "R", "G"],
    ["T", "H", "C", "S", "Y", "E", "R", "L"],
    ["B", "F", "R", "E", "N", "E", "Y", "B"],
    ["U", "B", "T", "W", "A", "P", "A", "I"],
    ["O", "D", "C", "A", "K", "U", "A", "S"],
    ["E", "Z", "K", "F", "Q", "U", "A", "L"],
  ],
  "CAT"
);

module.exports = wordSearch;
