'use strict';
var wzrostMateusza = 190;
var wzrostKai = 160;
//--------------Warunek if else---------------------//
if (wzrostMateusza > wzrostKai) {
	console.log("Mateusz jest wyzszy")
}
if (wzrostMateusza < wzrostKai) {
	console.log("Mateusz jest niższy");
}
else {
	console.log("Kaja jest niższa");
}
if (wzrostMateusza > wzrostKai) {
	console.log("Mateusz jest niższy");
}
else if (wzrostMateusza == wzrostKai) {
	console.log("Kaja jest wysoka jak Mateusz");
}
else {
	console.log("Kaja jest niższa");
};
//------------------Warunek switch----------------//
var kolor = 'czerwony';
switch (kolor) {
case 'czerwony':
	console.log("Kolor czerwony") break;
case "zielony":
	console.log("Kolor zielony") break;
case "niebieski":
	console.log("Kolor niebieski") break;
default:
	console.log("Kolor inny") break;
}