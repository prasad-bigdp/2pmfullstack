 //object literal:
  var obj={
    name:"raj",
      age: 28,
      sum: function ()
      {
        console.log("hello world")
      }
}

console.log(obj.name);
console.log(obj['name'])
console.log(obj.age);
console.log(obj.address);
obj.sum()

//create an object which contains id,name,email,password and access them using dot or index signature

//object.create
  var obj2 = {
		name: "bheema",
		email: "a@a.com",
		
}
var obj3 = Object.create(obj2)
obj3.name="john"
var obj4= Object.create(obj3)
console.log(obj4.name)