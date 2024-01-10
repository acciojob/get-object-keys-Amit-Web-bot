//your JS code here. If required.
const student = {
	name: "John", 
	age: 30, 
	city: "New York"
}
Object.prototype.getKeys = function (student) {
	return Object.keys(student)
}
