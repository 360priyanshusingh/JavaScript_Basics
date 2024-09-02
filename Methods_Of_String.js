// Methods of Strings:-

// 1 substring() :- JavaScript substring() method returns the part of the given string from the start index to the end index.
//  Indexing starts from zero (0).
// example :-
let string="Priyanshu Sisodiya";
let part=string.substring(0,9);
console.log(part);

// 2  substr() :- This method returns the specified number of characters from the specified index from the given string.
//  It extracts a part of the original string.
//  example :-
let str="Priyanshu Sisodiya"
let prt=str.substr(0,4);
console.log(prt);

// 3 replace() :-replaces a part of the given string with another string or a regular expression. 
// The original string will remain unchanged.
// example :-
let str1="Priyanshu Sisodiya";
console.log(str1);
let ans=str1.replace("Priyanshu","Singh");
console.log(ans);

// 3 replaceAll() :- returns a new string after replacing all the matches of a string with a specified string or a regular expression.
//  The original string is left unchanged after this operation.
// example:-
let str2="Priyanshu,Sisodiya,priyanshu,Priyanshu";
console.log(str2);
let ans2=str2.replaceAll("Priyanshu","Singh");
console.log(ans2);

// 4 toUpperCase() : It will convert string into a uppercase
// example :-
let str3="Priyanshu,Sisodiya,priyanshu,Priyanshu";
console.log(str3.toUpperCase());

// 5 toLowerCase(): it will conert in lower case 
// example :-
let str4="Priyanshu,Sisodiya,priyanshu,Priyanshu";
console.log(str4.toLowerCase());

// 6 trim() :-  is used to remove either white spaces from the given string. This method returns a new string with removed white spaces.
//  This method is called on a String object. This method doesn’t accept any parameter. and  trimEnd and trimStart 
//example:-
let str5="   iasjdjfjjd   ";
console.log(str5.trim());


// 7 padEnd() :-pad a string with another string until it reaches the given length. 
// The padding is applied from the right end of the string. and padStart (padding with right side).
//example:-
let stone = "Soul";
let stone1 = stone.padEnd(40, " Power");
let stone2= stone.padStart(40, " Power");
console.log(stone);
console.log(stone1);
console.log(stone2); 
console.log(stone2.length);

// 8 slice() :- 
let str6="jdscjs hcbvjsd hjcxbjhb"
console.log(str6.slice(0,10))










