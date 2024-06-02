         // Problem:1
function celsiusToFahrenheit(celsius) {
    let equ = (celsius * 9/5) + 32;
    return equ
  }
  let solve = celsiusToFahrenheit(4);
  console.log(solve)

        // Problem:2
function isEven(number){
    let forMula = number % 2 == 0;
    return forMula;
}
let solution = isEven(4);    //True
let solutions = isEven(7);    //False
console.log(solution)
console.log(solutions)

        // Problem: 3
function sum(num1, num2){
    let summm = num1 + num2;
    return summm
}
let summesion = sum(3,4)  //7
let summesions = sum(10,20)  //30
console.log(summesion)
console.log(summesions)

        // Problem: 4

        function findSmallestNum(arr) {
            if (arr.length === 0) {
              throw new Error("Array is empty");
            }
            let smallest = arr[0];
            for (let i = 1; i < arr.length; i++) {
              if (arr[i] < smallest) {
                smallest = arr[i];
              }
            }
                return smallest;
          }
          let equu1 = findSmallestNum([3, 5, 1, 9]);
          let equu2 = findSmallestNum([-1, -5, 0, 10])
          console.log(equu1); 
          console.log(equu2)

    
          //Problem: 5
          function countVowels(str) {
            let vowels = 'aeiouAEIOU';
            let count = 0;
            for (let i = 0; i < str.length; i++) {
              if (vowels.includes(str[i])) {
                count++;
              }
            }
            return count;
          }
          console.log(countVowels("hello world")); 
          console.log(countVowels("Javascript")); 


          // Problem: 6

          function getFirstElement(arr) {
            return arr[0];
          }
          let first1 = getFirstElement([1, 2, 3]);
          let first2 = getFirstElement(["a", "b", "c"])
          console.log(first1); 
          console.log(first2)

        // Problem : 7
        function isArrayEmpty(arr) {
            return arr.length === 0;
          }
          let empty1 = isArrayEmpty([]);
          let empty2 = isArrayEmpty([1, 2, 3]);
          console.log(empty1); 
          console.log(empty2)

          //problem 8

          function factorialize(num) {
            if (num === 0 || num === 1) return 1;
            return num * factorialize(num - 1);
          }
          console.log(factorialize(5))
          console.log(factorialize(7))
          
          
          //Problem 9 :
          function reverseString(str) {
            return str.split('').reverse().join('');
          }
          let reverse1 = reverseString("hello");
          let reverse2 = reverseString("world")
          console.log(reverse1)
          console.log(reverse2)
          
          //Problem: 10

          function toLowerCase(str) {
            return str.toLowerCase();
          }
          console.log(toLowerCase("HELLO WORLD"))
          console.log(toLowerCase("JavaScript"))

          //Problem: 11

          function stringLength(str) {
            return str.length;
          }
          
          console.log(stringLength("hello")); 
          console.log(stringLength("world"))

          //Problem: 12

          function mergeArrays(arr1, arr2) {
            return arr1.concat(arr2);
          }
          
          console.log(mergeArrays([1, 2, 3], [4, 5, 6]))
          console.log(mergeArrays(["a", "b"], ["c", "d"]))

          //Problem 13

          function getLastElement(arr) {
            return arr[arr.length - 1];
          }
          
          console.log(getLastElement([1, 2, 3]))
          console.log(getLastElement(["a", "b", "c"]))
          
          //Problem 14

          function getFirstCharacter(str) {
            return str.charAt(0);
          }
          
          console.log(getFirstCharacter("hello")); 
          console.log(getFirstCharacter("world"))
          
          
          //Problem 15

          function sumArray(arr) {
            return arr.reduce((acc, curr) => acc + curr, 0);
          }
          
          console.log(sumArray([1, 2, 3, 4]));
          console.log(sumArray([-1, -2, -3, -4])); 
          console.log(sumArray([1.5, 2.5, 3.5]))
          