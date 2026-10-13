

//นับสระใน apple orange

//นับสระกับตัวที่ไม่ใช่สระใน "hello" 
const vowels ="aeiou"
const  a ="hello"
let b =0;
let c =0;
for(let i =0;i<a.length;i++){
    if(vowels.includes(a[i])){
        b=b+1;
    } else{
        c=c+1;
    }      
}

console.log(b);
console.log(c);


//นับประโยค

const marks = ".!?"
const text ="Hi! How are you? I am fine."
let count =0;

for(let i=0;i<text.length;i++){
    if(marks.includes(text[i])){
        count= count+1;
    }
}

console.log(count);

function sayHi(name){
    console.log("Hi"+name);
}

sayHi("Praewa")
sayHi("Rally")


function double(n) {
    return n*2;
}

console.log(double(3));
console.log(double(10));

