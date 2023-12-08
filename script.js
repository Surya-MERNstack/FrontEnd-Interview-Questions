// JAVASCRIPT DATA STRUCTURE AND ALGORITHM

const { log } = require("console");
const { checkPrime } = require("crypto");

// Math Algorithm

/* 
  * Fibonacci Sequence
  * Factorial of a Number
  * Prime Number
  * Power of Two
  * Recursion
  * Fibonacci Sequence with recursion
  * Factorial of a number with recursion 
  


  --> Fibonacci Sequence:
        The first Number in the Sequence is 0 and 1

        function Fibonacci (n) {
          const fib = [0, 1];

          for(let i = 2; i < n; i++){
             fib[i] = fib[i - 1] + fib[i - 2]
          }
          return fib
        }

        console.log(Fibonacci(2))
        console.log(Fibonacci(3))
        console.log(Fibonacci(4))
        console.log(Fibonacci(7))

    --> Factorial of a Number

    function Factorial (n) {
       let sum = 1;
       for(let i = 2; i <= n; i++){
         sum *= i
       }
       return sum
    }
    
    console.log(Factorial(0))
    console.log(Factorial(1))
    console.log(Factorial(5))


    --> Prime Number
    function PrimeNumber (n) {
      if(n <= 1) return false;
    for(let i = 2; i < n; i++){
       if(n % i == 0){
           return false;
       }
      }
      return true
    }
   
   console.log(PrimeNumber(1)) 
   console.log(PrimeNumber(4)) 
   console.log(PrimeNumber(5)) 

            (or)

    
    function PrimeNumber(n) {
      if (n <= 1) return false;
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
          }
        }
        return true;
    }
    
    console.log(PrimeNumber(1));
    console.log(PrimeNumber(2));
    console.log(PrimeNumber(4));
    console.log(PrimeNumber(5));

            (or)

   function Primes (n) {
   if(n <= 1) return false;
   const prime = [];
   const isPrime =  new Array(n).fill(true);

   for(let i = 2; i * i < n; i++){
     if(isPrime[i]){
        for(let j = i * i; j < n; j += i){
            isPrime[j] = false
        }
     }
   }

    for(let i = 2; i < n; i++){
         if(isPrime[i]){
            prime.push(i)
         }else{
            prime.push(false)
         }
       }
       return prime
    }
    
    
    console.log(Primes(10))


      (or)
      
    function isPrimeNumber(n) {
        if (n <= 1) return false;
        
        for (let i = 2; i <= Math.sqrt(n); i++) {
          if (n % i === 0) {
            return false;
          }
        }
        
        return true;
      }
    
      const output = [];
      const num = 10
      
      for (let i = 1; i <= num; i++) {
       output.push(`${i} ${isPrimeNumber(i)}`);
      }
    
      console.log(...output)
      

    --> Power of Two
     
    function isPowerOfTwo (n) {
      if(n < 1) return false;
    
      while(n > 1) {
       if(n % 2 !== 0){
        return false
       }
       n /= 2
      }
      return true
    }
    
    
    console.log(isPowerOfTwo(8)) // true
    console.log(isPowerOfTwo(1)) // true
    console.log(isPowerOfTwo(3)) // false


    (or)
    function isPowerOfTwo (n) {
     if(n < 1) return false; 
      return (n & (n - 1)) === 0;
    }
    
    console.log(isPowerOfTwo(2)) // true
    console.log(isPowerOfTwo(5)) // false

 
    --> Fibonacci Sequence with recursion

    function Recursion (n) {
 
       if(n < 2) return n;
     
     
       return Recursion(n - 1) + Recursion(n - 2)
     }

    console.log(Recursion(1));
    console.log(Recursion(6));
    console.log(Recursion(7));

    --> Factorial of a number with recursion 
   
      function RecursionFactorial (n) {
     
        if(n == 0) return 1;
     
        return n * RecursionFactorial((n - 1))
      }
   
      console.log(RecursionFactorial(0 ));
      console.log(RecursionFactorial(5));


   --> Linear Search 

   function LinearSearch (arr, target) {
     for(let i = 0; i < arr.length; i++){
       if(arr[i] === target){
         return i;
       }
     }
     return -1
   }
   console.log(LinearSearch([1,2,3,4,5], 5))
   console.log(LinearSearch([1,2,3,4,5], 10))

  
  --> BinarySearch

   function BinarySearch(arr, target) {

   let leftIndex = 0;
   let RightIndex = arr.length -1;

   while(leftIndex <= RightIndex){
     let middleIndex = Math.floor((leftIndex + RightIndex) / 2);

     if(target === arr[middleIndex]){
      return middleIndex
     }

     if(target < arr[middleIndex]){
      RightIndex = middleIndex - 1
     }else{
      leftIndex = middleIndex + 1
     }
   }
   return -1
}

console.log(BinarySearch([-1,2,4,5,6], 5));


  --> RecursionBinarySearch

   function RecursionBinarySearch (arr, target) {
   
     return search(arr, target, 0, arr.length -1)
   }
   
   function search(arr, target, leftIndex, RightIndex) {
     
     if(leftIndex > RightIndex) return -1;
   
     let middleIndex = Math.floor((leftIndex + RightIndex) / 2);
   
     if(target === arr[middleIndex]) {
       return middleIndex
     }
   
     if(target < arr[middleIndex]){
       return search(arr,target,leftIndex , middleIndex - 1)
     }else{
       return search(arr, target, middleIndex + 1, RightIndex)
     }
   
   } 
   
   console.log(RecursionBinarySearch([-2,4,5,7,8], 4))


   --> Sorting Algorithm
   * Bubble Sorting
   * Insertion Sorting
   * Quick Sorting
   * Merge Sorting


   function BubbleSorting (arr) {
      let swapped;
      do{
       swapped = false
       for(let i = 0; i < arr.length -1; i++){
        if(arr[i] > arr[i + 1]){
          let temp = arr[i];
       arr[i] = arr[i + 1]
        arr[i + 1] = temp;
        swapped = true
          }
        }   
      }while(swapped)
    } 

    let arr = [2,1,-3,-5,0]
    BubbleSorting(arr)
    console.log(arr);

    -->Insertion Sorting
    function InsertionSort(arr) {
    
      for(let i =0; i < arr.length; i++){
        let NTI = arr[i];
        let j = i - 1;
    
        while(j >= 0 && arr[j] > NTI){
          arr[j + 1] = arr[j];
          j = j - 1
        }
        arr[j + 1] = NTI
      }
    } 

  let arr = [-3,4,-1,3,1,0]
  InsertionSort(arr)
  console.log(arr);

  --> QuickSorting
    
    function QuickSorting (arr) {
       if(arr.length < 2) return arr;
    
       let pivot = arr[arr.length - 1];
       console.log(pivot);
       let left = [];
       let right = [];
      
       for(let i = 0; i < arr.length - 1; i++){
         if(arr[i] < pivot){
          left.push(arr[i])
         }else{
          right.push(arr[i])
         }
       }
       return [...QuickSorting(left), pivot ,...QuickSorting(right )]
    }

   let arr = [-1,3,1,-4,0]
   console.log(QuickSorting(arr))


   --> MergeSorting
   
     function MergeSorting (arr) {
         if(arr.length < 2) return arr;
         let mid = Math.floor(arr.length / 2);
        let leftArr = arr.slice(0, mid);
        let rightArr = arr.slice(mid);
        return merge(MergeSorting(leftArr), MergeSorting(rightArr))
    }
     function merge (leftArr, rightArr) {
         const SortedArr = [];
         while(leftArr.length && rightArr.length){
          if(leftArr[0] <= rightArr[0]){
            SortedArr.push(leftArr.shift())
        }else{
            SortedArr.push(rightArr.shift())
        }
      }
       return [...SortedArr, ...leftArr, ...rightArr]
    }
  
  let arr = [-1,3,1,-4,0]
  console.log(MergeSorting(arr));

 --> Mise Problem

  * Cartesian Product
  * Climbing StairCase
  * Tower of Hanoi
  

  --> Cartesian

   function Cartesian (arr_1, arr_2) {
     let result = [];
   
     for(let i = 0; i < arr_1.length; i++){
       for(let j = 0; j < arr_2.length; j++){
         result.push([arr_1[i] , arr_2[j]])
       }
     }
     return result
   }
   
   
   let arr_1 = [0,1];
   let arr_2 = [2,3,6]
   
   console.log(Cartesian(arr_1, arr_2))


  --> Climbing StairCase

   function ClimbingStairCase (n) {
     const NoOfWays = [1, 2];
   
      for(let i = 2; i <= n; i++){
       NoOfWays[i] = NoOfWays[i - 1] + NoOfWays[i - 2]
      }
      
    return NoOfWays[n - 1]
  }
  
  console.log(ClimbingStairCase(1))
  console.log(ClimbingStairCase(2))
  console.log(ClimbingStairCase(3))
  console.log(ClimbingStairCase(4))

  --> Tower of Hanoi

  function towerOfHanoi(n, fromRod, toRod, usingRod) {
        if (n === 1) {
          console.log(`Move dist 1 from ${fromRod} to ${toRod}`);
          return;
        }
        towerOfHanoi(n - 1, fromRod, usingRod, toRod);
        console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
        towerOfHanoi(n - 1, usingRod, fromRod, toRod);
      }

      towerOfHanoi(3, "A", "C", "B");


  
*/

// DATA STRUCTURE
/* 
  -> BuiltIn Data        -> Custom Data
   
    * Array               * Stack
    * Object              * Queues
    * Set                 * Circular Queues
    * Map                 * Linked List
                          * Hash Tables
                          * Tree
                          * Graphs
                          

  -> Custom Data Structure

  --> Stack 

  
class Stack {
  // push pop peek siz isEmpty print
  constructor() {
    this.items = [];
  }

  push (e) {
    this.items.push(e)
  }

   pop () {
    return this.items.pop()
   }

   peek () {
    return this.items[this.items.length - 1]
   }

   isEmpty () {
    return this.items.length === 0
   }

   size () {
    return this.items.length;
   }

   print (){ 
     return this.items
   }
}


const stacks = new Stack();

console.log(stacks.isEmpty())
console.log(stacks.push(10))
console.log(stacks.push(20))
console.log(stacks.push(30))
console.log(stacks.peek())
console.log(stacks.size())
console.log(stacks.pop())
console.log(stacks.print())


  --> Queue Arr

  class Queue {
   constructor(){
    this.items = [];
   }
  enqueue (e) {
    this.items.push(e)
  }

  dequeue () {
    return this.items.shift();
  }

  isEmpty () {
    return this.items.length === 0;
  }

  peek (){ 
    if(!this.isEmpty()){
      return this.items[0]
    }
    return null;
  }

  size () {
    return this.items.length
  }

  print () {
    return this.items;
  }
}

const queue = new Queue();

console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.isEmpty());
console.log(queue.print());
queue.dequeue()
console.log(queue.print());
queue.dequeue()
console.log(queue.print());
console.log(queue.peek())


  -> Queue object

  

class Queue {
  constructor () {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue (e) {
    this.items[this.rear] = e;
    this.rear ++
  }

  dequeue () {
    const items = this.items[this.front];
    delete this.items[this.front];
    this.front++
    return items
  }

  isEmpty () {
    return this.rear - this.front === 0;
  }

  peek () {
    return this.items[this.front]
  }

  size () {
    return this.rear - this.front
  }
  
  print () {
    return this.items;
  }

}

const queue = new Queue();

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)

console.log(queue.isEmpty())
console.log(queue.peek())
console.log(queue.dequeue());
console.log(queue.print());

 --> Circular Queue

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.counterLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  isFull() {
    return this.counterLength === this.capacity;
  }

  isEmpty() {
    return this.counterLength === 0;
  }

  enqueue(e) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = e;
      this.counterLength += 1;

      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const items = this.items[this.front];
    this.items[this.front] = null; 
    this.front = (this.front + 1) % this.capacity;
    this.counterLength -= 1;

    if (this.isEmpty()) {
      this.rear = -1;
      this.front = -1;
    }
    return items;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      return "arr is empty";
    } else {
      let i,
        str = "";

      for (i = this.front; i !== this.rear; i++ % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      return str
    }
  }
}

const circular = new CircularQueue(5);

circular.enqueue(10);
circular.enqueue(20);
circular.enqueue(30);
circular.enqueue(40);
circular.dequeue()

console.log(circular.isFull());
console.log(circular.print());
console.log(circular.peek());



*/

// class CircularQueue  {
//    constructor(capacity){
//     this.items = new Array(capacity);
//     this.currentLength = 0;
//     this.capacity = capacity
//     this.rear = -1;
//     this.front = -1;
//    }

//    isFull (){
//     return this.currentLength === this.capacity;
//    }

//    isEmpty () {
//     return this.currentLength === 0;
//    }

//    enqueue (e) {
//     if(!this.isFull()){
//       this.rear = (this.rear + 1) % this.capacity;
//       this.items[this.rear] = e;
//       this.currentLength += 1;

//       if(this.front === -1){
//         this.front = this.rear
//       }
//     }
//    }

//    dequeue () {
//     if(this.isEmpty()){
//        return null
//     }

//     const items = this.items[this.front];
//        this.items[this.front] = null;
//        this.front = (this.front + 1) % this.capacity
//        this.currentLength -= 1;

//        if(this.isEmpty()){
//          this.rear = -1;
//          this.front = -1;
//        }
//     return  items;
//    }

//    peek () {
//     if(!this.isEmpty()){
//         return this.items[this.front]
//     }

//     return null;
//    }

//    print () {
//     if(this.isEmpty()){
//       return "arr is empty"
//     }else{
//       let i , str = "";

//       for(i = this.front; i !== this.rear; i++ % this.capacity){
//         str += this.items[i] + " "
//       }
//       str += this.items[i]
//       return str
//     }
//   }
// }

// const circular = new CircularQueue(5);

// circular.enqueue(10)
// circular.enqueue(20)
// circular.enqueue(30)
// circular.enqueue(40)
// circular.dequeue()

// console.log(circular.isFull());
// console.log(circular.isEmpty());
// console.log(circular.print());
// console.log(circular.peek());

// let arr = [4, 2, 9, 1, 5, 2];
// let result = [];
// let max = Math.min(...arr);

// for(let i = 0; i < arr.length; i++){
//    if(arr[i]){
//     result.push(arr[i])
//    }
// }

// console.log(result);
// console.log(max);

// function findSecondLargest(arr) {
//   if (arr.length < 2) {
//     return null;
//   }

//   let largest = arr[0];
//   let secondLargest = arr[1];

//   if (secondLargest > largest) {
//     [largest, secondLargest] = [secondLargest, largest];
//   }

//   for (let i = 2; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] !== largest) {
//       secondLargest = arr[i];
//     }
//   }

//   return secondLargest;
// }

// function findSecondLargest (arr) {
//   let array = Array.from(new Set(arr.sort((a,b) => a - b)))

//   if(array.length < 2) return -1;

//   let largest = array[0]
//   let secondLargest = array[1];

//   console.log(largest, secondLargest);

//   if(secondLargest > largest){
//     [largest, secondLargest] = [secondLargest, largest]
//   }

//   for(let i = 0; i < array.length; i++){
//     console.log(arr[i]);
//     if(array[i] > largest){
//       secondLargest = largest;
//       largest = array[i];
//     }else if (array[i] > secondLargest && array[i] !== largest) {
//       secondLargest = array[i]
//     }
//   }
//   return secondLargest
// }

// let arr =[269 ,269 ,269 ,269 ,269 ,269 ,269 ,183]
// let secondLargest = findSecondLargest(arr);
// console.log(secondLargest);

// function arrangeAscending(matrix) {
//   if (matrix.length === 0 || matrix[0].length === 0) {
//     return []; // Return an empty array if the matrix is empty
//   }

//   // Flatten the matrix
//   const flatMatrix = matrix.reduce((acc, row) => acc.concat(row), []);

//   // Sort the flattened array in ascending order
//   flatMatrix.sort((a, b) => a - b);

//   // Calculate the number of rows and columns in the original matrix
//   const numRows = matrix.length;
//   const numCols = matrix[0].length;

//   // Restructure the sorted array into a 2D matrix
//   const sortedMatrix = [];
//   for (let i = 0; i < numRows; i++) {
//     const row = flatMatrix.slice(i * numCols, (i + 1) * numCols);
//     sortedMatrix.push(row);
//   }

//   return sortedMatrix;
// }

// // Example usage:
// const matrix = [
//   [5, 12, 9],
//   [13, 4, 7],
//   [6, 8, 11]
// ];

// const sortedMatrix = arrangeAscending(matrix);
// console.log("Matrix in ascending order:");
// for (const row of sortedMatrix) {
//   console.log(row);
// }

// const userInput = "3 3\n21 4 32\n34 76 5\n76 0 6";
// const inputLines = userInput.split("\n");
// const [m, n] = inputLines[0].split(" ").map(Number);

// const matrix = [];
// for (let i = 1; i <= m; i++) {
//   const row = inputLines[i].split(" ").map(Number);
//   matrix.push(row);
// }

