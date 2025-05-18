//Question 01
type Person = {
    name: string;
    age: number;
    isStudent: boolean;
  };

  function myFunction(person: Person): string {
    return `name: ${person.name}, age: ${person.age}, ${person.isStudent ? 'a student' : 'not a student'}`;
  }
const person1 = { name: "Yaakoub", age: 20, isStudent: true };
const myFunction1 = myFunction(person1);
console.log(myFunction);

//Question 02
let secondLargest = function(arr: Array<number>): number | undefined {
    if(arr.length < 2) return undefined;
    let [largest, second] = arr[0]> arr[1]? [arr[0], arr[1]]: [arr[1], arr[0]];
    for(let i = 2; i < arr.length; ++i){
        if(arr[i] > largest){
            second = largest;
            largest = arr[i];
        }else if(arr[i] > second && arr[i] < largest){
            second = arr[i];
        }
    }
    return second;
}

console.log(secondLargest([20 ,120 ,111 ,215 ,54 ,78]));
//Question 03

let sum = function(...nums : number[]): number{
    let result = nums.reduce((acc, val)=> acc + val, 0);
    return result;
}

console.log(sum(1, 2, 3)); 

//Question 04
let arr1: Array<number> = [1, 2, 3];
let arr2: Array<number> = [4, 5, 6];
const ArrayResult: Array<number> = [...arr1, ...arr2];

console.log(ArrayResult);