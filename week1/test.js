function countDigits(text) {
  const digits = "0123456789";
  let count = 0;
  for (let i = 0; i < text.length; i++)
    if (digits.includes(text[i])) {
      count = count + 1;
    }
  return count;
}

console.log(countDigits("abc123"));

function hasCat(text) {
  const lower = text.toLowerCase();
  return lower.includes("cat");
}

console.log(hasCat("My cat is annoying at night"));

function longestLength(sentence) {
  const words = sentence.split(" ");
  let max = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > max) {
      max = words[i].length;
    }
  }

  return max;
}

console.log(longestLength("I Love Javascript"));
console.log(longestLength("cat elephant dogs"));

function countSpaces(text) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      count = count + 1;
    }
  }
  return count;
}
console.log(countSpaces("hi three"));
console.log(countSpaces("a b c d"));
console.log(countSpaces("hello"));

function isEmpty(text) {
  if (text.length === 0) {
    return true;
  } else return false;
}
console.log(isEmpty(""));     
console.log(isEmpty("hi"));