// // Flatten the matrix and sort it
// const flatSorted = matrix
//   .reduce((acc, row) => acc.concat(row), [])
//   .sort((a, b) => a - b);

// // Reshape the sorted array back into a matrix
// const sortedMatrix = [];
// for (let i = 0; i < m; i++) {
//   sortedMatrix.push(flatSorted.slice(i * n, (i + 1) * n));
// }

// // Print the sorted matrix
// for (const row of sortedMatrix) {
//   console.log(row.join(" "));
// }

// let start = str[0].slice(0,2)
// console.log(start);

// let number = [9, 9];

// function FindLastAndAdd(arr) {

//   return (BigInt(arr.join("")) + BigInt(1)).toString().split("").map(Number);
// }

// console.log(FindLastAndAdd(number));

// let Socket = [7,1,5,3,6,4];

// function BestTimeToSell (Socket) {
//    // Buy         // Sell
//   let left = 0 , right = 0;
//   let max_profit = 0;

//   for(let i = 0; i < Socket.length; i++){
//     if(Socket[left] < Socket[right]){
//       let profit = Socket[right] - Socket[left];
//       console.log(max_profit, profit);
//       max_profit = Math.max(max_profit, profit);
//   }else{
//     left = right
//   }
//   right ++
//   }
//   return max_profit;
// }

// console.log(BestTimeToSell(Socket))

// class HashTables {
//   constructor(size) {
//      this.table = new Array(size);
//      this.size = size;
//   }

//   hash (key) {
//     let total = 0;
//     for(let i = 0; i < key.length; i++){
//       total += key.charCodeAt(i)
//     }
//     return total % this.size;
//   }

//   set (keys, values) {
//     const index = this.hash(keys);
//     const bucket = this.table[index];
//     if(!bucket){
//       this.table[index] = [[keys , values]];
//     }else{
//       const SameKeyItem = bucket.find((item) => item[0] === keys)
//       if(SameKeyItem) {
//         SameKeyItem[1] = values
//       }else{
//         bucket.push([keys, values])
//       }
//     }
//   }

//   get (key) {
//     const index = this.hash(key);
//     const bucket = this.table[index];
//     if(bucket) {
//       const SameKeyItem = bucket.find((items) => items[0] === key);
//       if(SameKeyItem){
//         return SameKeyItem[1]
//       }
//     }
//     return undefined;
//   }

//   remove (key) {
//      let index = this.hash(key);
//     //  this.table[index] = undefined
//     const bucket = this.table[index];
//     if(bucket) {
//       const SameKeyItem = bucket.find((item) => item[0] === key);
//       if(SameKeyItem) {
//          bucket.splice(bucket.indexOf(SameKeyItem), 1)
//       }
//     }
//   }

//   display () {
//     for(let i = 0; i < this.table.length; i++){
//         if(this.table[i]){
//           console.log(i , this.table[i])
//         }
//     }
//   }

// }

// const hash = new HashTables(50);

// hash.set("name", "surya");
// hash.set("age", 23);
// hash.set("name", "hulk");
// hash.set("name", "Tom");

// hash.display();

// console.log("Getting 'name':", hash.get("name"));
// console.log("Getting 'age':", hash.get("age"));

// hash.remove("age");
// hash.remove("name");

// console.log("After removing 'age and name':");
// console.log(hash.display());

// class HasDuplicates {
//   constructor(size) {
//     this.table = new Array(size);
//     this.size = size;
//   }

//   hash(key) {
//     let total = 0;
//     for (let i = 0; i < key.length; i++) {
//       total += key.charCodeAt(i);
//     }

//     return total % this.size;
//   }

//   set(key, values) {
//     const index = this.hash(key);
//     console.log(index);
//     const bucket = this.table[index];

//     if (!bucket) {
//       this.table[index] = [[key, values]];
//     } else {
//       // const SameKeyItem = bucket.find((items) => items[0] === key);
//       // if (SameKeyItem) {
//       //   SameKeyItem[1] = values;
//       const SameKeyItem = bucket.find((items) => items[0] === key);
//       if (SameKeyItem) {
//         SameKeyItem[1].push(values);
//       } else {
//         bucket.push([key, values]);
//       }
//     }
//   }

//   get(key) {
//     const index = this.hash(key);
//     const bucket = this.table[index];
//     if (bucket) {
//       const SameKeyItem = bucket.find((item) => item[0] === key);
//       return SameKeyItem[1];
//     }
//     return undefined;
//   }

//   remove(key) {
//     const index = this.hash(key);
//     const bucket = this.table[index];
//     if (bucket) {
//       const SameKeyItem = bucket.find((item) => item[0] === key);
//       if (SameKeyItem) {
//         return bucket.splice(bucket.indexOf(SameKeyItem), 1);
//       }
//     }
//   }

//   display() {
//     for (let i = 0; i < this.table.length; i++) {
//       if (this.table[i]) {
//         console.log(i, this.table[i]);
//       }
//     }
//   }
// }

// const arr1 = [1, 2, 3, 4, 5];
// const hash = new HasDuplicates(50);
// hash.set("Find the Duplicates", arr1);
// hash.display();

// const duplicates = hash.get("Find the Duplicates");
// console.log("Duplicates:", duplicates);

// const arr2 = [1, 2, 3, 2, 4, 5];
// console.log(hasDuplicates(arr2));

// class HasDuplicates {
//   constructor(size) {
//     this.table = new Array(size);
//     this.size = size;
//   }

//   hash(key) {
//     let total = 0;
//     for (let i = 0; i < key.length; i++) {
//       total += key.charCodeAt(i);
//     }

//     return total % this.size;
//   }

//   set(key, values) {
//     const index = this.hash(key);
//     const bucket = this.table[index];

//     if (!bucket) {
//       this.table[index] = [[key, values]];
//     } else {
//       const SameKeyItem = bucket.find((items) => items[0] === key);
//       if (SameKeyItem) {
//         SameKeyItem[1].push(values);
//       } else {
//         bucket.push([key, values]);
//       }
//     }
//   }

//   hasDuplicates(key) {
//     const index = this.hash(key);
//     const bucket = this.table[index];
//     if (bucket) {
//       const SameKeyItem = bucket.find((item) => item[0] === key);
//       return SameKeyItem ? SameKeyItem[1].length > 1 : false;
//     }
//     return false;
//   }

//   display() {
//     for (let i = 0; i < this.table.length; i++) {
//       if (this.table[i]) {
//         console.log(i, this.table[i]);
//       }
//     }
//   }
// }

// const arr2 = [1, 2, 3, 4, 5];
// const hash = new HasDuplicates(50);
// hash.set("Find the Duplicates", arr2);
// hash.display();
// console.log(hash.hasDuplicates("Find the Duplicates"))

// function convertToTitle(columnNumber) {
//   let result = '';
//   while (columnNumber > 0) {
//     columnNumber--; // Adjust to 0-based index
//     const remainder = columnNumber % 26;
//     result = String.fromCharCode(65 + remainder) + result;
//     columnNumber = Math.floor(columnNumber / 26);
//   }
//   return result;
// }

// const columnNumber = 701;
// const columnLabel = convertToTitle(columnNumber);
// console.log(columnLabel); // Output: "A"

// let arr =  parseInt(00000010100101000001111010011100)

// function convert (n) {
//   let result = 0;
//    let count = 32;

//    while(count --){
//     result *= 2;
//     result += n & 1;
//     n = n >> 1
//    }
//    return result
// }

// console.log(convert(arr))

// function titleToNumber(columnTitle) {
//   let result = 0;

//   for (let i = 0; i < columnTitle.length; i++) {
//     console.log(columnTitle.charCodeAt())
//     const charCode = columnTitle.charCodeAt(i) - 64; // Convert character to number
//     result = result * 26 + charCode;

//   }

//   return result;
// }

// const columnTitle = "AB";
// const numericValue = titleToNumber(columnTitle);
// console.log(numericValue);

// class Node {
//   constructor(node) {
//     this.node = node;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   push(data) {
//     const nodes = new Node(data);
//     let thead = this.head;
//     if(this.head === null){
//       this.head = nodes;
//     }else{
//       while(thead.next !== null) {
//         thead = thead.next
//       }
//       thead.next = nodes
//     }
//   }

//   pop() {

//     let tail = this.head;
//     if(this.head.next === null){
//       this.head = null
//     }else{
//       while(tail.next.next !== null){
//         tail = tail.next
//       }
//       tail.next = null
//     }
//   }

//   unshift(d) {
//     let node = new Node(d);
//     if(this.head === null){
//       this.head = node
//     }else{
//       node.next = this.head
//       this.head = node
//     }
//   }

//   shift() {
//     if(this.head.next !== null){
//       this.head = this.head.next
//     }else{
//       this.head.next === null;
//       this.head = null
//     }
//   }

//   length() {
//     let length = 0;
//     let thead = this.head;
//     while(thead.next !== null){
//       length ++;
//       thead = thead.next
//     }
//     return length;
//   }

//   parser() {
//     let items = [];
//     let thead = this.head;

//     while(thead !== null){
//       items.push(thead.node)
//       thead = thead.next
//     }
//     return items
//   }

//   adding () {
//     let result = [];
//     let thead = this.head;
//     while(thead !== null){
//       result.push(thead.node)
//       thead = thead.next
//     }
//     return result;
//   }

//   addTwoNumbers(l1, l2) {
//     const result = new LinkedList();
//     let carry = 0;
//     let p1 = l1.head;
//     let p2 = l2.head;

//     while (p1 || p2) {
//       const x = p1 ? p1.node : 0;
//       const y = p2 ? p2.node : 0;
//       const sum = x + y + carry;
//       carry = Math.floor(sum / 10); // Calculate carry for next iteration
//       result.push(sum % 10); // Add the current digit to the result
//       if (p1) p1 = p1.next;
//       if (p2) p2 = p2.next;
//     }

//     if (carry > 0) {
//       result.push(carry); // Add the carry if it exists
//     }

//     return result;
//   }
// }

// const Linked = new LinkedList();
// let l1 = [2,4,3], l2 = [5,6,4]

// Linked.push(l1);
// Linked.push(l2)
// console.log(Linked.length());
// console.log(Linked.parser())
// console.log(Linked.adding());
// console.log(Linked.addTwoNumbers(l1, l2));

// class Node {
//   constructor(node) {
//     this.node = node;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   // Push a new node with the given data to the end of the linked list.
//   push(data) {
//     const node = new Node(data);
//     let current = this.head;
//     if (this.head === null) {
//       this.head = node;
//     } else {
//       while (current.next !== null) {
//         current = current.next;
//       }
//       current.next = node;
//     }
//   }

//   // Method to convert the linked list to an array for easy printing.
//   toArray() {
//     const result = [];
//     let current = this.head;
//     while (current !== null) {
//       result.push(current.node);
//       current = current.next;
//     }
//     return result;
//   }

//   // Method to add two linked lists and return the result as a new linked list.
//   static addTwoNumbers(l1, l2) {
//     const result = new LinkedList();
//     let carry = 0;
//     let p1 = l1.head;
//     let p2 = l2.head;

//     while (p1 || p2) {
//       const x = p1 ? p1.node : 0;
//       const y = p2 ? p2.node : 0;
//       const sum = x + y + carry;
//       carry = Math.floor(sum / 10); // Calculate carry for the next iteration
//       result.push(sum % 10); // Add the current digit to the result
//       if (p1) p1 = p1.next;
//       if (p2) p2 = p2.next;
//     }

//     if (carry > 0) {
//       result.push(carry);
//     }

//     return result;
//   }
// }

// // Create two linked lists to represent the numbers.
// const l1 = new LinkedList();
// l1.push(2);
// l1.push(4);
// l1.push(3);

// const l2 = new LinkedList();
// l2.push(5);
// l2.push(6);
// l2.push(4);

// // Add the two linked lists and print the result.
// const sumList = LinkedList.addTwoNumbers(l1, l2);
// console.log(sumList.toArray());

// function PrimeNumber (n) {
//   if(n <= 1) return false;
// for(let i = 2; i < n; i++){
//    if(n % i == 0){
//        return false;
//    }
//   }
//   return true
// }

// console.log(PrimeNumber(1))
// console.log(PrimeNumber(4))
// console.log(PrimeNumber(5))

//         // (or)

// function PrimeNumber(n) {
//   if (n <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//         return false;
//       }
//     }
//     return true;
// }

// console.log(PrimeNumber(1));
// console.log(PrimeNumber(2));
// console.log(PrimeNumber(4));
// console.log(PrimeNumber(5));

// (or)

//   // (or)

// function isPrimeNumber(n) {
//     if (n <= 1) return false;

//     for (let i = 2; i <= Math.sqrt(n); i++) {
//       if (n % i === 0) {
//         return false;
//       }
//     }

//     return true;
//   }

//   const output = [];
//   const num = 10

//   for (let i = 1; i <= num; i++) {
//    output.push(`${i} ${isPrimeNumber(i)}`);
//   }

//   console.log(...output)

// function generatePrimes(n) {
//   if (n <= 1) return [];

//   const primes = [];
//   const isPrime = new Array(n + 1).fill(true);

//   for (let i = 2; i * i <= n; i++) {
//     console.log(isPrime)
//     if (isPrime[i]) {
//       for (let j = i * i; j <= n; j += i) {
//         isPrime[j] = false;
//       }
//     }
//   }

//   for (let i = 2; i <= n; i++) {
//     if (isPrime[i]) {
//       primes.push(i);
//     }
//   }

//   return primes;
// }

// console.log(generatePrimes(5)); // Output: [2, 3, 5]

// function PrimeNumber (n) {
// //  console.log(n)
//   if(n <= 1) return false;
//   if(n <= 3 ) return true;

//   if(n % 2 === 0 || n % 3 === 0) {
//     return false;
//   }

//   for(let i = 5; i * i <= n; i += 6){
//     if(n % i === 0 || n % (i + 2) === 0){
//       return false;
//     }
//   }
//   return true
// }

// const Primes = PrimeNumber(10)

// console.log(Primes)
// if(Primes){
//   console.log('1')
// }else{
//   console.log("0")
// }

// function Primes (n) {

//   if(n <= 1) return false;
//  if(n <= 3) return true;

//  if(n % 2 === 0 || n % 3 === 0){
//      return true;
//  }

//  for(let i = 5; i * i <= n; i += 6){
//      if(n % i === 0 || n % (i + 2) === 0){
//          return false;
//      }
//  }
//  return true;
// }
// let result = Primes(25)
// if(result){
//    console.log("1")
// } else{
//    console.log("0")
// }

// function PrimeNumber (n) {
//    if(n <= 1) return -1;
//    const Prime = [];
//    const isPrime = new Array(n + 1).fill(true);

//    for(let i = 2; i * i <= n; i++){
//     if(isPrime[i]){
//       for(let j = i * i; j <= n; j += i){
//         isPrime[j] = false
//       }
//     }
//    }

//    for(let i = 2; i <= n; i++){
//     if(isPrime[i]){
//       Prime.push(i)
//     }
//    }
//    return Prime
// }

// console.log(PrimeNumber(10))

// function PrimeNumber (n) {
//   let Prime = [];
//   let isPrime = new Array(n + 1).fill(true);

//   for(let i = 2; i * i <= n; i++){
//     if(isPrime[i]){
//       for(let j = i * i; j <= n; j += i){
//         isPrime[j] = false;
//       }
//     }
//   }

//   for(let i = 2; i <= n; i++){
//     if(isPrime[i]){
//       Prime.push(i)
//     }
//   }
//   return Prime.includes(n)
// }

// const Primes = PrimeNumber(5);

// if(Primes){
//   console.log(true)
// }else{
//   console.log(false)
// }

/*
  Come to positive
  *
  * * 
  * * * 
  * * * *
  * * * * *
*/

// let total = 5;

// for(let i = total; i > 0; i-- ){
//   console.log(i)
//   let row = "";
//   for(let j = 0; j < i; j++){
//     row += "* "
//   }
//   console.log(row)
// }

// for(let i = 1; i <= total; i++){
//   console.log(i)
//   let row = "";
//   for(let j = 1; j <= i; j++){
//     row += "* "
//   }
//   console.log(row)
// }

// let arr = 10;

// function PrimeNumber (n) {
//    if(n <= 1) return null;

//    const Prime = [];
//    const isPrime = new Array(n + 1).fill(true);

//    for(let i = 2; i <= n; i++){
//     if(isPrime[i]){
//       for(let j = i * i; j <= n; j+= i){
//         isPrime[j] = false;
//       }
//     }
//   }
//   for(let i = 2; i <= n; i++){
//     if(isPrime[i]){
//       Prime.push(i)
//     }
//   }
//   return Prime;
//   // if(Prime.includes(n)){
//   //   return true;
//   // }else{
//   //  return false;
//   // }
// }
// console.log(PrimeNumber(arr))

// const fullDetails = {
//   fullData : function (location) {
//     return `Hello ${this.name} thankyou ${this.age} ${location}`
//   }
// }

// const obj = {
//   name : "surya",
//   age : 23
// }

// let TotalDetails = fullDetails.fullData.bind(obj, "chennai")

