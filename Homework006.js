//task 1
console.log("Task 1: ")
let arr = [1 , 2, 10, 15];
let last = arr[arr.length - 1];
console.log('Last element: ' + last);


//task 2 
console.log("Task 2: ")
let words = ['Sencond', 'Task', 'Completed'];
console.log(words.join(' '));

//task 3
console.log("Task 3: ")
const number1 = [1, 2, 3, 4, 5];
const number2 = [5, 4, 3, 2, 1, 7];
let number3 = [];
if (number1.length >= number2.length) {
    length = number1.length;
  } else {
    length = number2.length;
  }
  for (var i = 0; i < length; i++) {
    const a = number1[i] === undefined ? 0 : number1[i];
    const b = number2[i] === undefined ? 0 : number2[i];
    number3.push(a + b);
}
console.log('Sum = ' + number3);

//task4 
console.log("Task 4: ")
let rectangle = {
    height : 5,
    width : 10,
	getArea : function() {
		return this.width * this.height;
		},
	getPerimeter : function() {
		return (this.width + this.height) * 2;
		},
}
console.log("Area = ", rectangle.getArea())
console.log("Perimeter = ", rectangle.getPerimeter())