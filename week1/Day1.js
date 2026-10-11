//เริ่มต้น ตั้งตัวนับไว้ที่ 0
// ดูทีละตัว ถ้าไม่ใช่ช่องว่างให้ เช็คว่าคืออะไรถ้าเป็นตัวอักษรให้นับต่อและ+1 ถ้าเป็นช่องว่างให้ไม่บวก
// จบแล้วแสดงว่านับได้กี่ตัว

const word ="Kunyawee Muangae";
let count = 0;

for (let i=0;i<word.length; i++){
    if(word[i]!==" "){
        count = count+1 ;
    }
} 
console.log(count);

const vowels = "aeiou";
const word = "hello world";
let count =0;

for(let i = 0; i<word.length; i++){
    if (vowels.includes(word[i])){
        count = count+1 ;
    }
}
console.log(count)
