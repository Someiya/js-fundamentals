function double(n) {
  return n * 2;
}
console.log(double(3));
console.log(double(6));

function countVowels(text) {
  const vowels = "aeiou";
  const lower = text.toLowerCase()
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(lower[i])) {
      count = count + 1;
    }
  }

  return count;
}

console.log(countVowels("Apple"));
console.log(countVowels("HELLO World"));
console.log(countVowels("banana"));

function countWords(sentence) {
  const sen = sentence.split(" ");
  let count = 0;

  for (let i = 0; i < sen.length; i++) {
    if (sen[i].length > 0) {
      count = count + 1;
    }
  }
  return count;
}

console.log(countWords("Kaithod is my cat"));
console.log(countWords(" hello world "));
console.log(countWords(""));

function findLongest(sentence) {
  //สร้างฟังก์ชั่นหาคำที่ยาวที่สุดในประโยค
  const word = sentence.split(" "); //สร้างตัวแปรเก็บคำที่ถูกแบ่งในประโยค
  let longest = ""; // ให้ค่าคำที่ยาวทีสุดเป็นค่าว่างไว้

  for (let i = 0; i < word.length; i++) {
    // ไล่ดูคำในประโยค
    if (word[i].length > longest.length) {
      // หาว่าคำไหนในประโยคยาวกว่าในค่าlongest
      longest = word[i]; //ให้คำที่ยาวที่สุดอยู่ในตัวแปร longest
    }
  }
  return longest; // ส่งคำที่ยาวที่สุดกลับไปที่ function
}

console.log(findLongest("I Love Javascript"));
console.log(findLongest("cat elephant dog"));
console.log(findLongest("TT"));

function countA(text) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "a") {
      count = count + 1;
    }
  }
  return count;
}

console.log(countA("banana"));
const result = countA("banana");
console.log(result);

