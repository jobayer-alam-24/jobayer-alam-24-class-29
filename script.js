// Given an array of numbers, calculate the sum of all the elements using a forEach loop.
const sumOfArray = () => {
    let sumInitiate = 0; 
    let myArray = [2, 3, 5, 7, 9, 11, 13, 17, 19];
    myArray.forEach(prime => sumInitiate += prime);
    
    return 'Sumation: ' + sumInitiate;
}
console.log(sumOfArray());

// Write a program that prints all even numbers from 0 to 20 using a while loop.
const evenZeroToTwenty = () => {
    let i = 0;
    while(i <= 20){
        if(i % 2 === 0){
            console.log(i);
        }
        i++;
    }
    return i;
}
console.log(evenZeroToTwenty());
// Create a program that prompts the user to enter a number greater than 100. If the entered number is less than or equal to 100, keep prompting the user until a valid number is entered, using a do while loop.

let number;
do {
    number = parseInt(prompt("Enter a number greater than 100: "));
    if(number > 100){
        alert("Thank You!");
    }
} while (number <= 100 || isNaN(number));

// Given an array of strings, capitalize the first letter of each string using a forEach loop and store the modified strings in a new array.
function capitalize(){
    let newArray = [];
    let myArray = ['rahim', 'karim', 'rony', 'bony'];
    myArray.forEach(ele => {
        let capitalized = ele.charAt(0).toUpperCase() + ele.slice(1);
        newArray.push(capitalized);
    });
    
    return newArray;
}
console.log(capitalize());

// function 40% discount 
function calculateDiscount(originalPrice, discount) {
    let discountAmount = originalPrice * (discount / 100);
    let discountedPrice = originalPrice - discountAmount;
    return discountedPrice;
}
let price = parseInt(prompt("Enter the Original price: "));
let dis = parseInt(prompt("Enter the Discount: "));
let discountedPrice = calculateDiscount(price, dis);
console.log("Discounted Price: " + discountedPrice);
