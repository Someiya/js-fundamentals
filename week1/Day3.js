function findLongest(sentence) {
  // สร้างฟังก์ชันชื่อ  findLongest รับประโยค
  const word = sentence.split(" "); // แบ่งคำใน sentence ตรงช่องว่าง เก็บไว้ใน word
  let longest = ""; //ให้ longest เก็บคำที่ยาวที่สุด เริ่มจากข้อความว่าง

  for (
    let i = 0;
    i < word.length;
    i++ //ไล่ดูทุกคำใน word
  ) {
    if (word[i].length > longest.length) {
      //ถ้าความยาวของคำที่ตำแหน่ง i มากกว่าใน longest
      longest = word[i]; // ให้เก็บคำนั้นไว้ใน longest
    }
  }
  return longest;
}

console.log(findLongest("I Love Javascript"));
console.log(findLongest("kaithod is my cat"));
console.log(findLongest("blehhhhh bleh"));

function countSpaces(text) {
  //สร้าง function ชื่อ countSpaces รับ text
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      count = count + 1;
    }
  }
  return count;
}

console.log(countSpaces("Hi there"));
console.log(countSpaces("a b c d"));
console.log(countSpaces("hello"));

//นับคำที่ยาวกว่า 2 ตัวอักษร

function countLongWords(sentence) {
  //สร้างฟังก์ชัน
  const words = sentence.split(" "); //แบ่งคำมาเกบใน words
  let count = 0; // เริ่มที 0

  for (let i = 0; i < words.length; i++) {
    //ไล่ดูทุกคำใน words
    if (words[i].length > 3) {
      // ถ้าความยาวคำของตำแหน่ง i มากกว่าา 3
      count = count + 1; //+1
    }
  }
  return count;
}

console.log(countLongWords("I love my cat"));
console.log(countLongWords("today is a sunny day"));
console.log(countLongWords("hello world"));

function describeWord(word) {
  if (word.length < 5) {
    return "short";
  } else {
    return "long";
  }
}

console.log(describeWord("cat"));
console.log(describeWord("elephant"));
console.log(describeWord("hello"));

// 1.บวก 10
function addTen(n) {
  return n + 10;
}
console.log(addTen(5));
console.log(addTen(0));

//2. ทักทาย
function greet(name) {
  return "Hello " + name;
}
console.log(greet("Praewa"));

//3. นับตัว e
function countE(text) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "e") {
      count = count + 1;
    }
  }
  return count;
}
console.log(countE("hello there"));
console.log(countE("elephant"));

//4.นับตัวเลข
function countDigits(text) {
  const digits = "0123456789";
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (digits.includes(text[i])) {
      count = count + 1;
    }
  }
  return count;
}
console.log(countDigits("abc123"));
console.log(countDigits("room 4"));

//5.ให้ส่งคำแรกในประโยค
function firstWord(sentence) {
  const words = sentence.split(" ");
  return words[0];
}
console.log(firstWord("I love cats"));
console.log(firstWord("hello world"));

//6.ส่งตัวอักษรตัวสุดท้ายออกมา
function lastLetter(text) {
  return text[text.length - 1];
}
console.log(lastLetter("cat"));
console.log(lastLetter("hello"));

//7.เช็ด text ว่าเป้นข้อความว่างไหม
function isEmpty(text) {
  if (text.length === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEmpty(""));
console.log(isEmpty("hi"));

//8.นับคำที่ยาวไม่เกิน 3 ตัวอักษร
function countShortWords(sentence) {
  const words = sentence.split(" ");
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length <= 3) {
      count = count + 1;
    }
  }
  return count;
}

console.log(countShortWords("I love my cat"));
console.log(countShortWords("hello world"));

//9. ถามว่ามีคำถาม cat ไหม
function hasCat(sentence) {
  const lower = sentence.toLowerCase();
  return lower.includes("cat");
}

console.log(hasCat("My cat not cute"));
console.log(hasCat("I love cat"));

//10. ส่งความยาวของคำที่ยาวที่สุดออกมาเป็นตัวเลข
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

console.log(longestLength("I love Javascript"));   
console.log(longestLength("cat elephant dog"));
