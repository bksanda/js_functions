// var data = require("./products.json")

// var getPrice = function (array) {
// 	var newArray = []
// 	var newArray1 = []
// 	var newArray2 = []
// 	for (var i = 0; i < array.length; i++) {
// 		if (array[i]["product"]["inventories"][0]["price"] > 500 && array[i]["product"]["inventories"][0]["price"] < 1000  ) {
// 			//console.log(array[i]["product"]["inventories"][0]["price"])
// 			newArray.push(array[i]/*["product"]["title"]*/);
// 		} else if (array[i]["product"]["inventories"][0]["price"] > 250 ) {
// 			newArray1.push(array[i]);
// 		} else {
// 			newArray2.push(array[i]);
// 		}
// 	}
// 	return (newArray);
// 	return (newArray1);
// 	return (newArray2);

// }

// console.log("THESE PRODUCTS ARE BETWEEN $500 - $1000: " + "\n")
// console.log(getPrice(data["items"]));

//console.log(getItemsByAuthor(getItemsByBrand(data["items"],"Nikon"),"eBay"));

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






// var printProducts = function (array){
// 	for(var i=0; i< array.length; i++) {
// 		console.log(array[i]["product"]["inventories"][0]["price"])
// 		console.log(array[i].product.title)
// 	}	
// }


var getPrice = function (array, min, max) {
	var newArray = []

	for (var i = 0; i < array.length; i++) {
		var itemPrice = array[i]["product"]["inventories"][0]["price"];
		if (itemPrice <= max && itemPrice >= min) {
			newArray.push(array[i].product.title, itemPrice);
			
		}
	}
	// return (newArray);
	// console.log("The products in your price range are: ");
	// //for (var i = 0; i < newArray.length; i++){
	// 	console.log("item: " + newArray[0, 1] + "\n");
	// }
	console.log("The products in your price range are: " + "\n");
	for (var i = 0; i < newArray.length; i++){
	console.log(newArray[i] + "\n");
	}
}
getPrice(getItems(), 450, 1000);

//printProducts(getPrice(data.items.product.title));

// var getPrice1 = function (array) {
// 	var newArray1 = []
// 	for (var i = 0; i < array.length; i++) {
// 		if (array[i]["product"]["inventories"][0]["price"] > 250 && array[i]["product"]["inventories"][0]["price"] <= 499) {
// 			//console.log(array[i]["product"]["inventories"][0]["price"])
// 			newArray1.push(array[i])//["product"]["title"]);
// 		} 
		
// 	}
// 	return (newArray1);
// }

// var getPrice2 = function (array) {
// 	var newArray2 = []
// 	for (var i = 0; i < array.length; i++) {
// 		if (array[i]["product"]["inventories"][0]["price"] > 0 && array[i]["product"]["inventories"][0]["price"] <=249) {
// 			//console.log(array[i]["product"]["inventories"][0]["price"])
// 			newArray2.push(array[i])//["product"]["title"]);
// 		} 
// 	}
// 	return (newArray2);

// }

// console.log("THESE PRODUCTS ARE BETWEEN $500 - $1000: " + "\n")
// console.log(getPrice(data["items"]));

// console.log("THESE PRODUCTS ARE BETWEEN $250 - $500: " + "\n")
// console.log(getPrice1(data["items"]));

// console.log("THESE PRODUCTS ARE BETWEEN $0 - $250: " + "\n")
// console.log(getPrice2(data["items"]));


//getAvailableProducts(data["items"]);

// #5
// All items made by Nikon with the author eBay.
// All items made by Sony.
// All items made by Sony that are available

//printProducts(getItemsByAuthor(getItemsByBrand(data["items"],"Nikon"),"eBay"));
//console.log(getItemsByBrand(data["items"],"Sony"));
//console.log(getAvailableProducts(getItemsByBrand(data["items"],"Sony"),"inStock"));
