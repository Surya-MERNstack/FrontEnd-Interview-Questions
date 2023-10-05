// JAVASCRIPT DATA STRUCTURE AND ALGORITHM

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

