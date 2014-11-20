// 2.) getItemsByBrand(array, brand)

// Create a function called getItemsByBrand that 
// takes an item array returns a new array of all items 
// of a specified brand.

// Test this function by searching for Sony, Cannon, Nikon and Panasonic.

var data = require("./products.json")


var getItemsByBrand = function (array, brand) {
	var newArray = [];
	for (var i=0; i < array.length; i++) {
		if (array[i]["product"]["brand"] === brand) {
			newArray.push(array[i]["product"]["title"]);
		}
	}
	return (newArray);
}

console.log(getItemsByBrand(data["items"], "Sony"));
