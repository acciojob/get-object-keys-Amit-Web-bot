//your JS code here. If required.
const student1 = {
	name: "John", 
	age: 30, 
	city: "New York"
}
const student2 = {
	name: "John",
}
Object.prototype.getKeys = function (student) {
	return Object.keys(student)
}
