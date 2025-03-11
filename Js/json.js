// JSON- Javascript object notation used to transfer data across network

//1. Parsing

const string = '{"name":"eklavya", "height":"6feet"}';
const data = JSON.parse(string);
console.log(data.name)

//2. Stringify

const data1={
	name:"eklavya",
  school:"NAH"
}
const string1= JSON.stringify(data1);
console.log(string1)