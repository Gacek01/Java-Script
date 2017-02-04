'use strict';
var imiona = ["Adam", "Ewa", "Jan"];
imiona.push("Andrzej");
/*for (var i = 0; i < imiona.length; i++) {
	console.log(imiona[i]);
}*/
for (var i = imiona.length - 1; i >= 0; i--) {
	console.log(imiona[i]);
}
imiona.forEach(function (element, i) {
	console.log("Element" + i + ": " + element)
});
console.log(imiona.join(" - "));
console.log(imiona.sort());
console.log(imiona.reverse());