// console.log(TotalDetails())
// console.log(fullDetails.fullData.call(obj,"dpi"))
// console.log(fullDetails.fullData.apply(obj, ["chennai"]))

// let arr = [1, 2, 3, 4, 5,6 ,7]
// let k = 3;
// let result = [];

// function rotations (arr) {

//   for(let i = 0; i < arr.length; i++){
//     console.log((i + k ) % arr.length)
//     let sum = (i + k) % arr.length;
//     result[sum] = arr[i]
//   }
//   return result
// }
// console.log(rotations(arr))

// let words = "the day is sunny the the the sunny is is".split(' ');
// let map = new Map();

// for(let i = 0; i < words.length; i++){
//   console.log(words[i]);
//   let sum = words[i];

//   if(map.has(sum)){
//     map.set(sum, map.get(sum) + 1);
//   }else{
//     map.set(sum, 1);
//   }
// }

//  map.forEach((num, values) => {
//      if(num > 0){
//       console.log(values ,num)
//      }
//  })

/*
 
*/

// let arr = [1,2,3,-4,5];
// let max_num = arr[0];
// let current_num = arr[0];

// for(let i = 1; i < arr.length; i++){
//   current_num = Math.max(arr[i], current_num + arr[i]);
//   max_num = Math.max(max_num , current_num);
// }
// console.log(max_num)

// let arr = [1,2,9,10,13];
// let result = [];
// let count = 0;

// for(let i = 0; i < arr.length; i++){
//    if(arr[i] % 2 === 0){
//     result.push(arr[i])
//     count ++
//    }
// }

// console.log(count);
// console.log(result)

// let k = 3;
// let tag = [1,2,3,4];
// let position = -1

// for(let i = 0; i < tag.length; i++){
//   console.log(tag[i]);
//   if(tag[i] === k){
//     position = ` Index : ${i} , Value : ${tag[i]}`
//   }
// }
// console.log(position)

// let sum = 5;
// let Factorial = 1;

// for(let i = 2; i <= sum; i++){
//    Factorial *= i
// }

// console.log(Factorial)

// let words = "na enna sollatum nee mattum solllllllllllllllllllllllllllllllll ss d".split(' ');
// let result = words[0];
// let second = [];

// for(let i = 0; i < words.length; i++){
//   let totalWordsLength  = words[i].length;
//   if(result.length > totalWordsLength){
//     result = words[i]
//   }
// }

// console.log(result)

// let words = "hello surya Good Morning".split('');
// let vowels = "aeiou";
// let emptyStr = " ";
// let count = 0;

// for(let i = 0; i < words.length; i++){
//   console.log(words[i].toLocaleLowerCase())
//   // if(vowels.includes(words[i])){
//   //   count ++
//   // }
//   if(emptyStr.includes(words[i])){
//     count++
//   }
// }

// console.log(count)

// let arr = [-2,-4,-6,-8,-10,-3];
// let add = 0;

// for(let i = 0; i < arr.length; i++){
//   if(arr < 0) add = -1;
//   else if(arr[i] >= 1) add += arr[i]
// }

// console.log(add)

// let arr = [1,2,3,4,5,2,3,4,5];
// let output = [];

// for(let i = 0; i < arr.length; i++){
//   console.log(arr[i])
//   for(let j = i; j < arr.length; j++){
//     console.log(arr[j])
//     if(arr[i] === arr[j]){
//       output.push(arr[j])
//     }
//   }
// }

// console.log(...output)

// let

/*
Reverse a String:
Question: Write a function that reverses a string.
Example Input: "hello"
let words = "hello".split('').reverse();
console.log(words.join(''))

Find the Factorial of a Number:
Question: Write a function that calculates the factorial of a given integer.
Example Input: 5

let num = 5;
  let factorial = 1;
  for(let i = 2; i <= num; i++){
      factorial *= i;
 }
  console.log(factorial)


Check for Palindromes:
Question: Write a function that checks if a given string is a palindrome.
Example Input: "racecar"

let words = "racecar".split('');

for(let i = 0; i < words.length; i++){
  console.log(words[i].toString().split(' ').reverse().join(''))
  let same = words[i].toString().split(' ').reverse().join('');
  if(words[i] === same){
    console.log(true);
    break;
  }
  else console.log(false);
}


Find the Longest Word:
Question: Write a function that finds the longest word in a sentence.
Example Input: "The quick brown fox"

let words = "The quick brown f".split(' ');
let long = "";

for(let i = 0; i < words.length; i++){
  let totalLength = words[i].length;

  if(totalLength > words.length){
    long = words[i];
  }
}

console.log(long)




Title Case a Sentence:
Question: Write a function that converts a sentence to title case.
Example Input: "this is a sample sentence"

let word = "this is a sample sentence".split(' ');
let result = [];

for(let i = 0; i < word.length; i++){
  let spliceWords = word[i][0].toUpperCase()
  let remainWords = word[i].slice(1);
  result.push(spliceWords.concat(remainWords))
}

console.log(...result)



Count Vowels and Consonants:
Question: Write a function that counts the number of vowels and consonants in a given string.
Example Input: "hello world"

let words = "hello world".split('');
let count = 0;
console.log(words)

for(let i = 0; i < words.length; i++){
  let vowels = "aeiou"
  if(vowels.includes(words[i])){
     count ++
  }
}
console.log(count)



Find the Largest Number in an Array:
Question: Write a function to find the largest number in an array of numbers.
Example Input: [5, 10, 2, 8, 1]

let num = [5, 10, 2, 8, 1];
let max_num = -Infinity;

for(let i = 0; i < num.length; i++){
  if(max_num < num[i]){
    max_num = num[i]
  }
}
console.log(max_num);


Sum of Positive Numbers:
Question: Write a function that calculates the sum of all positive numbers in an array.
Example Input: [2, -3, 5, -8, 7]


let num = [2, -3, 5, -8, 7];
let sum = 0;

for(let i = 0; i < num.length; i++){
  if(num[i] > 0) sum += num[i]
}

console.log(sum)


Check for Prime Numbers:
Question: Write a function that checks if a given number is prime.
Example Input: 17


let num = 17;

function FindPrimeNumber (n) {
   if(n <= 1) return "-1";

   let prime = [];
   let isPrime = new Array(n + 1).fill(true);

   for(let i = 2; i <= n; i++){
      if(isPrime[i]){
        for(let j = i * i; j <= n; j += i){
          isPrime[j]  = false
        }
      }
   }
   for(let i = 2; i <= n; i++){
    if(isPrime[i]){
      prime.push(i)
    }
   }

   return prime.includes(n)
}

console.log(FindPrimeNumber(num))





Fibonacci Sequence:
Question: Write a function to generate the first N numbers in the Fibonacci sequence.
Example Input: 7


let n = 7;

function Fibonacci (n) {
  let sync = [0, 1]
  for(let i = 2; i < n; i ++){
    sync[i] = sync[i - 1] + sync[i - 2]
  }
  return sync
}

console.log(Fibonacci(n))

*/

// var isAnagram = function(s, t) {
//   if (s.length !== t.length) {
//       return false;
//   }

//   var freq = new Array(26).fill(0);
//   for (var i = 0; i < s.length; i++) {
//       freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
//       freq[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
//       // console.log(s.charCodeAt(i))
//       // console.log(t.charCodeAt(i));
//       // console.log(freq[s.charCodeAt(i) - 'a'.charCodeAt(0)] ++);
//       // console.log(freq[t.charCodeAt(i) - 'a'.charCodeAt(0)]--);
//   }

//   for (var i = 0; i < freq.length; i++) {
//     console.log(freq[i]);
//       if (freq[i] !== 0) {
//           return false;
//       }
//   }

//   return true;
// };

// let s = "sal", t = "als"

// console.log(isAnagram(s, t))

// let arr = [1,2,3,4,5] , k = 2;
// let result = [];

// for(let i = 0; i < arr.length; i++){
//   let s = (i + k) % arr.length;
//   result[s] = arr[i]
// }

// for(let i = 0; i < arr.length; i++){
//   arr[i] = result[i];
// }

// console.log(result)

// for(let i = 5 ; i > 0; i--){
//   let str = " ";

//   for(let j = i; j <= 5; j++){
//     str += "*"
//   }

//   console.log(str)
// }

// var checkInclusion = function (s1, s2) {
//   // If s1 is larger than s2 then match is not possible
//   if (s1.length > s2.length) return false;
//   let neededChar = {}; //To Store the frequency/count of required string s1
//   for (let i = 0; i < s1.length; i++) {
//     // Initially neededChar[s1[i]] will be undefined and
//     // undefined || 0 will return 0. So we increment it by 1
//     neededChar[s1[i]] = (neededChar[s1[i]] || 0) + 1;
//     console.log((neededChar[s1[i]] = (neededChar[s1[i]] || 0) + 1));
//   }
//   /*
// 	Now we have neededChar
// 	i.e neededChar={
// 		a:1,
// 		b:1
// 	}
// 	*/
//   let left = 0, //left pointer/index of the sliding window
//     right = 0, //right pointer/index of the sliding window
//     requiredLength = s1.length; //length of the substring required in s2

//   // Now iterate until the right index of window is lesser than length of s2
//   while (right < s2.length) {
//     // If we found s2 character in s1 i.e in neededChar then we decrease requiredLength
//     if (neededChar[s2[right]] > 0) requiredLength--;
//     // Since we have encountered new char i.e s2[right] we decrease it's
//     // count in neededChar even if it is not present in neededChar because we only care about neededChars
//     neededChar[s2[right]]--;
//     right++; //window is incremented by 1 step

//     // Now if our requiredLength becomes 0 it means we have found a match of the s2 substring
//     // So we return true
//     if (requiredLength === 0) return true;

//     // If our window length is equal to s1 length (length of string to search in s2)
//     // then we have to remove left element of window i.e left++ and add new element from right
//     // will be added in next iteration
//     if (right - left === s1.length) {
//       // if the left element we are removing was a required character then we increase requiredLength
//       // because that element will no longer be the part of sliding window
//       if (neededChar[s2[left]] >= 0) requiredLength++;
//       // We will also increase the count of left element removed from window
//       neededChar[s2[left]]++;
//       // And finally we will decrease the window size by 1 from left i.e left++
//       left++;
//     }
//   }
//   // If match was not found we return false
//   return false;
// };

// var checkInclusion = function (s1, s2) {
//   const len1 = s1.length, len2 = s2.length;
//   if (len1 > len2) return false;

//   const count = Array(26).fill(0);
//   for (let i = 0; i < len1; i++) {
//       count[s1.charCodeAt(i)-97]++;
//       count[s2.charCodeAt(i)-97]--;
//   }
//   if (!count.some(e => e !== 0)) return true;

//   for (let i = len1; i < len2; i++) {
//       count[s2.charCodeAt(i)-97]--;
//       count[s2.charCodeAt(i-len1)-97]++;
//       if (!count.some(e => e !== 0)) return true;
//   }
//   return false;
// };

// let s1 = "aba",
//   s2 = "ba";

// console.log(checkInclusion(s1, s2));

// let s = "sal", t = "als"

// function isAnagram (s,t) {
//  if(s.length !== t.length) return false;

//  let freq = new Array(26).fill(0);
//  for(let i = 0; i < s.length; i++){
//   freq[s.charCodeAt(i) - "a".charCodeAt(0)] ++;
//   freq[t.charCodeAt(i) - "a".charCodeAt(0)] --;
//  }
//  for(let  i = 0; i < s.length; i++){
//    if(freq[i] !== 0) return false
//  }
//  return true
// }

// console.log(isAnagram(s,t))

// var checkInclusion = function (s1, s2) {
// const len1 = s1.length, len2 = s2.length;
// if (len1 > len2) return false;

// const count = Array(26).fill(0);
// for (let i = 0; i < len1; i++) {
//     count[s1.charCodeAt(i)-97]++;
//     count[s2.charCodeAt(i)-97]--;
// }
// if (!count.some(e => e !== 0)) return true;

// for (let i = len1; i < len2; i++) {
//     count[s2.charCodeAt(i)-97]--;
//     count[s2.charCodeAt(i-len1)-97]++;
//     if (!count.some(e => e !== 0)) return true;
// }
// return false;

//   let len1 = s1.length , len2 = s2.length;

//   if(len1 > len2) return false

//   let count = new Array(26).fill(0);

//   for(let i = 0; i < len1; i++){
//     count[s1.charCodeAt(i) - 97] ++;
//     count[s2.charCodeAt(i) - 97] --;
//   }
//   if(!count.some(e => e !== 0)) return true;

//   for(let i = len1; i < len2; i++){
//     count[s2.charCodeAt(i) - 97] ++;
//     count[s2.charCodeAt(i - len1) - 97] --
//   }
//   if(!count.some(e => e !== 0)) return true;
// };

// let s1 = "cb",
//   s2 = "bc";
// console.log(checkInclusion(s1,s2))

// var rotateString = function(s, goal) {
//   if(s ===  goal) return true

//   for(let i = 0; i < s.length; i++){
//     console.log(s.slice(i)+ s.slice(0,i))
//       if(s.slice(i) + s.slice(0, i) === goal) return true
//   }

//   return false;
// };

// let  s = "abcde", goal = "cdeab"

// console.log(rotateString(s,goal));

// let  s = "abcde", goal = "cdeab"

// function rotateString (s, goal){

//   console.log(s, goal)
//   if(s === goal) return true;

//   for(let i = 0; i < s.length; i++){
//     // console.log(s.slice(i)+s.slice(0,i));
//     if(s.slice(i)+s.slice(0, i) === goal) return true
//   }

//   return false

// }

// console.log(rotateString(s, goal))

// let s = "ab" , t = "aassssab"

// function checkInclusion (s, t){
//    let len1 = s.length, len2 = t.length;
//    if(len1 > len2) return false;

//    let count = new Array(26).fill(0);

//    for(let i = 0; i < len1; i++){
//        count[s.charCodeAt(i) - 97] ++;
//        count[t.charCodeAt(i) - 97] --;
//    }
//    console.log(...count);
//    if(!count.some(e => e !== 0)) return true;

//    for(let i = len1; i < len2; i++){
//      count[t.charCodeAt(i) - 97] --;
//      count[t.charCodeAt(i - len1) - 97] ++

//      if(!count.some(e => e !== 0)) return true
//    }

//    return false;
// }

// console.log(checkInclusion(s, t))

// let num = 5;
// function isPrimeNumber (num) {

//    if(num <= 1) return "-1"

//    let prime = [];
//    let isPrime = new Array(num + 1).fill(true);
//    isPrime[0] = isPrime[1] = false;

//    for(let i = 2; i < num; i++){
//      if(isPrime[i]){
//       for(let j = i * i; j < num; j += i){
//         isPrime[j] = false;
//       }
//      }
//    }

//    for(let i = 2; i <= num; i++){
//     if(isPrime[i]){
//       prime.push(i);
//     }
//    }

//    console.log(prime.includes(num))
//    return prime
// }

// console.log(isPrimeNumber(num))

// let num = [1,2,3,4,5] , rotate = 3;
// let result = []

// for(let i = 0; i < num.length; i++){
//   let findPer = (i + rotate) % num.length;
//   result[findPer] = num[i]
// }

// console.log(result);

// let arr = [1,2,3,4,5,6] , result = [];

// for(let i = 0; i < arr.length; i++){
//   if((arr[i] & 1) === 0){
//     result.push(arr[i])
//   }
// }

// console.log(result)

// let arr = [1,2,-3,4,5], result = [];
// let positive = 0;

// for(let i = 0; i < arr.length; i++){
//   if(arr[i] >= 1){
//     positive += arr[i]
//   }else{
//     positive += arr[i]
//   }
// }

// console.log(positive);

// let words = [1,2,3,4,5,1,2,3];
// let arr1 = words.slice(0,5);
// let arr2 = words.slice(5)

// console.log(arr1);
// console.log(arr2);

// let result = arr1.filter((nums, i) =>  arr2.includes(nums)).sort((a, b) => a - b);

// console.log(result)

// let arr  = "AB3CD40".split('');

// console.log(arr);

// let output = []
// let result = 0;
// for(let i = 0; i < arr.length; i ++){

//    let sum = isNaN(arr[i])
//    if(sum === false){
//     result += parseInt(arr[i])
//    }else{
//     output.push(arr[i])
//    }
// }

// console.log(output.concat(result).join(''))

// let num = 10001010;

// let number = parseInt(num, 2);

// console.log(number.toString(16))

// let words = "code overloaded vishal vishal vishal done done done  ".split(' ');
// let [N,K] = [5, 3];

// function isCons (N,K,words) {
//   if(N < K) return false;

//    for(let i = 0; i < N; i++){
//     let repeat = true;
//     for(let j = i; j < N; j++){
//       if(words[i] !== words[1 + j]){
//         repeat = false;
//         break
//       }
//     }
//     if(repeat){
//       return "yes"
//     }
//    }
//    return "no"

// }

// console.log(isCons(N,K,words))

// find the largest num in the arr;

// let arr = [1,222,3,4,33335];
// let max = -Infinity;

