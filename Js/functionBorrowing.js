// Call, Apply, Bind (Function Borrowing)

const obj={
	name:"Eklavya",
  salary:"100000"
}

const obj2={
	name:"Ishita",
  salary:"1000000"
}

function salaryFunc(x, y){
	const newSalary = this.salary*x+y;
	console.log("My name is "+this.name+" and my salary is "+newSalary);
}
salaryFunc.call(obj,10,4);
salaryFunc.apply(obj2,[2,1]);
let y= salaryFunc.bind(obj2,2,3);
y();
