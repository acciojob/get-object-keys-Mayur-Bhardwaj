// //your JS code here. If required.
function getKeys(obj) {
  // return Object.keys(obj);
	let keys = [];

	for(let t in obj){
		keys.push(t);
	}
	return keys;
}
console.log(getKeys(student));