// for(let i = 0; i < arr.length; i++){
//   if(arr[i] > max){
//     max = arr[i]
//   }
// }

// console.log(max);

// let words = "hello world".split('')

// let num = [1,2,3,4,5];
// let result = [];

// for(let i = words.length - 1; i >= 0; i--){
//   console.log(words[i])
//  result.push(words[i].toString())
// }

// console.log(result.join(''))

/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */

// let number = 5;

// for(let i = number; i > 0; i--){
//   console.log(number)
//   let str = " ";
//   for(let j = i; j < number; j++){
//     str += "* "
//   }
//   console.log(str)
// }

// let words = "hii epdi iruku enna pandra s".split(' ')

// function findLongestWords (words) {
//   let arr = [];
//   for(let i = 0; i < words.length; i++){
//     let LengthOfWords = words[i].length;
//     arr.push(LengthOfWords)
//   }

//   for(let i = 0; i < words.length; i++){
//     if(words[i].length == Math.min(...arr)){
//       return words[i]
//     }
//   }
// }

// console.log(findLongestWords(words))

// let output = []

// let arr = []

// for(let i = 0; i < words.length; i++){
//   let lengths = words[i].length;
//   arr.push(lengths)
// }

// console.log(Math.max(...arr))

// let words = "hii epdissb irukufffffffffffffffffffff enna s".split(' ')
// let result = "";

// for(let i= 0; i <words.length; i++){
//   let wordsLength = words[i].length;
//   if(wordsLength < words.length){
//       wordsLength = words
//       result = words[i]
//   }
// }

// console.log(result)

// let arr = 5;
// let fib = [0, 1];

// for(let i = 2; i <= arr; i++){
//   fib[i] = fib[i - 1] + fib[i - 2]
// }

// console.log(fib)

// function BinarySearch (arr, target) {
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;
//     while(leftIndex <= rightIndex){
//       let middleIndex = Math.floor((leftIndex + rightIndex ) / 2)
//        if(target === arr[middleIndex]){
//         return middleIndex;
//        }

//        if(target <= arr[middleIndex]){
//          rightIndex = middleIndex - 1;
//        }else {
//         leftIndex = middleIndex + 1
//        }
//     }
//     return -1
// }

// console.log(BinarySearch([1,2,3,4,5,6], 4))

// duplicate
// string len 5 split reverse join remain

// const words = "the world is coming is not there Dot nothing".split(' ');
// const Length = 5;
// const result = [];

// for(let i = 0; i < words.length; i++){
//   // console.log(Length > words[i].split('').length)
//    if(Length > words[i].length){
//       result.push(words[i].split('').reverse().join(''))
//    }else{
//     result.push(words[i])
//    }
// }

// console.log(result)

// function BinarySearch (arr, s) {
//   let leftIndex = 0;
//   let RightIndex = arr.length - 1;

//   console.log(RightIndex, leftIndex)

//   while(leftIndex <= RightIndex){
//     let middleIndex = Math.floor((leftIndex + RightIndex) / 2);
//     if(s == arr[middleIndex]){
//        return middleIndex
//     }

//     if(s <= arr[middleIndex]){
//         RightIndex = middleIndex - 1;
//     }else{
//        leftIndex = middleIndex + 1;
//     }
//   }
//   return -1
// }

// console.log(BinarySearch([1,2,3,4,5,6,7], 4))

// const words = "the world is coming is not there Dot nothing".split(' ');
// const result = []

// for(let i = 0;  i < words.length; i++){
//    let Upper = words[i][0].toUpperCase()
//    let remainWords = words[i].slice(1)
//    result.push(Upper.concat(remainWords))
// }

// console.log(result)

// let n = 5;

// for(let i = n; i >= 0; i--){
//   let str = "";
//   for(let j = i; j <= n; j++){
//     str += j
//     console.log(j)
//   }

//   console.log(str)
// }

// const arr = [1,2,3,4,1,2,3];
// const result = [];

// for(let i = 0; i < arr.length; i++){
//   let isDuplicate = false;
//   for(let j = i + 1; j < arr.length; j++){
//     if(arr[j] === arr[i]){
//       isDuplicate = true;
//       break;
//     }
//   }
//   console.log(isDuplicate)

//   if(!isDuplicate){
//        result.push(arr[i])
//   }
// }

// // console.log(arr.filter((val , i) => {
// //   return arr.indexOf(val) == i
// // }))

// console.log(result.sort())

//find the largest number

// let arr = "H ss ddddddd".split(' ');

// function secondLargest(arr) {
//   if (arr.length < 2) return -1;

//   let first = arr[0].length;
//   let second = arr[1].length;
//   if (second > first) {
//     [first, second] = [arr[1], arr[0]];
//   }

//   for (let i = 2; i < arr.length; i++) {
//     if (arr[i] > first) {
//       second = first;
//       first = arr[i];
//     } else if (arr[i] > second && arr[i] !== first) {
//       second = arr[i];
//     }
//   }
//   return second;
// }

// console.log(secondLargest(arr));

/*
1 Find the Largest Number: Write a function to find the largest number in an array without using the Math object.

Ans :
  let arr = [1,2,3,4,5];
  let max = -Infinity;
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i]
    }
  }
  
  console.log(max)

 
2 Find the Smallest Number: Write a function to find the smallest number in an array without using the Math object.
 
Ans :

    let arr = [1,2,3,4,5];
    let min = Infinity;
    
    for(let i = 0; i < arr.length; i++){
      if(min > arr[i]){
        min = arr[i]
      }
    }
    
    console.log(min)

    
3 Find the Nth Largest Number: Write a function to find the Nth largest number in an array.

Ans :

  const arr = [1,2,3,4,5,6];
  console.log(Math.max(...arr))

4 Find the Nth Smallest Number: Write a function to find the Nth smallest number in an array.

Ans :

  const arr = [1,2,3,4,5,6];
  console.log(Math.min(...arr))

 
5 Find the Sum of Array Elements: Write a function to calculate the sum of all elements in an array.

Ans :

   const arr = [1,2,3,4,5];
   
   console.log(arr.reduce((a, b) => {return a + b}))
   
   let sum = 0;
   for(let i = 0; i < arr.length; i++){
     sum += arr[i]
   }
   
   console.log(sum);


6 Find the Average of Array Elements: Write a function to calculate the average of all elements in an array.
 
Ans : 

   const arr = [1,2,3,4,5,6,7,8,9,10];
   
   function Average (arr) {
      if(arr.length == 0) return -1;
   
      let sum = arr.reduce((acc, va) => acc + va)
      let average = Math.floor(sum / arr.length);
      return average
   }
   
   console.log(Average(arr));


7 Find Even Numbers: Write a function to return an array containing only the even numbers from a given array.

Ans : 

  let arr = [1,2,3,4,5];
  let result = [];
  
  for(let i = 0; i < arr.length; i++){
     if((arr[i] & 1) === 0){
       result.push(arr[i])
     }
  }
  
  console.log(result)


8 Find Odd Numbers: Write a function to return an array containing only the odd numbers from a given array.
 
Ans :

   let arr = [1,2,3,4,5];
   let result = [];
   
   for(let i = 0; i < arr.length; i++){
      if((arr[i] & 1) !== 0){
        result.push(arr[i])
      }
   }
   
   console.log(result)

9 Find Duplicates: Write a function to find and remove duplicates from an array.
 
Ans :

  const arr = [1,2,3,4,5,1,2,3,4];
 
  console.log(Array.from(new Set(arr)))

  const map = new Map();
  
  function DuplicatesNumber (arr, map) {
    const result = [];
  
     if(arr < 1) return -1;
  
     for(let i = 0; i < arr.length; i++){
        let same = arr[i];
        if(map.has(same)){
          map.set(same, map.get(same) + 1)
        }else{
          map.set(same, 1);
        }
     }
  
     map.forEach((num, values) => {
       if(num > 1){
          result.push(values)
       }
     })
     return result
  }
  
  console.log(DuplicatesNumber(arr, map))


10 Find Prime Numbers: Write a function to return an array containing all prime numbers from a given array.
 
Ans :

   function PrimeNumber (arr) {
     let Prime = [];
     let isPrime = new Array(arr + 1).fill(true)
     isPrime[0] = isPrime[1] = false;
     if(arr < 2) return -1;  
     for(let i = 2; i * i <= arr; i++){
        if(isPrime[i]){
            for(let j = i * i; j <= arr; j += i){
              isPrime[j] = false;
            }
        }
     }
     for(let i = 2; i <= arr; i++){
       if(isPrime[i]){
         Prime.push(i)
       }
     }
     return Prime.includes(match)
   }
   console.log(PrimeNumber(arr));


11 Find Palindromes: Write a function to find and return all palindromic strings from an array of strings.

Ans :

    let words = "hello racecar".split(' ');
    let result = [];
   
    for(let i = 0; i < words.length; i++){  
      let reverse = words[i]
      if(reverse.split('').reverse().join('') === words[i]){
         result.push(words[i])
      }
    } 
   console.log(result);

12 Sort an Array: Implement a sorting algorithm (e.g., bubble sort or selection sort) to sort an array in ascending or descending order.


Ans : 
  

let arr = [1,23,3,-4]

function BubbleSorting (arr) {
  let result = arr;
  let swapped;

  do{ 

    swapped = false;

    for(let i = 0; i < result.length; i++){
      if(result[i] > result[i + 1]){
        let temp = result[i];
        result[i] = result[i + 1]
        result[i + 1] = temp 
        swapped = true
      }
    }
  }while(swapped);

  return result
}

console.log(BubbleSorting(arr))

13 Find Maximum Difference: Write a function to find the maximum difference between any two elements in an array.

Ans :

      function findMaxDifference (arr) {
      if(arr.length < 2) return null;
    
       let minElement = arr[0];
       let maxElement = arr[1] - arr[0];
    
       for(let i = 1; i < arr.length; i++){
         if(arr[i] - minElement > maxElement){
           maxElement = arr[i] - minElement
         }
    
         if(arr[i] < minElement){
          minElement = arr[i]
         }
       }
       return maxElement
       
    }
    
    const numbers = [7, 1, 5, 3, 6, 4];
    const maxDiff = findMaxDifference(numbers);
    console.log(maxDiff);


14 Find Second Most Common Element: Write a function to find the second most common element in an array.

Ans :

    let arr = [1,2,3,4,4,2,3,4,5];
    function isDuplicate (arr) {
     let result = [];
     let output;
     let map = new Map();
  
     for(let i = 0; i < arr.length; i++){
        let sum = arr[i];
        if(map.has(sum)){
          map.set(sum, map.get(sum) + 1);
        }else{
          map.set(sum, 1);
        }
     }
  
     map.forEach((number, value) => {
      // == 1 unique, > 0 all values without duplicate  > 1 give only duplicate
      console.log(number);
        if(number  > 1) {
          result.push(value)
        }
     })
  
   
  
     output = result.sort((a, b) => a - b).slice(-2)
     return output.sort((a, b) => b - a).slice(-1)
  }
  
  console.log(isDuplicate(arr))

15 Find Subarray with Largest Sum: Write a function to find the subarray with the largest sum in an array of numbers.

    function maxSubArraySum (arr) {
  if(arr.length < 2)  return -1;

  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];

  for(let i = 0; i < arr.length; i++){
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere)
  }
  return maxSoFar
}

// Driver code
var a = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log("Maximum contiguous sum is", maxSubArraySum(a));

*/

// let arr = 10;

// function PrimeNumber (arr) {

//   if(arr < 2) return -1;

//   let prime = [];
//   let isPrime = new Array(arr + 1).fill(true);

//   isPrime[0] = isPrime[1] = false;

//   for(let i = 2; i * i <= arr; i++){
//     if(isPrime[i]) {
//      for(let j = i * i; j < arr; j+=i){
//         isPrime[j] = false;
//      }
//     }
//   }

//   for(let i = 2; i <= arr; i++){
//     if(isPrime[i]){
//       prime.push(i);
//     }
//   }
//   return prime.includes(arr);
// }

// console.log(PrimeNumber(arr))

// let arr = 50;
// let match = 11

// function PrimeNumber (arr) {
//   let Prime = [];
//   let isPrime = new Array(arr + 1).fill(true)
//   isPrime[0] = isPrime[1] = false;

//   if(arr < 2) return -1;

//   for(let i = 2; i * i <= arr; i++){
//      if(isPrime[i]){
//          for(let j = i * i; j <= arr; j += i){
//            isPrime[j] = false;
//          }
//      }
//   }

//   for(let i = 2; i <= arr; i++){
//     if(isPrime[i]){
//       Prime.push(i)
//     }
//   }

//   return Prime.includes(match)
// }

// console.log(PrimeNumber(arr));

// let arr = [1,2,3,4,5];
// let k = 2;
// let rotate = [];

// for(let i = 0; i < arr.length; i++){
//   let check_Rotate = (i + k) % arr.length;
//   rotate[check_Rotate] = arr[i];
// }

// console.log(rotate);

// let arr = [1,2,3,4,5], k = 1;
// let result = [];

// for(let i = 0; i < arr.length; i++){
//   let rotate = (i + k) % arr.length
//   result[rotate] = arr[i];
// }

// console.log(result)

// let arr = [1,2,3,4,5];

// function findSecondLargest (arr){
//  let first = arr[0];
//  let second = arr[0];

//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] > first){
//       second = first;
//       first = arr[i]
//     }else if(arr[i] > second !== first){
//       second = arr[i]
//     }
//   }
//  return second

// }

// console.log(findSecondLargest(arr))

// let words = "Hello surya s eppdi iruka? daasssssssss kkkkkkkkkkkkkkkkkkkkkkkkkkkkk ".split(' ');

// // console.log(words.reduce((word, current) => {
// //   return current.length > word.length ? current : word
// // }))

// let s = ""
// let max = 0;

// for(let i = 0; i < words.length; i++){
//   console.log(words[i]);
//   let currentWords = words[i];
//   let currentLength = currentWords.length;

//   if(currentLength < max){
//     max = currentLength;
//     s = currentWords
//   }
// }

// console.log(s);

// const input = {
//    usd : 1122,
//    s : 3322
// }
// let result = Object.entries(input);

// console.log(result.map(([keys, values], i) => {
//   return `id : ${keys} , values : ${values} , index : ${i} `
// }))

// function areAnagrams(str1, str2) {
//   // Remove spaces and convert to lowercase
//   str1 = str1.replace(/\s/g, '').toLowerCase();
//   str2 = str2.replace(/\s/g, '').toLowerCase();

//   // Check if the lengths are the same
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   // Convert strings to arrays, sort them, and compare
//   const sortedStr1 = str1.split('').sort().join('');
//   const sortedStr2 = str2.split('').sort().join('');

//   console.log(sortedStr1, sortedStr2);

//   return sortedStr1 === sortedStr2;
// }

// // Example usage:
// const string1 = "listen";
// const string2 = "silent";

// if (areAnagrams(string1, string2)) {
//   console.log(`${string1} and ${string2} are anagrams.`);
// } else {
//   console.log(`${string1} and ${string2} are not anagrams.`);
// }

// let arr = [1,2,3,4,5];
// let result = [];

// function findSecondLargest (arr) {
//  let sortingArr = arr.sort();
//  if(sortingArr.length < 2) return -1;

//  let first = sortingArr[0];
//  let second = sortingArr[0];

//  for(let i = 0; i < sortingArr.length; i++){
//    if(sortingArr[i] > first){
//      second = first
//      first = sortingArr[i];
//    }else if(sortingArr[i] > second !== first){
//      second = sortingArr[i]
//    }
//  }
//  return second

//   if(arr.length < 2) return -1;

//   let first = arr[0];
//   let second = arr[0];
// }
// console.log(findSecondLargest(arr))

// console.log(arr.reduce((currentWords, current) => {
//   return current.length > currentWords ? currentWords : current
// }))

// let arr = [[1,2,3,4,-5], [10,20,-40,50], [100,-200,400]];
// let result = [];

// for(let i = 0; i < arr.length; i++){
//   let temp = arr[i][0];
//   for(let j = 0; j < arr[i].length; j++){
//     let current = arr[i][j];
//     if(temp <= current){
//       temp = current
//     }
//   }
//   result.push(temp)
// }

// console.log(result);

// let arr = [1,2,3,4,5,6];
// let k = 2;
// let result = [];

// for(let i = 0; i < arr.length; i++){
//    let rotate = (i + k) % arr.length;
//    result[rotate] = arr[i];
// }

// console.log(result);

// let word_1 = "listen", word_2 = "silent";
// let result = [];

// function isAnagram (word_1, word_2) {

//   if(word_1.length < word_2.length) return false;

//   let compare_1 = word_1.split('').sort().join('');
//   let compare_2 = word_2.split('').sort().join('');
//   console.log(compare_1, compare_2)

//   if(compare_1 === compare_2) return true;
// }

// console.log(isAnagram(word_1, word_2))

// let obj = [{
//   usd : 12,
//   inr : 3000
// }]

// let arr = Object.entries(obj);
// let result = [];

