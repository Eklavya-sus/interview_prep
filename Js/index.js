// objects are reference type 
// hence otherRun.total = 90; will change the total of eklavyaRun object as well
// let eklavyaRun = { name:"ekavya", total:"0"};
// let otherRun = eklavyaRun;
// otherRun.total = 90;

// console.log(eklavyaRun);
// console.log(otherRun);

// with spread operator

let eklavyaRun = { name:"ekavya"};
let otherRun = {...eklavyaRun};
otherRun.total = 90;

console.log(eklavyaRun);
console.log(otherRun);