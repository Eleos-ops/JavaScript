function sliceFunction(str) {
  let len = str.length;
  let revStr = "";
  for (let i = len; i > 0; i--) {
    revStr = revStr + str.slice(i - 1, i);
  }
  return revStr;
}

function findTheRestWord(str, wantedWord) {
  let x = str.length - word.length;
  let y = wantedWord.length;

  for (let i = 0; i <= x; i++) {
    if (str.substring(i, y + i) == wantedWord) {
      return str.substring(i);
    }
  }
}

function replaceSubstring(originalStr, newStr, strToChange) {
  let strSize = originalStr.length - strToChange.length;
  let wordSize = strToChange.length;
  for (let i = 0; i <= strSize; i++) {
    if (originalStr.substring(i, wordSize + i) == strToChange) {
      if (i + 1 == strSize) {
        return originalStr.substring(0, i) + newStr;
      } else {
        return (
          originalStr.substring(0, i) +
          newStr +
          originalStr.substring(i + wordSize)
        );
      }
    }
  }
}

let str = "JavaScript is a versatile programming language",
  word = "versatile",
  newStr = "multi-purpose";

console.log(sliceFunction(str));
console.log(findTheRestWord(str, word));
console.log(replaceSubstring(str, newStr, word));