// console.log(arr.map(([key, value], i) => {
//   return `id : ${key} value : ${value} index : ${i}`
// }));

// let s = "anagram", t = "nagaram"

// function isAnagram (s , t) {
//   if(s.length < t.length) return false;

//   let word_1 = s.split('').sort().join('');
//   let word_2 = t.split('').sort().join('');

//   if(word_1 == word_2) return true;

// let freq = new Array(26).fill(0);
// for(let i = 0; i < s.length; i++){
//     freq[s.charCodeAt(i) - "a".charCodeAt(0)]++;
//     freq[t.charCodeAt(i) - "a".charCodeAt(0)]--;
// }
// for(let i = 0; i < freq.length; i++){
//     if(freq[i] !== 0) return false;
// }
// return true
// }

// console.log(isAnagram(s, t));

// let words = "hello    world     epdi iruka   s he".split(" ");
// let result = [];

// for (let i = 0; i < words.length; i++) {
//   result.push(words[i].length);
// }

// console.log(...result.slice(-1));

// function areBracketsClosed(str) {
//   const stack = [];
//   const bracketPairs = {
//     "{": "}",
//     "[": "]",
//     "(": ")"
//   };

//   for (let char of str) {
//     if (bracketPairs[char]) {
//       stack.push(char);
//     } else {
//       const lastOpenBracket = stack.pop();
//       if (bracketPairs[lastOpenBracket] !== char) {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// }

// let stack = [];

// function areBracketsClosed (arr) {
//    let bracketPairs = {
//      "{" : "}",
//      "[" : "]",
//      "(" : ")"
//    }

//    for(let char of arr){
//      console.log(char)
//      if(bracketPairs[char]){
//        stack.push(char)
//      }else {
//        const lastOpenBracket = stack.pop();
//        if(bracketPairs[lastOpenBracket] !== char) return false
//      }
//    }
// }

// Example usage:

// function areBracketsClosed (arr) {
//     console.log(arr);

//     let bracketPairs = {
//        "{" : "}",
//        "[" : "]",
//        "(" : ")"
//     }

//     for(let char of arr){
//       if(bracketPairs[char]){
//         stack.push(char)
//       }else {
//         const lastOpenBracket = stack.pop();
//         if(bracketPairs[lastOpenBracket] !== char) return false;
//       }
//     }
// }

// const inputString = "{{}}";

// if (areBracketsClosed(inputString)) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// function areBracketsClosed(bracket) {
//   let stack = [];

//   let bracketPairs = {
//     "{": "}",
//     "(": ")",
//     "[": "]",
//   };

//   for (let char of bracket) {
//     if (bracketPairs[char]) stack.push(char);
//     else {
//       let lastOpenBracket = stack.pop();
//       if (bracketPairs[lastOpenBracket] !== char) return false;
//     }
//   }
//   console.log(stack.length);
//   return stack.length === 0;
// }

// let bracket = "{{}}[]{}";

// console.log(areBracketsClosed(bracket));

//find the second number and which common in second;

// function maxSubArraySum(arr) {
//   let maxSoFar = arr[0];
//   let maxEndingHere = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
//     console.log(maxEndingHere);
//     maxSoFar = Math.max(maxSoFar, maxEndingHere);
//   }

//   return maxSoFar;
// }

// function maxSubArraySum (arr) {
//   if(arr.length < 2)  return -1;

//   let maxSoFar = arr[0];
//   let maxEndingHere = arr[0];

//   for(let i = 0; i < arr.length; i++){
//     maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
//     maxSoFar = Math.max(maxSoFar, maxEndingHere)
//   }
//   return maxSoFar
// }

// // Driver code
// var a = [-2, -3, 4, -1, -2, 1, 5, -3];
// console.log("Maximum contiguous sum is", maxSubArraySum(a));

// function findNthLargest(arr, n) {
//   const sortedArr = arr.sort((a, b) => a - b);
//   return sortedArr[n - 1];
// }

// const arr = [1, 2, 3, 4, 5, 6];
// const nthLargest = findNthLargest(arr, 3);
// console.log(nthLargest);

// function findNthSmallest(arr, n) {
//   const sortedArr = arr.sort((a, b) => a - b);
//   return sortedArr[n - 1];
// }

// // const arr = [1, 2, 3, 4, 5, 6];
// // const nthSmallest = findNthSmallest(arr, 3);
// console.log(findNthSmallest(arr, 3));

// function findNthLargest (arr, k) {
//   const sorting = arr.sort((a, b) => b - a);
//   return sorting[k - 1]
// }

// let arr = [7, 10, 4, 3, 20, 15];
// let k = 3;

// console.log(findNthLargest(arr, k));

// let arr = [1,4,2,5,6];
// let max = Infinity;

// console.log(arr.sort((a, b) => b - a).slice(-1))
// console.log(Math.min(...arr));

// for(let i = 0; i < arr.length; i++){
//    if(arr[i] < max){
//       max = arr[i]
//    }
// }
// console.log(max);

// let arr = [1,2,3,-2,5];
// let sum = 0;
// let result = []

// for(let i =0; i < arr.length; i++){
//   sum += arr[i]
// }

// console.log(sum);

// let arr = [1,2,3,4,5];
// let even = [];

// for(let i = 0; i < arr.length; i++){
//   if((arr[i] & 1) !== 0){
//     even.push(arr[i])
//   }
// }
// console.log(even);

// let arr = [1,2,1,4,5];
// let position;
// let k = 1;

// for(let i = 0; i < arr.length; i++){
//    if(arr[i] === k) {
//      position = i ;
//    }
// }

// console.log(position);

// let n = 5;
// let factorial = 1;

// for(let i = 2; i <= n; i++){
//     factorial *= i
// }
// console.log(factorial)

// let words = "The word is not Working Properly".split(' ');
// let LongestWords = "";

// for(let i = 0; i < words.length; i++){
//   let wordsLength = words[i].length;
//   if(wordsLength > LongestWords.length){
//     LongestWords = words[i];
//   }
// }

// console.log(LongestWords);

// let vowelsWords = "The hero surya".split('');
// let count = 0;
// let vowels = "aeiou";

// for(let i = 0; i < vowelsWords.length; i++){
//   if(vowels.includes(vowelsWords[i])){
//     count ++;
//   }
// }

// console.log(count);

// let word = "loops";
// let reverse = word.split('').reverse().join('');
// console.log(reverse);

// function Palindromes (word) {
//   for(let i = 0; i < word.length; i++){
//     if(word == reverse){
//      return true;
//     }else{
//       return false
//     }
//   }
// }

// console.log(Palindromes(word));

// let arr = [1,2,3,-5,7,9];
// let maxSoFar = arr[0];
// let maxEndingHere = arr[0];

// for(let i = 1; i < arr.length; i++){
//    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
//    maxSoFar = Math.max(maxSoFar , maxEndingHere);
// }

// console.log(maxSoFar)

// let sum = 0;

// for(let i = 0; i < arr.length; i++){
//    sum += arr[i];
// }

// console.log(sum);

// let arr = [1,2,3,1,3,4,5];

// console.log(arr.filter((values, i) => {
//    return arr.indexOf(values) !== i
// }));

// let arr_1 = [1,2,3,4,5];
// let arr_2 = [1,2,3,4,5];

// let words_1 = ["s", "d", "k", "g"];
// let words_2 = ["g", "k", "d", "s"];

// let i = 0;
// let j = 0;
// let k = 0;
// let m = 0;
// let result = [];
// let output = [];

// while (i < words_1.length || j < words_2.length) {
//   if (i < words_1.length) {
//     result.push(words_1[i]);
//     i++;
//   }
//   if (j < words_2.length) {
//     result.push(words_2[j]);
//     j++;
//   }
// }

// console.log(result);

// while(k < arr_1.length && m < arr_2.length){
//   if(arr_1[k] < arr_2[m]){
//       output.push(arr_1[k]);
//       k++
//   }else{
//     output.push(arr_2[k]);
//     m++
//   }
// }

// console.log(output);

// let arr = [1,2,3,4], k = 1;
// let result = [];
// for(let i = 0; i < arr.length; i++){
//   let rotate = (i + k) % arr.length
//   result[rotate] = arr[i];
// }

// console.log(result);

// let words = "codekata".split('');
// let vowels = "aeiou";
// let result = [];

// for(let i = 0; i < words.length; i++){
//   console.log(words[i]);
//   if(!vowels.includes(words[i])){
//      result.push(words[i])
//   }
// }

// console.log(result.reverse().join(''));

// let arr = [1, 2, 3, 4,5];

// function isPrime(arr) {
//   let result = [];

//   if (arr.length < 2) return -1;

//   for (let i = 2; i <= Math.sqrt(arr); i++) {
//     if(arr[i] % i === 0) return false;
//   }
//   return true
// }

// function FindPrime (arr) {
//   return arr.filter((num) => (isPrime(num)))
// }

// console.log(FindPrime(arr))

// function isPrime(num) {
//   if (num < 2) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// function FindPrime(arr) {
//   return arr.filter((num) => isPrime(num));
// }

// console.log(FindPrime(arr));

// let arr = [1,2,3,4,5];

// function isPrime (arr) {

//   if(arr.length < 2) return -1;

//   for(let i = 2; i <= Math.sqrt(arr); i++){
//      if(arr % i === 0) return false;
//   }
//   return true;
// }

// if(isPrime(arr)){
//  console.log('it is prime number');
// }else{
//   console.log('it not prime number');
// }

// console.log(arr);

// function isPrime(num) {
//   if (num < 2) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// for (let i = 0; i < arr.length; i++) {
//   if (isPrime(arr[i])) {
//     console.log(`${arr[i]}`);
//   } else {
//     console.log(`${arr[i]} is not a prime number`);
//   }
// }

// let arr = 12;

// function FindPrimeNumber(arr) {
//   if (arr < 2) return -1;

//   let isPrime = new Array(arr + 1).fill(true);
//   isPrime[0] = isPrime[1] = false;

//   let Prime = [];

//   for (let i = 2; i <= arr; i++) {
//     if (isPrime[i]) {
//       for (let j = i * i; j <= arr; j += i) {
//         isPrime[j] = false;
//       }
//       Prime.push(i);
//     }
//   }

//   for (let i = 2; i < arr; i++) {
//     if (isPrime[i]) {
//       Prime.push(i);
//     }
//   }

//   return Prime.includes(arr);
// }

// console.log(FindPrimeNumber(arr));

// let arr = [1, 2, 3, 4];
// let result = [];

// for (let i = 0; i < arr.length - 1; i += 2) {
//   result.push(arr[i + 1], arr[i]);
// }

// console.log(result);

// let swap = "words"
// let words = "";

// for(let i = 0; i < swap.length; i ++){
//   words += swap[i + 1] + swap[i]
// }

// console.log(words);

// for(let i = 0; i < arr.length; i++){
//   if((arr[i] & 1) !== 0){
//     result.push(arr[i])
//   }
// }

// console.log(result);

// for(let i = 0; i < arr.length - 1; i ++){
//   result.push(arr[i + 1] , arr[i])
// }

// console.log(result);

// let words = "He".split('');
// let output = "";

// for(let i = 0; i < words.length; i += 2){
//   output += words[i + 1] + words[i]
// }

// console.log(output);

// let arr = 5;
// let result = 1;

// for(let i = 2; i <= arr; i++){
//   result *= i
// }

// console.log(result);

// let arr = [1,2,3,4,5,6];
// let even = 0;
// let odd = 0

// for(let i = 0; i < arr.length; i++){
//   if(arr[i] % 2 === 0){
//     even += arr[i];
//   }else{
//     odd += arr[i];
//   }
// }

// console.log(even);
// console.log(odd);

// find the longest sequence

// let arr = [1, 3, 5, 4, 7];

// let count = 0,
//   result = 0;

// function LongestSubSequence(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[i + 1]) {
//       count++;
//       result = Math.max(result, count);
//     } else {
//       count = 0;
//     }
//   }
//   return result > 0 ? result + 1 : 1;
// }

// console.log(LongestSubSequence(arr));

// let arr = [1,-3,4,5,-2,5,-1,-4,2,-3,6];

// function LongestSubArray (arr) {
//    if(arr < 1) return '-1';

//    let result = 0;

//    for(let i = 0; i < arr.length; i++){
//       result += arr[i]
//    }
//    return result
// }

// console.log(LongestSubArray(arr));

// let arr = [1,2,3,1,2,4]

// console.log(arr.filter((data, i) => {
//   return arr.indexOf(data) !== i
// }))

// let arr = 5;

// function isPrime (arr) {
//   if(arr.length < 2) return false;

//   let result = [];
//   let Prime = new Array(arr + 1).fill(true);

//   for(let i = 2; i <= arr; i++){
//     if(Prime[i]){
//       for(let j = i * i; j <= arr; j += i){
//          Prime[j] = false;
//       }
//     }
//     result.push(i);
//   }

//   for(let i = 2; i < arr; i++){
//     if(Prime[i]){
//       result.push(i)
//     }
//   }

//   return result.includes(arr)
// }

// console.log(isPrime(arr));

// let words = "level Hello racecar world Deed".toLowerCase().split(' ');

// function LongestPalindrome(words) {
//   if (words.length < 2) return false;

//   let result = [];

//   for (let i = 0; i < words.length; i++) {
//     let reversedWords = words[i].split("").reverse().join("");
//     if (words[i].includes(reversedWords)) {
//       result.push(words[i]);
//     }
//   }
//   return result.sort().slice(-1);
// }

// console.log(LongestPalindrome(words));

// let arr_1 = [1,2,3,4];
// let arr_2 = [1,2,3,4];

// let result = [...arr_1, ...arr_2];

// console.log(result.sort());

// let output = [];

// for(let i = 0; i < arr_1.length; i++){
//    if(arr_1[i] > arr_2[i]){
//     output.push(arr_1[i]);
//    }
//    for(let j = 0; j < arr_2[j]; j++){
//     if(arr_1[i] > arr_2[j]){
//       output.push(arr_2[j]);
//     }
//    }
// }

// console.log(output);

// let i = 0;
// let j = 0;
// let k = 0;
// let m = 0;
// let result = [];
// let output = [];

// let arr_1 = [1,2,3,4,5];
// let arr_2 = [1,2,3,4,5];

// while (i < words_1.length || j < words_2.length) {
//   if (i < words_1.length) {
//     result.push(words_1[i]);
//     i++;
//   }
//   if (j < words_2.length) {
//     result.push(words_2[j]);
//     j++;
//   }
// }

// console.log(result.join(''));

// while(k < arr_1.length && m < arr_2.length){
//     if(arr_1[k] <= arr_2[m]) {
//         result.push(arr_1[k])
//         k++
//     }else{
//         result.push(arr_2[m])
//         j++
//     }
// }

// console.log(result);

// let words_1 = ["s", "d", "k", "g"];
// let words_2 = ["g", "k", "d", "s"];

// let arr_1 = [1,2,3,4,5];
// let arr_2 = [1,2,3,4,5];
// let result = [];

// let k = 0;
// let m = 0;

// while(k < arr_1.length && m < arr_2.length){
//   if(arr_1[k] < arr_2[m]){
//      result.push(arr_1[k]);
//      k++;
//   }else{
//     result.push(arr_2[m]);
//     m++;
//   }
// }

// console.log(result);

// while(k < words_1.length || m < words_2.length){
//   if(words_1[k] <= words_2[m]){
//     result.push(words_1[k]);
//     k++;
//   }else{
//     result.push(words_2[m]);
//     m++
//   }
// }

// console.log(result.join(''));

// let words = "The world is not goodsssssss".split(' ');
// let LongestWords = ' ';

// for(let i = 0; i < words.length; i++){
//   let length = words[i].length;
//   if(length > LongestWords.length){
//     LongestWords = words[i];
//   }
// }

// console.log(LongestWords);

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let k = 0;
// let m = 0;
// let result = [];
// let words_1 = ["s", "d", "k", "g"];
// let words_2 = ["g", "k", "d", "s"];

// while(k < arr1.length && m < arr2.length){
//   if(arr1[k] <= arr2[m]){
//     result.push(arr1[k]);
//     k++
//   }else{
//     result.push(arr2[m]);
//     m++;
//   }
// }

// console.log(result);

// let climb = 7;
// let prev1 = 1;
// let prev2 = 1;
// let current;

// for (let i = 2; i <= climb; i++) {
//   current = prev1 + prev2;
//   prev1 = prev2;
//   prev2 = current;
// }

// console.log(current);

// let arr = [1,2,3,4];

// function BinarySearch (arr) {
//   if(arr.length < 2) return -1;

//   let left = 0;
//   let right = arr.length -1;

//   while(left < right){
//     let mid = Math.floor((arr.length)  / 2);

//     if(arr[mid] > arr[mid + 1]){
//       return arr[mid];
//     }
//     else if(arr[mid] > arr[right]){
//       left = mid + 1;
//     }else{
//       right = mid;
//     }
//   }

//   return arr[left]
// }

// console.log(BinarySearch(arr));

// let arr = [1, 2, 3, 4,-4,10];

// function BinarySearch(arr) {
//   if (arr.length < 2) return -1;

