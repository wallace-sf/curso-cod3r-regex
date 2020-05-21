const text = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";

const regexNine = RegExp("9");
console.log("RegExp Methods...");
console.log(regexNine.test(text));
console.log(regexNine.exec(text));

const regexWords = /[a-f]/g;
console.log("String methods... ");
console.log(text.match(regexWords));
console.log(text.search(regexWords));
console.log(text.replace(regexWords, "found"));
console.log(text.split(regexWords));
