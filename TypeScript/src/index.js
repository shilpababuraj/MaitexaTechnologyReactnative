"use strict";
//-------Type Assignment-------
// There are two main ways TypeScript assigns a type:
// 1. -----Explicit-----  writing out the type:
//Explicit type assignment are easier to read and more intentional.
//------examples-------
// let firstName: string = "Dylan"; // type string
// console.log(typeof firstName);
// let num :number =10.5;
// console.log(typeof num);
// let boo : boolean =false;
// console.log(typeof boo);
// 2. Implicit - TypeScript will "guess" the type, based on the assigned value:
//Note: Having TypeScript "guess" the type of a value is called infer.
// Implicit assignment forces TypeScript to infer the value.
// Implicit type assignment are shorter, faster to type, and often used when developing and testing.
//--------examples--------
// let lastName = "Dylan";
// console.log(typeof lastName);
// let num1  =10.5;
// console.log(typeof num1);
// let boo1  =false;
// console.log(typeof boo1);
// Error In Type Assignment
// let firstName: string = "Dylan"; // type string
// firstName = 33; // attempts to re-assign the value to a different type
//note : JavaScript will not throw an error for mismatched types.
// -----TypeScript Special Types------
//TypeScript has special types that may not refer to any specific type of data.
//----Type: any-----
//     let myVar: any;  // Create an empty "myVar" variable, and disable type checking:
// --- Type: unknown-----
// unknown is a similar, but safer alternative to any.
// ----Type: never----
// never effectively throws an error whenever it is defined.
// let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.
// -----Type: undefined & null------
// undefined and null are types that refer to the JavaScript primitives undefined and null respectively.
// let y: undefined = undefined;
// let z: null = null;