//   let sort = arr.sort();

//   let left = 0;
//   let right = sort.length - 1;

//   for (let i = 0; i < sort.length; i++) {
//     let mid = Math.floor((sort.length) / 2);

//     if(arr[mid] > arr[right]){
//       left = mid + 1;
//     }else{
//       right = mid;
//     }
//   }
//   return arr[left];
// }

// console.log(BinarySearch(arr));

// let arr = [1, 2, 3, 4];

// function BinarySearch(arr) {
//   if (arr.length < 2) return -1;

//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     let mid = Math.floor((left + right) / 2);

//     if (arr[mid] > arr[mid + 1]) {
//       return arr[mid];
//     } else if (arr[mid] > arr[right]) {
//       left = mid + 1;
//     } else {
//       right = mid;
//     }
//   }

//   return arr[left];
// }

// console.log(BinarySearch(arr));

// let arr_1 = [1,2,3,4,5];
// let arr_2 = [6,7,8,9,10];

// function MergeArr (arr_1, arr_2) {
//   let result = [];
//   let n = 0;
//   let k = 0;

//   while(n < arr_1.length && k < arr_2.length){
//     if(arr_1[n] <= arr_2[k]){
//       result.push(arr_1[n]);
//       n++
//     }else{
//       result.push(arr_2[k])
//       k++
//     }
//   }
//   return result;
// }

// console.log(MergeArr(arr_1, arr_2))

// let i = 0;
// let j = 0;
// let result = [];

// let arr_1 = [1,2,3,4,5];
// let arr_2 = [6,7,8,9,10,11];

// while (i < arr_1.length && j < arr_2.length) {
//   if (i < arr_1.length) {
//     result.push(arr_1[i]);
//     i++;
//   }
//   if (j < arr_2.length) {
//     result.push(arr_2[j]);
//     j++;
//   }
// }

// console.log(result.join(''));

// let output = [];
// let words_1 = ["s", "d", "k", "g"];
// let words_2 = ["g", "k", "d", "s"];
//
//  let arr = [1,2,3,4,10,33,-1];

// function BinarySearch (arr) {
//   let Sorting = arr.sort();
//   let [left, right] = [0, Sorting.length -1];

//   while(left < right) {
//     let mid = Math.floor((left + right) / 2);
//     if(Sorting[mid] > Sorting[right]){
//       left = mid + 1;
//     }else{
//       right = mid;
//     }
//   }
//   return arr[left]
// }

// console.log(BinarySearch(arr))

// let arr = [1,2,-3,-4,5];

// function minvalue (arr) {

//   let sum = 0;
//   let min = 1;

//   for(let num of arr){
//     sum += num;
//     min = Math.min(sum, min)
//   }
//   if(min > 0) return 1;

//   return (-1 * min + 1)
// }

// console.log(minvalue(arr))

// let arr = [1,-1,1];

// console.log(arr.reduce((acc, curr) => acc + curr))

// let arr = [1,2,3,4,50000, -4];

// function BubbleSorting (arr) {
//   let left = 0;
// let right = arr.length - 1;

// while(left < right){
//   let mid = Math.floor((left + right) / 2);
//   console.log(mid);

//   if(arr[mid] > arr[right]){
//     left = mid + 1
//   }else{
//     right = mid;
//   }
// }
//  return arr[left]

// }

// console.log(BubbleSorting(arr));

// let arr = [1, 2, 3, 4, 5,11];
// let prime = [];

// function isPrime (num) {
//   if(num < 2) return false;

//   for(let i = 2; i <= Math.sqrt(num); i++){
//     if(num % i === 0) return false;
//   }
//   return true
// }

// arr.forEach((num) => {
//   if(isPrime(num)) prime.push(num)
//   else prime.push(false)
// })

// console.log(prime);

// let arr = [1, 2, 3, 4, 5,11];
// let prime = [];

// function isPrime (arr) {
//   if(arr < 2) return false
//   for(let i = 2; i <= Math.sqrt(arr); i++){
//     if(arr % i === 0) return false;
//   }
//   return true;
// }

// arr.forEach((num) => {
//   if(isPrime(num)) prime.push(num)
// })

// console.log(prime);

// let arr = [1,5,3,4,2];
// let result = [];

// function PrimeNumber (arr) {
//   if(arr < 2) return false;

//   for(let i = 2; i <= Math.sqrt(arr); i++){
//     if(arr % i === 0) return false
//   }
//   return true;
// }

// arr.map((item) => {
//   if(PrimeNumber(item)) result.push(item);
// })

// console.log(result.sort());

// let n = 5;

// for (let i = n; i >= 0; i--) {
//   let str = " ";
//   for (let j = i; j < n; j++) {
//     str += '* '
//   }
//   console.log(str);
// }

// let n = 4;
// let fib = [0,1];

// for(let i = 2; i < n; i++){
//   fib[i] = fib[i - 1] + fib[i - 2];
// }

// console.log(fib);

// function hourglassSum(arr) {
//   const hourglassSums = [];

//   for (let i = 0; i < 4; i++) {
//       for (let j = 0; j < 4; j++) {
//           const sum = (
//               arr[i][j] + arr[i][j + 1] + arr[i][j + 2] +
//               arr[i + 1][j + 1] +
//               arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
//           );

//           hourglassSums.push(sum);
//       }
//   }

//   const maxSum = hourglassSum
//   return maxSum;
// }

// // Test case
// const inputArray = [
//   [1, 1, 1, 0, 0, 0],
//   [0, 1, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 0],
//   [0, 0, 2, 4, 4, 0],
//   [0, 0, 0, 2, 0, 0],
//   [0, 0, 1, 2, 4, 0]
// ];

// const largestHourglassSum = hourglassSum(inputArray);
// console.log(largestHourglassSum);

// let arr = [1,2,3,4,5,6];
// let result = [];

// function isPrimeNumber (arr) {

//   if (arr < 2) return false;

//   for(let i = 2; i < Math.sqrt(arr); i++) {
//     if(arr % i == 0) return false;
//   }
//   return true;
// }

// for(let i = 0; i < arr.length; i++){
//    if(isPrimeNumber(arr[i])){
//     result.push(arr[i])
//    }
// }

// console.log(result);

// let word_1 = "slient";
// let word_2 = "lients";

// function isAnagram (word_1, word_2) {
//   if(word_1.length !== word_2.length) return false;

//    let arr_1 = word_1.split('').sort().join('');
//    let arr_2 = word_1.split('').sort().join('');

//    return arr_1 === arr_2;
// }

// console.log(isAnagram(word_1, word_2));

// let  arr = [1,2,3,4,5,6,7,8];

// function Check (arr) {
//   let result = 0;
//   // let i = 0;

//   while(arr.length > 1){
//     result = arr.reduce((a, b) => +a  +  +b);
//     arr = result.toString().split('')
//   }
//   return result
//   // return result.toString().split('').map(Number).reduce((a, b) => a + b)
// }

// console.log(Check(arr))

// function areBracketsClosed(bracket) {
//   let stack = [];

//   let bracketPairs = {
//     "{": "}",
//     "(": ")",
//     "[": "]",
//   };

//   for(let char of bracket){
//     if(bracketPairs[char]) stack.push(char);
//     else{
//       let lastOpenBracket = stack.pop();
//       if(bracketPairs[lastOpenBracket] !== char) return false;
//     }
//   }

//   return stack.length === 0;
// }

// let bracket = "{{}}[]{[]}";
// console.log(areBracketsClosed(bracket));

// function BracketParis (pairs) {
//   let stack = [];

//   let bracketPairs = {
//       "{" : "}",
//       "[" : "]",
//       "(" : ")"
//   }

//   for(let char of pairs) {
//     if(bracketPairs[char]) stack.push(char);
//     else{
//       let lastOpenBracket = stack.pop();
//       if(bracketPairs[lastOpenBracket] !== char) return false;
//     }
//   }

//   return stack.length === 0;
// }

// let pairs = "{}{}[]"
// console.log(BracketParis(pairs));

// let sum = 1;
// let n = 5;
// for(let i = 2; i <= n; i++){
//   sum *= i
// }

// console.log(sum);

// let arr = [1,2,3,4,5];

// let result = arr.reduce((a, b) => a + b).toString().split('')
// console.log(result);
// let totalAddition = 0;

// for(let i = 0; i < result.length; i++){
//   let add = result[i].toString().split('').map(Number);
//   console.log(add);
//   totalAddition = add
// }

// console.log(totalAddition);

// let arr = [1,2,3,4,5];

// let result = arr.reduce((acc, ind, i) => {
//    return {...arr, [ind] : i}
// }, {arr})

// console.log(result);

// let obj = {
//   "usd" : 334,
//   "inr" : 213
// }

// let output = Object.entries(obj).reduce((acc, ind, i) => {
//     return `index ${acc[0]}, keys : ${ind[1]}, values : ${i}`
// })

// console.log(output);

// let arr = [[1,2,3,4], [1,2,3,4], [4,5,7]];

// console.log([].concat(...arr));
// console.log(arr.reduce((acc, cur) => acc.concat(cur), []))

// const data = new Promise((res, rej) => {
//   res(10)
// })

// console.log(data);

// function PossibleSub (arr) {
//    let result = [[]];

//   // function Recursion (index, currArr) {
//   //   for(let i = index; i < arr.length; i++){
//   //     currArr.push(arr[i]);
//   //     result.push([...currArr])
//   //   }
//   // }
//   // Recursion(0, []);

//   let curr = [];

//    for(let i = 0; i < arr.length; i++){
//     curr.push(arr[i]);
//     result.push([...curr])
//    }

//   return result;
// }

// let arr = [0,1];
// console.log(PossibleSub(arr));

// function isBracket (bracket) {
//    let result = [];
//    let stack = {
//      "(" : ")",
//      "{" : "}",
//      "[" : "]"
//    }

//    for(let char of bracket){
//      if(stack[char]) result.push(char);
//      else {
//         let lastOpenBracket = result.pop()
//         if(stack[lastOpenBracket] !== char) return false;
//      }
//    }
//    return result.length === 0;
// }
// let bracket = "[[[[[]]]]]";
// console.log(isBracket(bracket));

// let arr = [1,2,3,4,5];
// let result = [];

// for(let i = 0; i < arr.length; i++){
//   if((arr[i] & 1) !== 0){
//     result.push(arr[i])
//   }
// }

// console.log(result);

// let arr = [1,2,3,4,5,6];

// function BinarySearch (arr) {
//     let left = 0;
//     let right = arr.length -1;

//     while(left > right){
//       let mid = Math.floor((left + right) / 2);

//       if(arr[mid] < right[mid]){
//         left = mid + 1;
//       }else{
//          left = mid
//       }
//     }
//     return arr[left]
// }

// console.log(BinarySearch(arr));

// let arr = [0,1,2,5,6];

// function findSecondLargest (arr) {

//   if(arr.length < 2) return -1;

//   let first = arr[0];
//   let second = arr[1];

//   // if(second > first){
//   //   [first, second] = [second, first];
//   // }

//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] < first) {
//       second = first;
//       first = arr[i];
//     }else if(arr[i] < second && arr[i] !== first){
//       second = arr[i];
//     }
//   }
//   return second
// }

// console.log(findSecondLargest(arr));

// let word = "sam sssssss kkkkkkkkkkk".split(' ');

// function findSecondLargestWords (word) {
//     if(word.length < 2) return -1;
//     let words = " ";

//     // let first = word[0];
//     // let second = word[1];

//     // for(let i = 0; i < word.length; i++){
//     //   if(word[i].length > first.length){
//     //     second = first;
//     //     first = word[i];
//     //   }else if (word[i].length > second.length && word[i].length !== first.length) {
//     //     second = word[i];
//     //   }
//     // }
//     // return second

//      for(let i = 0; i < word.length; i++){
//         let totalLength = word[i].length;
//         if(totalLength > word.length){
//           words = word[i];
//         }
//      }
//      return words
// }

// console.log(findSecondLargestWords(word))

// let words = [1,2,3,4,5,33,-1,0,10];

// function LongestWords (words) {
//    if(words.length < 2) return -1;

//    let first = words[0];
//    let second = words[1];

//    for(let i = 0; i < words.length; i++){
//      if(words[i] < first){
//       second = first;
//       first = words[i];
//      }else if (words[i] < second && words[i] !== first){
//         second = words[i]
//      }
//    }
//    return second;
// }

// console.log(LongestWords(words));

// let arr = [1,2,3,4,5];
// let k = 2;
// let res = [];

// for(let i = 0; i < arr.length; i++){
//    let rotate = Math.floor((i + k) % arr.length);
//    res[rotate] = arr[i];
// }

// console.log(res);

// let word = "racecar"

// function isPalindrome (word) {

//   let str = word.toLowerCase().replace(/[\W]/g , "");

//   let checkingWord = str.split('').reverse().join('');

//   if(word === checkingWord) return true;

//   return false;

// }

// console.log(isPalindrome(word))

// let arr = [1,2,3,4,5];
// let target = 4

// function BinarySearch (arr) {
//     let left = 0;
//     let right = arr.length -1;

//     for(let i = 0; i < arr.length; i++){
//      let mid = Math.floor((left + right) / 2);
//       if(arr[mid] === target){
//          return mid
//       }else if(arr[mid] > arr[right]){
//         left = mid + 1;
//        }else {
//         left = mid - 1;
//        }
//     }
//     return arr[left];
// }
// console.log(BinarySearch(arr))

// let arr = [1,2,3,4,5,6];
// let target = 4;

// function BinarySearch (arr, target) {
//     let left = 0;
//     let right = arr.length -1;

//     while (left <= right) {
//       let mid = Math.floor((left + right) / 2);

//       if (arr[mid] === target) {
//           return mid; // Found the target, return its index
//       } else if (arr[mid] < target) {
//           left = mid + 1; // Target is in the right half
//       } else {
//           right = mid - 1; // Target is in the left half
//       }
//   }

//   return -1; //
// }

// console.log(BinarySearch(arr, target));

// let arr = [1,5,3,4,2];
// let result = [];

// function PrimeNumber (arr) {
//   if(arr < 2) return false;

//   for(let i = 2; i <= Math.sqrt(arr); i++){
//     if(arr % i === 0) return false
//   }
//   return true;
// }

// let s = arr.map((item) => {
//   if(PrimeNumber(item)) result.push(item);
// })

// console.log(s);

// let a = 5;
// let b = 3;
// let result = 0;

// // Perform multiplication using repeated addition
// for (let i = 0; i < b; i++) {
//     result += a;
// }

// console.log(`The result of ${a} multiplied by ${b} is: ${result}`);

// let arr = 5

// function isPrimeNumber (arr) {
//   console.log(arr);
//    if(arr < 2) return false;
//    for(let i = 2; i <= Math.sqrt(arr); i++){
//      if(arr % i === 0) {
//       return false
//      }
//    }
//    return true;
// }

// let output = []

// function Check (arr) {
//   for(let i = 0; i < arr.length; i++){
//     if(isPrimeNumber(arr[i])){
//       output.push(arr[i])
//     }
//   }
//   return output.includes(arr);
// }

// console.log(Check(arr))

// function isIsomorphic(s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }

//   const sToTMap = new Map();
//   const tToSMap = new Map();

//   for (let i = 0; i < s.length; i++) {
//     const charS = s[i];
//     const charT = t[i];

//     console.log(charS, charT);

//     if (!sToTMap.has(charS)) {
//       sToTMap.set(charS, charT);
//     } else {
//       if (sToTMap.get(charS) !== charT) {
//         return false;
//       }
//     }

//     if (!tToSMap.has(charT)) {
//       tToSMap.set(charT, charS);
//     } else {
//       if (tToSMap.get(charT) !== charS) {
//         return false;
//       }
//     }
//   }

//   return true;
// }

// function isIsomorphic (s, t) {
//    if(s.length !== t.length) return false;

//    let sToTMap = new Map();
//    let tToSMap = new Map();

//    for(let i = 0; i < s.length; i++){
//       let S1 = s[i];
//       let T1 = t[i];

//       console.log(S1, T1);
//       if(!sToTMap.has(S1)){
//         sToTMap.set(S1, T1);
//       }else{
//         if(sToTMap.get(S1) !== T1){
//           return false;
//         }
//       }

//       if(!tToSMap.has(T1)){
//         tToSMap.set(T1, S1);
//       }else{
//         if(tToSMap.get(T1) !== S1){
//            return false;
//         }
//       }
//    }
//    return true;
// }

// let s = "aab";
// let t = "xxy";

// console.log(isIsomorphic(s, t));

// function isomorphic (s, t) {
//   if(s.length !== t.length) return "no";

//   let sToMap = new Map();
//   let tToMap = new Map();

//   for(let i = 0; i < s.length; i++){
//      let S1 = s[i];
//      let T1 = t[i];

//      if(!sToMap.has(S1)){
//          sToMap.set(S1, T1);
//      }else{
//          if(sToMap.get(S1) !== T1){
//              return "no";
//          }
//      }

//      if(!tToMap.has(T1)){
//          tToMap.set(T1, S1);
//      }else {
//          if(tToMap.get(T1) !== S1){
//              return "no";
//          }
//      }
//   }

