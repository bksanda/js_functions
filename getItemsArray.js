//1.) getItems(array)
//Create a function called getItems that
//simply returns the items array from the google product object.

//load products.json
var data = require("./products.json")

var getItems = function () {
	return data.items;
};

console.log(getItems());


//=====================
// count = 0;
// for (var i=0; i < data["items"].length; i++) {
//     if (data["items"][i].kind === "shopping#product") {

//        console.log((i+1) + " " + data["items"][i].kind);
//      count ++;

//     }
// }
// for (var key in data)
//  {
//  if (data[key] === count){
//    console.log(key);
//  }
// }

