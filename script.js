//your JS code here. If required.
let student = {
	name: "John";
	age: 26;
}
student.__proto__ = function getKeys(obj) {
	return Object.keys(obj)
}