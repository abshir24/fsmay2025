//Create a program that prints out all numbers from 10 to 1 in descending order. (This does not have to be in a function)​
// for(let i = 10; i>0 ;i--){
//     console.log(i)
// }

// //Create a program that prints out all EVEN numbers from 10-1 in descending order. HINT: Use 
// // modulus operator or have your for loop decrement by 2 (This does not have to be in a function)​
// for(let i = 10; i>0 ;i-=2){
//     console.log(i)
// }

//Create a function that accepts 2 numbers as parameters. Return the larger of the two numbers. For example if 
//given 9 and 10 your function should return 10​

function max(a,b){
    if( a > b ){
        return a
    }
    else{
        return b
    } 
}

//Create a function that accepts 2 parameters x and y. This function should print out the product of both 
//numbers (x * y), the quotient of both numbers (x/y), the sum of both numbers (x + y), and the difference of 
// both numbers (x-y).

// function arithmatic (x,y){
//     console.log(x*y)
//     console.log(x/y)
//     console.log(x+y)
//     console.log(x-y)
// }


// Create a program that calculates the product off all of the numbers from 1 to 5 (1*2*3*4*5). 
// The final product for this program should be 120. (This does not have to be a function). 
// Hint: Use a for loop that starts from 1 to 5. Where are you going to save the total?

let total = 1

for(let i = 1;i<=5;i++){
    total *= i 
    // console.log(total)
    // total = total * i
}

//Find the sum: Create a function that accepts an array as a parameter and calculates the sum 
//of all the numbers in the array. Given [1,2,3,4,5], return 15. Hint: Use a for loop that 
//starts from 0 to array.length. Where are you going to save the total sum?

function sum(array){
    let sum = 0

    for(let i = 0; i<array.length;i++){
        sum += array[i]
        // sum = sum + arr[i]
    }
    
    return sum
}


// console.log( sum([1,2,3,4,5]) )

//Create a function that accepts an array as a parameter and prints all of the values in the array 
//but in reverse. Given [1,2,3,4,5] print 5,4,3,2,1. ​

function printVals(array){
    for(let i = array.length - 1;i>=0;i--){
        console.log(array[i])
    }
}

printVals([1,2,3,4,5])


//Create a function that accepts an array as a parameter and multiply all of the values 
//in the array by 2. Given [1,2,3,4,5], return [2,4,6,8,10]. Hint: Use a for loop that starts from 0 to array.length.

function multiplyVals(array){
    for(let i = 0;i<array.length;i++){
        array[i] *= 2
    }

    return array
}

console.log(multiplyVals([1,2,3,4,5]))