// const a="AKKA"
// console.log(a==a.split("").reverse().join(""));

// const num=[123,23,45,64,23,12,23,36]

// const newArr= (num)=>{
//     return num.filter(val=>val%2==0)
// }

// console.log(newArr(num));

// const fact=7;
// const numbers = Array.from({ length:fact }, (_, i) => i + 1);
//   console.log(numbers);     
// function gcd(a, b) {
//     if (b === 0)
//         return a;
//     return gcd(b, a % b);
// }

// function lcm(a, b) {
//     return (a * b) / gcd(a, b);
// }

// function findLCM(arr) {
//     let result = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         result = lcm(result, arr[i]);
//     }
//     return result;
// }

// Example usage:
// const numbers = [4, 6, 8, 10];
// console.log("LCM of", numbers, "is:", findLCM(numbers));

// function findLCM(arr){
//      arr.reduce((a,b)=>console.log(a,b,"break"))
// }
// const v=["a", "i", "e", "o", "u"]
// const n="Ankur"
// const res=n.toLowerCase().split("").filter(alpha=>v.includes(alpha))
// console.log(res.length);

// const number=[12,45,67,34]
// console.log(findLcm(number));
// function findLcm(num){
//     return num.reduce((a,b)=>lcm(a,b))
// }

// function lcm(a,b){
//  return (a*b)/cd(a,b)
// }

// function cd(a,b){
//     if(b==0){
//         return a
//     }
//     return cd(b,a%b)
// }

// const value=6;
// console.log(checkPrime(value));
// function checkPrime(num){
//     if(num<=1) return false

//     for(i=2;i<=Math.sqrt(num);i++){
//         if(num%i===0) return false
//         return true
//     }
// }

console.log(Math.sqrt(5));