//   return "yes";
// }

// let userInput = ["aab xoy"]
// let [s, t] = userInput[0].split(' ');
// console.log(s,t);
// console.log(isomorphic(s, t));

// function isIs2jo,khgv bbv

// function isIsomorphic(s, t) {
//   if (s.length !== t.length) return false;

//   let sToMap = new Map();
//   let tToMap = new Map();

//   for (let i = 0; i < s.length; i++) {
//     let s1 = s[i];
//     let t1 = t[i];

//     if (!sToMap.has(s1)) {
//       sToMap.set(s1, t1);
//     } else {
//       if (sToMap.get(s1) !== t1) {
//         return false;
//       }
//     }

//     if (!tToMap.has(t1)) {
//       tToMap.set(t1, s1);
//     } else {
//       if (tToMap.get(t1) !== s1) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// let s = "sdt";
// let t = "agb";
// console.log(isIsomorphic(s, t));

// let word = "The word is f not coming ddddddddddddddd".split(' ');
// let LongestWords = " ".repeat(100);

// for(let i = 0; i < word.length; i++){
//   let LongWord = word[i].length;
//   if(LongWord < LongestWords.length){
//     LongestWords = word[i];
//   }
// }

// console.log(LongestWords)

// let [m, n] = [3,3];
// let arr = [[1,2,3], [4,5,6],[7,8,9]];

// function TwoMatrix (arr, m, n) {
//    let top = 0;
//    let left = 0;
//    let right = m - 1;
//    let bottom = n - 1;
//    let result = [];

//    while(left <= right && top <= bottom){
//     for(let  i = left; i <= right; i++){
//         result.push(arr[top][i])
//     }
//     top ++

//     for(let i = top; i <= bottom; i++){
//       result.push(arr[i][right]);
//     }
//     right --;

//     for(let  i = right; i >= left; i--){
//       result.push(arr[bottom][i]);
//     }
//     bottom --;

//     for(let i = bottom; i >= top; i--){
//       result.push(arr[i][left]);
//     }
//     left ++;
//    }
//    return result;
// }

// console.log(TwoMatrix(arr,m, n))

// let n = 3;

// function SpiralMatrix (n) {
//    let arr = new Array(n).fill(0).map(() => new Array(n).fill(0))
//    let top = 0;
//    let left = 0;
//    let right = n - 1;
//    let bottom = n - 1;
//    let count = 1;

//    while(left <= right && top <= bottom) {
//      for(let i = left; i <= right; i++){
//         arr[top][i] = count++;
//      }
//      top++

//      for(let i = top; i <= bottom; i++){
//        arr[i][right] = count++;
//      }
//      right --;

//      for(let i = right; i >= left; i--){
//        arr[bottom][i] = count++;
//      }
//      bottom --;

//      for(let i = bottom; i >= top; i--){
//        arr[i][left] = count++;
//      }
//      left ++;
//    }
//    return arr;
//   }

// console.log(SpiralMatrix(n))

// var spiralMatrixIII = function(rows, cols, rstart, cstart) {
//   let result = [];
//   let step = 1;

//   while(result.length < rows * cols){

//       //left to right
//       for(let i = 0; i < step; i++){
//          validate(rstart, cstart ++);
//       }

//       //top to bottom
//       for(let i = 0; i < step; i++){
//           validate(rstart ++, cstart);
//       }
//       step ++;

//       //right to left
//       for(let i = 0; i < step; i++){
//           validate(rstart, cstart --);
//       }

//       //bottom to top
//       for(let i = 0; i < step; i++){
//           validate(rstart --, cstart);
//       }
//       step ++;
//   }

//    return result;

//   function validate(row, column) {
//       if(row < 0 || column < 0 || row >= rows || column >= cols){
//           return;
//       }
//       result.push([row, column]);
//   }

// };

// function spiralMatrixIII (rows, cols, rstart, cstart) {
//    let result = [];
//    let step = 1;

//    while (result.length < rows * cols) {

//     //left to right

//      for(let i = 0; i < step; i++){
//           validate(rStart, cStart++);
//      }

//      // top to  bottom

//      for(let i = 0; i < step; i++){
//        validate(rStart ++, cstart);
//      }
//      step++

//      //right to left

//      for(let i = 0; i < step; i++){
//       validate(rStart, cstart --);
//      }

//      // bottom to top

//      for(let i = 0; i < step; i++){
//       validate(rstart -- , cstart);
//      }

//      step++
//    }
//    return result;

//    function validate (row, column) {
//        if(row < 0 || column < 0 || row >= rows || column >= cols){
//         return;
//        }

//        result.push([row, column]);
//    }
// }

// let rows = 1, cols = 4, rStart = 0, cStart = 0

// console.log(spiralMatrixIII(rows,cols,rStart,cStart))

// function spiralMatrixIII(rows, cols, rStart, cStart) {
//   let result = [];
//   let step = 1;

//   while (result.length < rows * cols) {
//     // left to right
//     for (let i = 0; i < step; i++) {
//       validate(rStart, cStart++);
//     }

//     // top to bottom
//     for (let i = 0; i < step; i++) {
//       validate(rStart++, cStart);
//     }
//     step++;

//     // right to left
//     for (let i = 0; i < step; i++) {
//       validate(rStart, cStart--);
//     }

//     // bottom to top
//     for (let i = 0; i < step; i++) {
//       validate(rStart--, cStart);
//     }
//     step++;
//   }
//   return result;

//   function validate(row, column) {
//     if (row < 0 || column < 0 || row >= rows || column >= cols) {
//       return;
//     }
//     result.push([row, column]);
//   }
// }

// function spiralMatrixIII(rows, cols, rstart, cstart) {
//   let result = [];
//   let step = 1;

//   while (result.length < rows * cols) {
//     // left to right
//     for (let i = 0; i < step; i++) {
//       validate(rstart, cstart++);
//     }

//     // top to bottom
//     for (let i = 0; i < step; i++) {
//       validate(rstart++, cstart);
//     }
//     step++;

//     //  right to  left
//     for (let i = 0; i < step; i++) {
//       validate(rstart, cstart--);
//     }

//     //  bottom to top
//     for (let i = 0; i < step; i++) {
//       validate(rstart--, cstart);
//     }
//     step++;
//   }
//   return result;

//   function validate(row, column) {
//     if (row < 0 || column < 0 || row >= rows || column >= cols) {
//       return;
//     }
//     result.push([row, column]);
//   }
// }

// let rows = 5,
//   cols = 6,
//   rStart = 1,
//   cStart = 4;
// console.log(spiralMatrixIII(rows, cols, rStart, cStart));

// let arr = [1,2,3,4,5,6,22,0];
// let first = Infinity;
// let second = Infinity;

// for(let i = 0; i < arr.length; i++){
//    if(arr[i] < first){
//     second = first
//     first = arr[i];
//    } else if (arr[i] < second && arr[i] !== first) {
//      second = arr[i]
//    }
// }

// console.log(second);

// let arr = 5;
// let fib = [0,1];

// for(let i = 2; i < arr; i++){
//   fib[i] = fib[i - 1] + fib[i - 2];
// }

// console.log(fib);

// let a = 3;
// let b = 3;
// let res = 0;

// for(let i = 0; i < a; i++){
//   res += b;
// }

// console.log(res);

// let n = 5;

// for(let i = n; i > 0; i--){
//   let str = " ";
//   for(let j = 0; j < i; j++){
//     str += "* "
//   }
//   console.log(str);
// }

// function maxSubarraySum(arr) {
//   if (arr.length === 0) return 0;

//   let maxSum = arr[0];
//   let currentSum = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     currentSum = Math.max(arr[i], currentSum + arr[i]);
//     maxSum = Math.max(maxSum, currentSum);
//   }

//   return maxSum;
// }

// let sequence = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(maxSubarraySum(sequence));

// function MaxSq (arr) {
//   if(arr.length === 0) return "-1";

//   let currSum = arr[0];
//   let maxSum = arr[0];

//   for(let i = 0; i < arr.length; i++){
//     currSum = Math.max(arr[i], currSum + arr[i]);
//     maxSum = Math.max(currSum, maxSum);
//   }
//   return maxSum;
// }

// console.log(MaxSq(sequence))
// let a = 4;
// let b = 1

// let sum = a - b;

// if(Math.abs(sum) % 2 === 0) console.log(true);
// else console.log(false)

// let arr = [1,2,3,4,5];

// let bracket = "[[[[[]]]]]".split('');

// function CheckingBracket (bracket) {

//   let stack = [];

//   let TotalBracket = {
//     "(" : ")",
//     "{" : "}",
//     "[" : "]"
//   }

//   for(let char of bracket){
//     if(TotalBracket[char]) stack.push(char);
//     else {
//       let lastOpenBracket = stack.pop();
//       if(TotalBracket[lastOpenBracket] !== char) return false;
//     }
//   }
//   return stack.length === 0
// }

// let bracket = "[[[[[({})]]]]]".split('');
// console.log(CheckingBracket(bracket))

// function isBracket (bracket) {
//    let result = [];
//    let stack = {
//      "(" : ")",
//      "{" : "}",
//      "[" : "]"
//    }

//    for(let char of bracket){
//      if(stack[char]) result.push(char);
//      else {
//         let lastOpenBracket = result.pop()
//         if(stack[lastOpenBracket] !== char) return false;
//      }
//    }
//    return result.length === 0;
// }
// console.log(isBracket(bracket));

// function BinarySearch(arr, target) {

//   let leftIndex = 0;
//   let RightIndex = arr.length -1;

//   while(leftIndex <= RightIndex){
//     let middleIndex = Math.floor((leftIndex + RightIndex) / 2);

//     if(target === arr[middleIndex]){
//      return middleIndex
//     }

//     if(target < arr[middleIndex]){
//      RightIndex = middleIndex - 1
//     }else{
//      leftIndex = middleIndex + 1
//     }
//   }
//   return -1
// }

// console.log(BinarySearch([-1,2,4,5,6], 5));

// let target = 8;
// let arr = [1,2,3,4,5];
// function Binary (target, arr) {

// let left = 0;
// let right = arr.length -1

// while(left <= right){
//    let mid = Math.floor(left + right) / 2;

//    if(arr[mid] === target) {
//     return mid;
//    }
//    if(arr[mid] < target){
//     right = mid - 1;
//    }else if(arr[mid] > target){
//      left = mid + 1
//    }

//    return -1
// }
// }

// console.log(Binary(target, arr))

// function BinarySearch(arr, target) {

// let leftIndex = 0;
// let RightIndex = arr.length -1;

// while(leftIndex <= RightIndex){
//   let middleIndex = Math.floor((leftIndex + RightIndex) / 2);

//   if(target === arr[middleIndex]){
//    return middleIndex
//   }

//   if(target < arr[middleIndex]){
//    RightIndex = middleIndex - 1
//   }else{
//    leftIndex = middleIndex + 1
//   }
// }
// return -1
// let left = 0;
// let right = arr.length -1;

// while (left <= right) {
//   let mid = Math.floor((left + right) / 2);

//   if(arr[mid] === target){
//      return mid
//   }

//   if(arr[mid] > target){
//     right = mid - 1;
//   }else if(arr[mid] < target){
//       left = mid  + 1;

//   }
// }
// return -1;
// }

// console.log(BinarySearch([-1,2,4,5,6], 2));

// let arr = [1,2,3,4,2,3,4];

// function FindingNonRepeating (arr) {

//   let map = new Map();
//   let res = 0;

//   for(let i = 0; i < arr.length; i++){
//     let sum = arr[i];
//     if(map.has(sum)){
//       map.set(sum, map.get(sum)  + 1);
//     }else{
//       map.set(sum,1);
//     }
//   }

//   map.forEach((num, values) => {
//     console.log(num)
//     if(num === 1) {
//       res = values;
//     }
//   })
//   return res
// }

// console.log(FindingNonRepeating(arr))

// let arr = [1,2,3,4,5,111,111];

// let i = 2;
// let sum = 0;
// let total = arr.reduce((a, b) => a + b);

// while(total.toString().split('').length > i){
//   sum = total.toString().split('').map(Number).reduce((a, b) => a + b);
//   i++
// }

// console.log(sum)

// let output = sum.toString().split('').map(Number).reduce((a, b) => a + b)

// console.log(output);

// function BracketParis (paris) {

//   let result = [];
//   let stack = {
//     "{" : "}",
//     "(" : ")",
//     "[" : "]",
//   }

//   for(let char of paris){
//     if(stack[char]) result.push(char);
//     else {let lastOpenBracket = result.pop();
//     if(stack[lastOpenBracket] !== char) return false;
//   }
//   }
//   return result.length === 0
// }

// let bracket = "{{{[{}]}}}";
// console.log(BracketParis(bracket))

// block scoping
//global scoping
// function scoping

// const name = "surya";
// //redeclare
// name = "sal"

// console.log(name);

// function Bio () {
//   // let name = "hulk";

//   console.log(name);
// }

// Bio();

// var name = "surya";

// let name = "sal";

// name = "surya"

// const name = "hulk"

// name = "sal"

// console.log(name)

// var --> global scope
// let --> block  scope
// const --> block scope

// var h = "hi";
// var h = "hi";

// console.log(h)

// let s = "hlw"
// let s = "hello";

// console.log(s)

// const q = "g"
// const q = "g"

// // q ="GG"

// // console.log(q)

// let arr = [1,2,3,4,5];
// let result = [];

// console.log(arr.map((dal) =>{
//    if(dal % 2 === 0) return dal
// }))

// console.log(arr.filter((data) => data % 2 === 0))

// let n = 5;

// for(let i = 0; i > n; i++){
//   console.log(n)
// }

// console.log(arr.map((curr, index, values) => values))

/* 

  * map(): Creates a new array with the results of calling a provided function on every element.
             The map() method in JavaScript is used to transform elements in an array. 
             It iterates through each element of an array and creates a new array with 
             the results of calling a provided function on every element in the original array
  * filter(): Creates a new array with all elements that pass a test.
                In JavaScript, array methods often include a filter() method, 
                which is used to create a new array with elements that pass a certain condition. 
                It doesn't modify the original array; rather, it creates a new array based on the criteria specified in a provided function.
               


function regularFunction(a, b) {
  return a + b;
}
Declared using the function keyword.
Has its own this context and is suitable for object methods.
Has its own arguments object.
this is dynamically scoped.



const arrowFunction = (a, b) => {
  return a + b;
};
Declared using arrow => syntax.
Does not have its own this context; it uses the this value from the surrounding code.
Does not have its own arguments object.
this is lexically scoped (it uses the this value from its surrounding code).



What Hoisting in javaScript ?
      
     Hoisting is a behavior in JavaScript where variable and function declarations are 
     moved to the top of their containing scope during compilation, allowing them to be 
     accessed before their actual placement in the code

  -> Var hoisting

     console.log(myVar); // Outputs: undefined
     var myVar = 10;
     console.log(myVar); // Outputs: 10
  
  -> function hoisting

     foo(); // Outputs: "Hello from foo!"
     function foo() {
       console.log("Hello from foo!");
     }

  -> anonymous function 

     bar(); // Throws an error: bar is not a function
     var bar = function() {
     console.log("Hello from bar!");
   };


  -> var
     Declares a variable, optionally initializing it to a value.(global,block)
   
  -> let
     Declares a block-scoped, local variable, optionally initializing it to a value.
   
  -> const
     Declares a block-scoped, read-only named constant.



     <!-- spread and rest
    
    * The spread operators denote three(...) they are used to segregate the array 
       into individual elements
  
      let a = [1,3,4,5,5];
  let b = ["sura","era","meera"];
  
  let total_arr = [...a, ...b]
  
  console.log(...total_arr)
 
  * The Rest operators denote three(...)dots it allows to capture multiple function 
    argument into an array
  *  They used treat individual arguments passed to the function as combined array
    in the function parameter
  function add (...a); 
     let sum = 0
     console.log(a)
    -> for loop
      for(let i = 0; i < a.length;i++){
       sum += a[i]
      }
  
    -> map 
     a.map((item) => {
       return sum += item
     })
     return sum
    
    -> for of array
     for(let arr of a){
       console.log(arr)
       sum += arr
     }
     return sum
  
  
  console.log(add(...a))



  <!-- Async and await?

    -> async 
       * It is used to declare a function as asynchronous, allowing it to use the await keyword inside. 
       * An async function always returns a promise.

    -> await  
       * It is used within an async function to pause the execution of the function until a promise is resolved. 
       * This makes asynchronous code look more like synchronous code, improving readability and maintainability.


    What is JavaScript?
           Javascript is high-level Interpreter programming language
      that primary use for web development.It allows the developer 
      to add interactivity and dynamic behavior(some actions -> clicking btn)
      to the website

      -> option
     * Javascript is execute by the web browser make client
      side scripting language.
     * It enables the client side script to interact with 
       user,control the web browser communicate asynchronously.



    useState  : Manages state within functional components, allowing you to declare state variables and update them.

    useEffect  : Performs side effects in functional components after render, such as data fetching, subscriptions, or DOM manipulations.
    
    useContext  : Accesses React's context and subscribes to its changes within a functional component.
    
    useReducer  : Alternative to useState for managing more complex state logic using a reducer function.
    
    useCallback  : Memoizes callbacks, preventing unnecessary re-renders in child components.
    
    useMemo  : Memoizes expensive calculations, optimizing performance by caching computed values.
    
    useRef  : Provides a mutable ref object whose .current property can hold a mutable value, persisting across renders.
    
    useImperativeHandle  : Customizes the instance value that is exposed when using ref with useRef.
    
    useLayoutEffect  : Similar to useEffect, but fires synchronously after all DOM mutations, which can be helpful for measuring DOM elements.
    
    useDebugValue  : Provides a way to display a label for custom hooks in React DevTools.
*/

