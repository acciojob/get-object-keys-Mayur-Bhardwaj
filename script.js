// //your JS code here. If required.
// var student = {
// 	name : "JS",
// 	city : "Noida",
// 	age : 50,
// }

// function getKeys(obj) {
// 	return Object.keys(obj);
// }
// getKeys(student)           // ["name"]
// getKeys({name: "JS", age: 50})  // ["name", "age"]

// Create the student object
const student = {
  name: "John"
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// Testing the function
console.log(getKeys(student)); // ["name"]
// console.log(getKeys(student));