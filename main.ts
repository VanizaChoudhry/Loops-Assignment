//---------------------------LOOPS ASSIGNMENTS----------------------------------
//=========================1. Creating a lesson plan (Using forloop)...======================

const myWork :  {name: string;  status: boolean} [] = []

for(let i=1; i<=10; i++){
    let lesson = {
     name: `Lesson ${i}`,
     status: i % 2 === 1 ? true : false 
     
    }
    if (i %2 ===1){
        console.log("The lesson is odd");
    }
    else{
        console.log("The lesson is even");
        
    }
    myWork.push(lesson)
    
};
console.log(myWork);

// ==========================2. Guessing Game (using WHILE LOOP)==============================

let maxValue= 7;
const randomNumber = Math.floor(Math.random() * maxValue) +1
console.log(randomNumber);
let numberArray : number[] = [1,2,3,4,5,6,7]
let indexNumber: number = 0;
while(indexNumber< numberArray.length){
    let currentGuess = numberArray[indexNumber]
    if(currentGuess === randomNumber){
        console.log("Congratulation :) you guess the correct number");
        
    }
    else if (currentGuess < randomNumber){
    console.log("Your Guess is too low! :(");
    
    }
    else {
        console.log("Your Guess is too high! ;)");
        
    }
    indexNumber++;
    
}
//======================= 3. Counter Incrementer (Using do while loop )========================

let  counter: number = 0;
let step: number = 1;

do {
    console.log(counter);
    counter += step
    
}while(counter < 100);


//========================== 4.Exploring Objects with for...in Loop===================================

let myObject = {
    item1: "Mobile",
    item2: "charger",
    item3: "airpods",
}
for(let X in myObject){
    console.log(`${X}: ${myObject[X]}`);
    
}

// ========================5.Exploring Arrays with Loops(USING LOOP )====================================

const myArray : number[]= []
for(let i=1; i<= 10; i++){
    myArray.push(i)
    
}
console.log(myArray);
for(let i=0; i<myArray.length; i++){
    console.log(`Index:  ${i}, Value: ${myArray[i]}`);
    
}
for(let x of myArray ){
    console.log(`Value: ${x}`);
    
}


