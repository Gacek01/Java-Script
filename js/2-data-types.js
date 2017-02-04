'use strict';
/*Typ liczbowy*/
var wyplata = 5000;
var premia = 2000;
var calkowitaWyplata = wyplata + premia;
console.log(calkowitaWyplata);
/*Typ string*/
var wyplataStr = "5000";
var premiaStr = "2000";
var calkowitaWyplataStr = wyplataStr + premiaStr;
console.log(calkowitaWyplataStr);
/*Typ logiczny*/
var czyJestSmog;
czyJestSmog = true;
if (czyJestSmog) {
	console.log("Jest Smog");
}
else {
	console.log("Nie ma smogu");
}
/*Typ specjalny / undefined / null*/
var niezdefiniowanaZmienna;
var nullowaZmienna = null;
console.log(niezdefiniowanaZmienna);
console.log(nullowaZmienna);
var imiestudenta = "Krzysiek";
console.log(imiestudenta.indexOf('k'));