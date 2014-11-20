// 5.) Use your functions

// Use the functions you created in 1 - 5 to print find the following lists of items.

// All items made by Nikon with the author eBay.
// All items made by Sony.
// All items made by Sony that are available.
// BONUS: Create another search function and/or think of other interesting ways to combine the functions to preform useful searches.

// #1

var data = require("./products.json")

var getItems = function () {
	return data["items"]; 
}

//console.log(getItems());

//#2

var getItemsByBrand = function (array1, itemBrand) {
	var newArray = [];
	for (var i=0; i < array1.length; i++) {
		if (array1[i]["product"]["brand"] === itemBrand) {
			newArray.push(array1[i]/*["product"]["title"]*/);
		}
	}
	return (newArray);
}

//getItemsByBrand(data["items"], "Sony");

//#3
var getItemsByAuthor = function (array2, author) {
	var newArray1 = [];
	for (var i=0; i < array2.length; i++) {
		if (array2[i]["product"]["author"]["name"].split(" ")[0] === author) {
			//console.log (array2[i]["product"]["author"]["name"]);
			newArray1.push(array2[i]/*["product"]["title"]*/);
		} 
	}
	return (newArray1);
}

//getItemsByAuthor(data["items"], "eBay"); 

//#4

var getAvailableProducts = function (array3) {
	var newArray2 = [];
	for (var i = 0; i < array3.length; i++) {
		if (array3[i]["product"]["inventories"][0]["availability"] === "inStock") {
			newArray2.push(array3[i]/*["product"]["title"]*/);
		}
	}
	return (newArray2);
}

//getAvailableProducts(data["items"]);

// #5
// All items made by Nikon with the author eBay.
// All items made by Sony.
// All items made by Sony that are available

console.log(getItemsByAuthor(getItemsByBrand(data["items"],"Nikon"),"eBay"));
//console.log(getItemsByBrand(data["items"],"Sony"));
//console.log(getAvailableProducts(getItemsByBrand(data["items"],"Sony"),"inStock"));


