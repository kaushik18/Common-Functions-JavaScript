The purpose of this program is to implement the following functions in JavaScript.

1) EvenOdd

Write a recursive function that determines if a number is even or odd. 
Your function should take in one integer input and return if it is odd or even. 
You must use recursion. Do NOT use the Modulus (%) operator.

console.log(EvenOdd(10)); Even
console.log(EvenOdd(255)); Odd
console.log(EvenOdd("One")); Not a valid number
console.log(EvenOdd(0)); Even
  
2) MyMathFunction
 
Write a function that takes in two numbers and a function name. 
The function should call the function name in the parameter passing it the two number to perform a math operation and 
returning the result. Your MyMathFunction should be able to handle 4 different math operations (add, subtract, divide, and
multiply). You must write 5 functions to complete this assignment correctly (MyMathFunction, Add, Subtract, Multiply, Divide). 
Hint: Do not pass the function name as a string.

console.log(MyMathFunction(10, 10, Multiply)); 100
console.log(MyMathFunction(50, 10, Divide)); 5
console.log(MyMathFunction(10, 0, Divide)); Cannot Divide by 0!
console.log(MyMathFunction(20, 25, Add)); 45
console.log(MyMathFunction(25, 20, Subtract)); 5


3) SortMyArray

Write a function that takes in an array of integers and sorts the array from smallest to largest. 
Your function should return an array with the sorted list and print the list out. You can assume that the array being passed
will always have integers (You do not need to type check the array). DO NOT USE the built-in array sort function.

var arr1=[-3,8,7,6,5,-4,3,2,1]; console.log(SortMyArray(arr1)); [ -4, -3, 1, 2, 3, 5, 6, 7, 8 ]
var test_array=[1,2,3,4,5]; console.log(SortMyArray(test_array)); [ 1,2,3,4,5]
var test_array=[]; console.log(SortMyArray(test_array)); Cannot sort an Empty Array!
var test_array=[1,-1,-2,2,3,-3,-4,4,5,-5,0];

console.log(SortMyArray(test_array)); [ -5,-4,-3,-2,-1,0,1,2,3,4,5]
var test_array=[1, 1, 1, 100, 75, 2, 2, 37, 55, 55]; console.log(SortMyArray(test_array)); [1,1,1,2,2,37,55,55,75,100]


4) myFib

Write a JavaScript function using recursion to compute the Fibonacci number of n (where n is a positive integer). Your function should output the calculated result for the n given. You also need to type check to make sure the value being given is an integer.
Fib(n) = 3
Fib(n) = Fib(n-1) + Fib(n-2)
console.log(myFib(5)); 24
console.log(myFib(10)); 267
console.log(myFib(8)); 102
for n = 0 or n = 1 for n > 1
console.log(myFib(“Thirtyfive”)); Not an integer value!
console.log(myFib(3.5)); Not an integer value!
