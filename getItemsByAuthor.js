// 3.) getItemsByAuthor(array, author)

// Create a function called getItemsByAuthor 
//that takes an item array and 
//returns a new array of all items by a specified author.

// Test this function by searching for Target, CDW, eBay

var data = require("./products.json")

var getItemsByAuthor = function (array, author) {
	var newArray = [];
	for (var i=0; i < array.length; i++) {
		if (array[i]["product"]["author"]["name"].split(" ")[0] === author) {
			//console.log (array[i]["product"]["author"]["name"]);
			newArray.push(array[i]);//["product"]["title"]);
		} 
	}
	return (newArray);
}

console.log(getItemsByAuthor(data["items"], "Target"));  // string.splice .split //
