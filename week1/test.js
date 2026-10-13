function double(n){
    return n*2;
}

console.log(double(3))
console.log(double(6))


function countVowels(text){
    const vowels ="aeiou";
    const lower = text.toLowerCase()
    let count=0;

    for(let i=0; i<text.length;i++){
        if(vowels.includes(lower[i])){
            count =count+1;
        }
    }
}
return count;

console.log(countVowerls("Apple"));
console.log(countVowels("HELLO WOrld"));
console.log(countVowels("banana"));

function countWords(sentence){
    const sen=sentence.split("");
    let count=0;
    for(let i =0; i<sen.length;i++){
        if(sen[i].length > 0){
            count = count +1;
        }
    }
    return count;
}

console.log(countWords("Kaithod is my cat"));
console.log(countWords("hello world"));
console.log(countWords(""));

