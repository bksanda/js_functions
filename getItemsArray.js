// //1.) getItems(array)
// //Create a function called getItems that 
// //simply returns the items array from the google product object.

// count = 0;

// for (var i=0; i < data["items"].length; i++) {
//     if (data["items"][i].kind === "shopping#product") {
    	
//    		console.log((i+1) + " " + data["items"][i].kind);
//     	count ++;

//     }
// }    
// ===========================

// for (var key in data) 
// 	{
// 	if (data[key] === count){
// 		console.log(key);
// 	}
// }
//====================================
// //load products.json
// var data = require("./products.json")

// //define getItemsCount function
// //accepts full item data
// //returns the length of the items array
// var getItemsCount = function(itemData){
// 	return itemData.items.length;
// };

// //output item count using the getItemsCount function
// console.log('Item Count: ' + getItemsCount(data));

// //create your answer in this file.
// //the above is just provided as a simple example.

var data = require("./products.json")

var getItems = function () {
	return data["items"]; 
}

console.log(getItems());