// String.includes()
// String.startsWith()
// String.endsWith()
// Array.from()
// Array keys()
// Array find()
// Array findIndex()
// New Math Methods
// New Number Properties
// New Number Methods
// New Global Methods
// Object entries

// let sting = "hello";
// let output = [];
// console.log(sting.length);

// for(let i = 0; i < sting.length; i++){
//    let vowels = "aeiou";
//    if(vowels.includes(sting[i])) output.push(i);
// }

// console.log(output);

// let sting = " hello ";

// console.log(sting.startsWith("o"))
// console.log(sting.endsWith("o"));

// console.log(Array.from(sting))

// let obj = {
//   name : " surya",
//   age : 23
// }

// let {...arr} = {...obj};

// console.log(arr.age)

// let arr = [1,2,3,4,5,6,7,8,9,];

// let [N, M, ...remain] = [...arr];

// console.log(N, M, remain)

// console.log(arr)

// console.log(sting.trim())

// let a = null;

// a = 10
// console.log(a)

// let arr_1 = [1,2,4];
// let arr_2 = [5,6,7];

// console.log([...arr_1, ...arr_2])

// let arr = [1,3,4,5];
// let res = [];
// for(let i = 0; i < arr.length; i++){
//   // if(arr[i] % 2 == 0) {
//   //   res.push(arr[i]);
//   // }
//   if((arr[i] & 1) === 0){
//     res.push(arr[i]);
//   }
// }

// console.log(res)

// console.log(3 * 3)
// let n = 3;
// let m = 3;
// let sum = 0;

// for(let i = 0; i < n; i++){
//    sum += m;
// }

// console.log(sum)

// let str = ""
//

// let arr = [1, 2, 3, 4, 5];
// let target = 10;

// function TwoPointer(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;
//   let sum = [];

//   for (let i = 0; i < arr.length; i++) {
//     console.log(sum.push(arr[i]));
//     sum.push(arr[i] + arr[i]);
//   }

//   return sum.includes(target) ? `yes` : "no";
// }

// console.log(TwoPointer(arr, target));

// function TwoPointer(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;
//   arr.sort((a, b) => a - b); // Sort the array to use two pointers

//   while (left < right) {
//     let currentSum = arr[left] + arr[right];

//     if (currentSum === target) {
//       return 'yes'; // Found the pair summing up to the target
//     } else if (currentSum < target) {
//       left++; // Move the left pointer to increase the sum
//     } else {
//       right--; // Move the right pointer to decrease the sum
//     }
//   }

// //   while(left < right){
// //     let currArr = arr[left] + arr[right];
// //   console.log(currArr)
// //     if(currArr === target){
// //       return "yes"
// //     }else if (currArr < target){
// //       left ++
// //     }else {
// //       right --
// //     }
// //   }
// //   return 'no'; // No pair found
// }

// function TwoPointer(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     let currArr = arr[left] + arr[right];
//     if (currArr === target) return "yes";
//     else if (currArr < target) left++;
//     else right--;
//   }
// }

// let arr = [1, 2, 3, 4, 5];
// let target = 5;
// console.log(TwoPointer(arr, target));

// function MaxSubArray(nums) {
//   // let max = nums[0];
//   // let cur = 0;

//   // for(let i = 0; i < nums.length; i++) {
//   //     cur += nums[i];

//   //     if(cur > max) max = cur
//   //     if(cur < 0) cur = 0
//   // }

//   // return max;
//   // let max = nums[0];
//   // let min = nums[0];

//   // for (let i = 1; i < arr.length; i++) {
//   //   max = Math.max(arr[i] , max + arr[i]);
//   //   min = Math.max(min, max)
//   // }
//   // return min

//   // let max = nums[0];
//   // let curr = 0;

//   // for(let i = 0; i < arr.length; i++){
//   //   curr += arr[i];

//   //   if(curr > max){
//   //     max = curr
//   //   }
//   //   if(curr < 0) curr = 0;
//   // }
//   // return curr

//   // let res = arr[0];
//   // let Max = arr[0];
//   // let Min = arr[0];

//   // for(let i = 0; i < arr.length; i++){
//   //   let option = [arr[i], Max * arr[i] , Min * arr[i]];
//   //   Max = Math.max(...option);
//   //   Min = Math.min(...option);

//   //   res = Math.max(res, Max)
//   // }
//   // return res

//   if(nums.length === 0) return 0;

//    let result = nums[0];
//    let max = nums[0];
//    let min = nums[0]

//   for(let i = 1; i < nums.length; i++){
//      let options = [nums[i], max * nums[i], min * nums[i]];
//      max = Math.max(...options);
//      min = Math.min(...options);

//      result = Math.max(result, max)
//   };

//   return result;
// }

// let arr = [2,3,-2,4];
// console.log(MaxSubArray(arr));

// [3, -4, 2, -3, -1, 7, -5];

// function PrimeNumber (arr) {
//   if(arr < 2) return false;

//   let result = [];

//   for(let i = 2; i <= Math.sqrt(arr); i++){
//     if(arr % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// let arr = [1,2,3,4,5,7,6,11];
// function CheckPrime (arr) {
//   let result = [];

//   for(let i = 0; i < arr.length; i++){
//      if(PrimeNumber(arr[i])){
//         result.push(arr[i])
//      }
//   }
//   return result
// }

// console.log(CheckPrime(arr))

// function isPrimeNumber(arr) {
//   if (arr.length < 2) return false;

//   let isPrime = new Array(arr + 1).fill(true);
//   isPrime[0] = isPrime[1] = false;
//   let Prime = [];

//   for (let i = 2; i * i < arr.length; i++) {
//     if (isPrime[i]) {
//       for (let j = i * i; j < arr.length; j += i) {
//         isPrime[j] = false;
//       }
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (isPrime[arr[i]]) {
//       Prime.push(arr[i]);
//     }
//   }

//   return Prime;
// }

// let arr = [1, 2, 3, 4, 5, 7, 6, 11];
// console.log(isPrimeNumber(arr));

// function isPrimeNumber(arr) {
//   if (arr.length < 2) return [];

//   // let n = Math.max(...arr) + 1;
//   let isPrime = new Array(arr.length).fill(true);
//   isPrime[0] = isPrime[1] = false;
//   let Prime = [];

//   for (let i = 2; i * i < arr.length; i++) {
//     if (isPrime[i]) {
//       for (let j = i * i; j < arr.length; j += i) {
//         isPrime[j] = false;
//       }
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (isPrime[arr[i]]) {
//       Prime.push(arr[i]);
//     }
//   }

//   return Prime;
// }

// let arr = [1, 2, 3, 4, 5, 7, 6, 11];
// console.log(isPrimeNumber(arr));

// let arr = [-1,2,3,4,5,10];
// let target = 0;

// function BinarySearch (arr, target) {
//    let left = 0;
//    let right = arr.length -1;

//   //  while(left < right){
//   //   let curr = arr[left] + arr[right]
//   //   if(curr === target){
//   //      return "yes"
//   //   }else if(curr < right){
//   //     left++
//   //   }else{
//   //     right--;
//   //   }
//   //  }
//   //  return "no"

//   while(left < right){
//     let mid = Math.floor((left + right) / 2);

//     if(arr[mid] > arr[right]){
//       left = mid + 1
//     }else {
//       right = mid - 1
//     }
//   }
//   return arr[left]
// }

// console.log(BinarySearch(arr,target))

// function Palindromes (words) {
//    if(words.length < 2) return false;
//    let str = ""
//    for(let i = words.length -1; i >= 0; i--){
//     str += words[i]
//    }

//    return words.join('') === str ? true : false
// }

// let words = "gtg".split('');
// console.log(Palindromes(words))

// function isAnagram (word_1, word_2) {
//    if(word_1.length !== word_2.length) return false;

//    let sorting_1 = word_1.split('').sort().join('');
//    let sorting_2 = word_2.split('').sort().join('');

//    return sorting_1 === sorting_2 ? true : false;
// }

// let word_1 = "slient";
// let word_2 = "listen";

// console.log(isAnagram(word_1, word_2))

// function FindDuplicateWords (words) {
//   let map = new Map();
//   let result = [];

//   for(let i = 0; i < words.length; i++){
//     let totalWord = words[i];
//     if(map.has(totalWord)){
//       map.set(totalWord, map.get(totalWord) + 1);
//     }else{
//       map.set(totalWord, 1);
//     }
//   }

//   map.forEach((num, values) => {
//     if(num === 1) {
//       result.push(values)
//     }
//   })
//   return result.join('')
// }

// let word = "ssafvdd".split('');
// console.log(FindDuplicateWords(word))

// function isIsomorphic(s, t) {
//   if (s.length !== t.length) return false;

//   let sToMap = new Map();
//   let tToMap = new Map();

//   for (let i = 0; i < s.length; i++) {
//     let CharS = s[i];
//     let CharT = t[i];

//     if (!sToMap.has(CharS)) {
//       sToMap.set(CharS, CharT);
//     } else if (sToMap.get(CharS) !== CharT) {
//         return false;
      
//     }

//     if (!tToMap.has(CharT)) {
//       tToMap.set(CharT, CharS);
//     } else if (tToMap.get(CharT) !== CharS) {
//         return false;
//       }
//     }

//     return true
//   }


// let s = "aac".split("");
// let t = "xxy".split("");

// console.log(isIsomorphic(s, t));


// let n = 5;

// for(let i = n - 1; i >= 0; i--){
//   let str = " "
//   for(let j = i; j < n; j++){
//     str += " *"
//   }

//   console.log(str);
// }

// function MaxSubArray (arr) {
//   let left = arr[0];
//   let right = arr[0]; 

//   for(let i = 0; i < arr.length; i++){
//     right = Math.max(arr[i], right + arr[i]);
//     left = Math.max(left , right);
//   }
//   return left;
// }

// let arr = [0,1,2,3,2,5,6];

// console.log(MaxSubArray(arr));


// let arr = [1,2,3,-2,5];
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//   sum += arr[i];
// }

// console.log(sum);


// function minimumSwaps(arr) {
//   const n = arr.length;
//   const positions = [];
//   let swaps = 0;

//   // Create an array of positions indicating the original indices of elements
//   // for (let i = 0; i < n; i++) {
//   //   positions[arr[i]] = i;
//   // }

//   for(let i = 0; i < n; i++){
//     positions[arr[i]] = i;
//   }

//   // Iterate through the array to check if elements are at their correct positions
//   // for (let i = 0; i < n; i++) {
//   //   // If the element is not at its correct position, swap it
//   //   if (arr[i] !== i + 1) {
//   //     swaps++;
//   //     const temp = arr[i];
//   //     arr[i] = i + 1;
//   //     arr[positions[i + 1]] = temp;

//   //     // Update positions array after swapping
//   //     positions[temp] = positions[i + 1];
//   //     positions[i + 1] = i;
//   //   }
//   // }

//   for(let i = 0; i < n; i++){
//     if(arr[i] !== i + 1){
//       swaps++;
//       const temp = arr[i];

//       arr[positions[i + 1]] = temp;

//       positions[temp] = positions[i + 1];

//       positions[i + 1] = i;

//     }
//   }

//   return swaps;
// }

// // Example usage



// const students =[1 ,5 ,4 ,3 ,2];
// console.log(minimumSwaps(students)); // Output: 3





// function findSmallestDivisible(L, R) {
//   // Function to calculate the greatest common divisor (GCD) using Euclidean algorithm
//   const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

//   // Calculate the least common multiple (LCM) using the formula: LCM = (L * R) / GCD(L, R)
//   const lcm = (L * R) / gcd(L, R);

//   return lcm;
// }

// // Example usage
// const L = 10;
// const R = 130;
// console.log(findSmallestDivisible(L, R)); // Output: 36


/*
What is the difference between let and const?
What is the difference between a function declaration and a function expression?
What is hoisting in JavaScript?
What is the difference between == and ===?
What are closures in JavaScript?
What is the prototype chain in JavaScript?
What is inheritance in JavaScript?
What is polymorphism in JavaScript?
What is encapsulation in JavaScript?
What is modularity in JavaScript?
What is a promise in JavaScript?
What is an async function in JavaScript?
What is a generator function in JavaScript?
What is a proxy in JavaScript?
What is a Reflect object in JavaScript?
What is a WeakMap object in JavaScript?
What is a WeakSet object in JavaScript?
What is the difference between a class and a function in JavaScript?
What are the different ways to create an object in JavaScript?
What are the different ways to iterate over an object in JavaScript?
What are the different ways to add a property to an object in JavaScript?
What are the different ways to remove a property from an object in JavaScript?
What are the different ways to check if a property exists on an object in JavaScript?
What are the different ways to get the value of a property from an object in JavaScript?
What are the different ways to set the value of a property on an object in JavaScript?
*/



// let [n , m] = [2,4];

// let difference = n - m;

// console.log(difference % 2 === 0 ? "even" : "odd");



// function isPrime (arr) {
//   if(arr.length < 2) return false;


//   for(let i = 2; i <= Math.sqrt(arr); i++){
//     if(arr % i === 0){
//       return false;
//     }
//   }

//   return true;
// }








// let arr = [1,2,3,4,5,11,4,6,7];

// function PrimeNumber (arr) {

//   let result = []

//   for(let i = 1; i < arr.length; i++){
//     if(isPrime(arr[i])){
//      result.push(arr[i])
//     }
//   }

//   return result
// }

// console.log(PrimeNumber(arr));



// let n = 5;
// let  k = 4;
// let sum = 0;

// for(let i = 0; i < n; i++){
//   sum += k
// }

// console.log(sum);

// let arr = [1,2,3,4,5, 8,9];
// let result = [];

// for(let i = 0; i < arr.length; i++){
//    if((arr[i] & 1)){
//     result.push(arr[i]);
//    }
// }

// console.log(result);


// function Outer () {
//   let a = 10;
//   return function inner () {
//    return a + a;
//   }
// }

// let output = Outer();

// console.log(output())

// console.log(a)
// console.log(b)
// console.log(c)



// console.log(add());

// var a = 10;

// function add () {
//   return 5 + 5;
// }
  
// let  b = 10;

// const c = 10;

// let words = ""

// function isPrime (arr) {
//    if(arr < 2) return false;

//    for(let i = 2; i <=  Math.sqrt(arr); i++){
//     if(arr % i === 0){
//       return false;
//     }
//    }
//    return true
// }


// function PrimeNumber (arr) {
//   let result = [];

//   for(let i = 0; i <= arr; i++){
//     if(isPrime(i)){
//      result.push(i);  
//     }
//    }
 
//    return result;
// }
// let arr = 2;
// console.log(PrimeNumber(arr))

// let arr = [1,2,3,4,5];
//     let total = [[1,2],[5,6],[2,3]]
    
//     console.log(Object.assign({}, arr))
//     console.log({...arr})
//     console.log(Object.entries(total))




// let k = 2;
// let result = [];

// for(let i = 0; i < arr.length; i++){
//   let rotate = (i + k) % arr.length;

//   result[rotate] = arr[i];
// }

// console.log(result);

// let arr = [3,4,5,1,2,0,-1,6,-2];

// function secondLargest (arr) {
   
//   if(arr.length < 2) return false;

//   let first = Infinity;
//   let second = Infinity;

//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] < first){
//       second = first
//       first = arr[i];
//     }else if(arr[i] < second && arr[i] !== first){
//       second = arr[i];
//     }
//   }
//   return second;
// }

// console.log(secondLargest(arr))

// let word = "hello suavnvafva kkkkkkkkkkkkkkkkkkkkkkkkkkk".split(' ');
// let wordsLength = "";

// for(let i = 0; i < word.length; i++){
//   let totalLength = word[i].length;
//   if(totalLength > wordsLength.length){
//     wordsLength = word[i];
//   }
// }
// console.log(wordsLength);


// let arr = [1,2,2,4,5,6];
// let min = -Infinity;

// for(let i = 0; i < arr.length; i++){
//   if(arr[i] > min){
//     min = arr[i];
//   }
// }

// console.log(min);

let sum = 5;
// let factorial = 1;

// for(let i = 1; i <= sum; i++){
//    factorial *= i 
// }
// console.log(factorial);

// for(let i = sum - 1; i >= 0; i--){
//   let str = "";
//   for(let j = i;  j < sum; j++){
//     str += "* "
//   }
//   console.log(str);
// }