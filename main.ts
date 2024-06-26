//write a typescript function that uses async/await 

import { resolve } from "path";

//to wait for 2 second and then return a string "hello world"
function newmessage(delay:number){
return new Promise(resolve=> setTimeout(resolve,delay));
}

async function printmessage(){
    await newmessage(2000);
    console.log("hello world")
}
printmessage();

//Question 2: Create a TypeScript function that takes a callback function as an 
//argument and uses setTimeout to call the callback after 1 second.

function callback (mytask:string,delay:number,callback:()=>void){
    setTimeout(()=>{
        console.log(mytask)


    }, delay)
}
callback("i am callback",1000,()=>{});


//Question 3: Write a TypeScript function that returns a Promise that resolves with the value
// "Resolved!" after 3 seconds.
 function problem(){
    let Promises :any= new Promise((resolve,reject)=>{
        setTimeout(() => {
            
    
            resolve("resolved");
        }, 3000);
    });
return Promises ;
}
problem()
.then((res)=> console.log(res))
.catch((err)=>console.log(err));

//Question 4: Create a TypeScript function that uses async/await to wait for
 //two Promises to  and then returns their results as an array.

// Define two promises
let promise1: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
        console.log("resolved 1");
        resolve("Promise 1 resolved");
    }, 2000);
});

let promise2: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
        console.log("resolved 2");
        resolve("Promise 2 resolved");
    }, 3000);
});

// Async function to wait for both promises
async function waitFromPromise(): Promise<string[]> {
    let awaitPromise1 = await promise1;
    let awaitPromise2 = await promise2;
    let result = [awaitPromise1, awaitPromise2];
    console.log(result)
    return result
}
waitFromPromise()


//Question 5: Write a TypeScript function that uses async/await to wait for 
//a Promise to resolve and then logs the result to the console.

 async function tsPromise(){
 await new Promise((resolve,reject)=>{
 resolve("resolved")
 })
 .then((res)=>{
 console.log(res)
 }) 
 .catch((err)=>{
 console.log(err)
 })
 }
 tsPromise();



//Question 6: Write a TypeScript function that uses async/await to 
//wait for a Promise to reject and then logs the error to the console.


async function fwpromise () {
    await new Promise((resolve,reject)=>{
        reject("reject")
    })
    .then((res)=>{
        console.log(res)
        })
.catch((err)=>{
console.log(err)
})
 
}
fwpromise();
//Question 7: Create a TypeScript function that takes a number as an argument and returns a Promise 
//that resolves with the square of the number after a delay of 1 second.


function square (size:number):Promise <number>{
let promises: Promise<number> = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(size**2)
    }, 1000);
})
return promises
square(2).then((res)=>{
    console.log(res);
});

}



//Question 8: Write a TypeScript function that uses async/await to wait for an array 
// of Promises to resolve and then returns an array of their results.
function arryfunc (num:number):Promise<string>{
return  new Promise((resolve,reject)=>{
    resolve(`problem${num}resolved`);
})
}
async function newfunc(respromise:Promise<string>[]

){
let allpromises = await Promise.all(respromise)
console.log(allpromises)
return allpromises;
}
let add = newfunc([
    arryfunc(1),
    arryfunc(2),
    arryfunc(3),
    arryfunc(4),
    arryfunc(5),
]);

//Question 9: Create a TypeScript function that uses 
 //to call a function repeatedly every 2 seconds.


 function repeated(){
    
 function callrepeated(){
    console.log("Hello typescript world")
    setTimeout(callrepeated,2000)
    
 }
 callrepeated();

 }
 repeated();
//Question 10: Write a TypeScript function that uses async/await to wait 
//for a Promise to resolve and then returns a new Promise that resolves with the result multiplied by 2.
const arrowfunc = new Promise<number>((resolve)=>
    setTimeout(() => {
        resolve(4)
    }, 1000)

);
async function  givepromise ( promise:Promise<number>): Promise <number>{
let result = await promise;
return new Promise((resolve,reject)=>resolve(result*2));
}