// JavaScript code for fill() method
function func() {
	let arr = [1, 23, 46, 58];

	// here value = 87, start index=1 and
	// and last index = 3
	arr.fill(87, 1, 3);
	console.log(arr);  
}
func();  // output [ 1, 87, 87, 58 ]
