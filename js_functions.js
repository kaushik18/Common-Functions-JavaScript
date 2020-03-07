// Kaushik Nadimpalli
// CS4337.501
// Programming Assignment 3

// EvenOdd
function EvenOdd(number)
{
    if(!Number.isInteger(number))
    {
      return "Not a valid number";
    }
    if(number == 0)
    {
        return "Even";
    }
    else if (number == 1)
    {
        return "Odd";
    }
    else
    {
        return(EvenOdd(number - 2));
    }
}

// Below are the console log statements for the EvenOdd function above
console.log(EvenOdd(5));
console.log(EvenOdd(10));
console.log(EvenOdd(255));
console.log(EvenOdd("One"));
console.log(EvenOdd(0));



// MyMathFunction
function MyMathFunction(one, two, func)
{
  return func(one, two, MyMathFunction);
}

function Add(num1, num2)
{
  return num1+num2;
}

function Subtract(num1, num2)
{
  return num1-num2;
}

function Multiply(num1, num2)
{
  return num1*num2;
}

function Divide(num1, num2)
{
  if(num2 == 0)
  {
    return "Cannot Divide by 0!";
  }
  return num1/num2;
}

// Below are the console log statements for the MyMathFunction function above

console.log(MyMathFunction(10, 10, Multiply));
console.log(MyMathFunction(50, 10, Divide));
console.log(MyMathFunction(10, 0, Divide));
console.log(MyMathFunction(20, 25, Add));
console.log(MyMathFunction(25, 20, Subtract));


// SortMyArray
function SortMyArray(array)
{
  var sorted = false;
  if(array.length == 0)
  {
    return "Cannot sort an Empty Array!";
  }
  while (!sorted)
   {
    sorted = true;
    for (var x = 1; x < array.length; x += 1)
    {
      if (array[x - 1] > array[x])
      {
        sorted = false;
        var curr = array[x - 1];
        array[x - 1] = array[x];
        array[x] = curr;
      }
    }
  }
  return array;
}

// Below are the console log statements for the SortMyArray function above

var arr1=[-3,8,7,6,5,-4,3,2,1];
console.log(SortMyArray(arr1));
var test_array=[1,2,3,4,5];
console.log(SortMyArray(test_array));
var test_array=[];
console.log(SortMyArray(test_array));
var test_array=[1,-1,-2,2,3,-3,-4,4,5,-5,0];
console.log(SortMyArray(test_array));
var test_array=[1, 1, 1, 100, 75, 2, 2, 37, 55, 55];
console.log(SortMyArray(test_array));


// myFib
function myFib(number)
{
  if(!Number.isInteger(number))
  {
    return "Not an integer value!";
  }
  else if (number < 0)
  {
    return "Invalid Integer Value.";
  }
  else if (number == 0 || number == 1)
  {
    return 3;
  }
  else
  {
    return (myFib(number - 1) + myFib(number - 2));
  }
}

// Below are the console log statements for the myFib function above

console.log(myFib(5));
console.log(myFib(10));
console.log(myFib(8));
console.log(myFib("Thirtyfive"));
console.log(myFib(3.5));
