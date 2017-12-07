console.log("Hello Everyone");
var item1 = "cabinet";
var item2 = "table+chair";
var item3 = "table";
var discount = 15;
var name = prompt("Please enter your name");
console.log("Hey "+name+", today we have a "+discount+"% discount on the "+item1+", "+item2+" and the "+item3+"!")
var item1price = 2500
var item2price = 2000
var item3price = 1500
console.log("This "+item1+" is only "+item1price+" and the "+item2+" is reduced by "+item2price+"! The "+item3+" is only "+item3price+"!")
var amount = prompt("How many "+item1+"'s would you like to buy?")
var totalcost = amount * item1price
alert("Great, that will cost just €"+totalcost+".")
var trueb = 6>5
var falseb = 5<6
console.log(true)
console.log(false)
var items = [item1, item2, item3];
console.log(items)
console.log(items[0])
items[0] = discount;
console.log(items);
items.push(item1price);
console.log(items);
items.unshift(item2);
console.log(items);
items.pop();
console.log(items);
items.pop();
console.log(items);
items.sort();
console.log(items)
var prices = []
var hello = "My name is David"
var sentence = hello.split(" ")
console.log(sentence)
var cabinetdetails = {
  name: "cabinet",
  price: 2500,
  currency: "Euros",
};
var tcdetails = {
  name: "table+chair",
  price: 2000,
  currency: "Euros",
};
var chairdetails = {
  name: "chair",
  price: 1500,
  currency: "Euros",
};
cabinetdetails.description = "A beautiful cabinet made from walnut"
tcdetails.description = "A really nice table and chair"
chairdetails.description = "Hand made chair whoop"
console.log(tcdetails)
console.log(cabinetdetails)
console.log(chairdetails)
console.log(chairdetails.price)
delete cabinetdetails.price;
cabinetdetails.price = 150
console.log(cabinetdetails);
cabinetdetails.image = "https://1x12gs5mivd268ltk1c9vi3x-wpengine.netdna-ssl.com/wp-content/uploads/2014/09/rupert-bevan-furniture-dpages-i.jpg"
console.log(cabinetdetails)
tcdetails.image = "http://www.celebrationofcraftsmanship.com/content/S635686692373894138/2015%20Thomas%20Whittingham%20Furniture%20-%20'Kingswear%E2%80%99%20Table%20&%20Chair.jpg"
chairdetails.image = "https://goldfinchfurniture.co.uk/wp-content/uploads/2017/01/Table_wide.png"
console.log(cabinetdetails,tcdetails,chairdetails)
console.log(cabinetdetails.name, cabinetdetails.price, cabinetdetails.image)

var restaurant ={
	name: "Dave's fries",
	seatingcapacity: 12,
	hasdineinspecial: true,
	entrees: ["frogslegs","porkloin","chickenthigh","beefsteak"]
}
console.log(restaurant)
restaurant.entrees.push("skewers")
console.log(restaurant)
restaurant.appetizers=["salad","olives"]

var productlist = [cabinetdetails, tcdetails, chairdetails];
/*

for (i = 0; i < productlist.length; i++) {
  console.log(productlist[i].name);
};
*/
function printProducts(productList) 
{
	for (i = 0; i < productlist.length;) 
	{
 		for(;i<1;i++)
 		{
 			console.log(productlist[i].name,productlist[i].price,productlist[i].image)
 	    }
 		for(;i<productlist.length;i++)
 		{
 			console.log(productlist[i].name,productlist[i].image)
 		}
    }	
};
printProducts(productlist)

$(function(){ 

var header1 = $("h1");

console.log(header1)

var title = $("h1").text("Wood is great");
console.log(title)

var title = $("h1").text(prompt("What would you like the website to be called?"));
var slider = $("h2").text(prompt("What do you want to see on the slider thing?"));

$("body").css("background-color", "blue");

$("h1").on("click", function(){
    $("body").css("background-color", "red");
});
$("h2").on("click", function(){
    $("body").css("background-color", "green");
});

$('body').append('<p>A new paragraph is being adde whoop whoop</p>')

$(".productlist").attr("src", cabinetdetails[0].name);

}); 