// objects are reference type 
// hence otherRun.total = 90; will change the total of eklavyaRun object as well
// let eklavyaRun = { name:"ekavya", total:"0"};
// let otherRun = eklavyaRun;
// otherRun.total = 90;

// console.log(eklavyaRun);
// console.log(otherRun);

// with spread operator

// let eklavyaRun = { name:"ekavya", total: 6};
// let otherRun = {...eklavyaRun};
// otherRun.total = 90;

// console.log(eklavyaRun);
// console.log(otherRun);

// for (var i = 0; i < 3; i++) { // var, let, const question
//     setTimeout(() => console.log(i), 1000);
//   }// the answer is 3,3,3

//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1000);
//   } // for this0,1,2

// sayHello(); 

// function sayHello() {
//   console.log("Hello!");
// }


    // function createCounter(start,maxValue) {
    //     let temp = start;
    //     return {
    //       increment: function() { 
    //         if(start+1 >maxValue){
    //             return start;
    //         } 
    //         else return ++start;
    //       },
    //       decrement: function() { 
    //         return --start;
    //       },
    //       getCount: function() { return start; },
    //       reset: function(){
    //         start = temp;
    //         return start;
    //       },
    //       setMaxValue: function(newMax){
    //         maxValue = newMax;
    //       }

    //     };
    //   }

      
    //   const counter = createCounter(5,6);
    //   console.log(counter.increment())
    //   console.log(counter.increment())
    //   console.log(counter.increment())
    //   console.log(counter.reset())
    //   console.log(counter.increment())
    //   counter.setMaxValue(10)
    //   console.log(counter.increment())
    //   console.log(counter.increment())
    //   console.log(counter.increment())
    //   console.log(counter.increment())
    //   console.log(counter.increment())
    // //   console.log(counter.getCount()); // 7
    // //   counter.decrement();
    // //   console.log(counter.getCount()); // 6
      
// multiply function

// function multiplyBy(n){// function factory
//     return function(x){
//         return n**x;
//     }
// }
// const multiplyBy2 = multiplyBy(2);
// console.log(multiplyBy2(5)); // 10

// const multiplyBy10 = multiplyBy(10);
// console.log(multiplyBy10(3)); // 30

// function createBankAccount(x){
//    return{
//     deposit: function(amount) {
//         x = x+amount;
//     },
//     withdraw: function(amount){
//         x = x-amount;
//     },
//     getBalance: function(){
//         return x;
//     }
//    } 

// }

// const myAccount = createBankAccount(1000);
// myAccount.deposit(500);
// console.log(myAccount.getBalance()); // 1500
// myAccount.withdraw(200);
// console.log(myAccount.getBalance()); // 1300


function memoize(fn){
    return function
}