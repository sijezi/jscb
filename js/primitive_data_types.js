/**
 * People toss around terms like object, primitive, and literal.
 * What is the difference be‐ tween the three, and how can you tell
 * which is which?
 */

// literal
const str = 'Hello World'; // the quoted string is a literal

const age = 33; // 33 is the literal

const str2 = String('When NEW keyword is not used, this is a primitive string'); // primitive string

const age2 = Number(33); // when NEW keyword is not used, this is primitive number

var str3 = new String("This is a string object"); // when NEW keyword is used, this is an Object Instance

var age3 = new Number(33); // Number Object instance
