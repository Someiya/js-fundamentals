//Array

const scores = [90, 75, 88, 62];

for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}

const fruits = ["apple", "banana"];
fruits.push("kiwi");
console.log(fruits);
console.log(fruits.length);

function sumAll(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}

console.log(sumAll([1, 2, 3]));
console.log(sumAll([10, 20, 30, 40]));
console.log(sumAll([5]));

function findAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum / numbers.length;
}

console.log(findAverage([10, 20, 30]));
console.log(findAverage([1, 2, 3, 4]));

const menus = ["กะเพรา", "ข้าวมันไก่ก", "ส้มตำ", "ราเมง"];
const index = Math.floor(Math.random() * menus.length);
console.log("วันนี้กิน " + menus[index]);
