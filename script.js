//your JS code here. If required.
let student = {
	name: "John",
	age: 26
}
Object.prototype.getKey = function () {
	return Object.keys(student)
}