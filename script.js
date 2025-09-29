//your JS code here. If required.
var student = {
	name : "JS",
	city : "Noida",
	age : 50,
}

function getKeys(obj) {
	return Object.keys(obj);
}
getKeys(student)           // ["name"]
getKeys({name: "JS", age: 50})  // ["name", "age"]
// console.log(getKeys(student));