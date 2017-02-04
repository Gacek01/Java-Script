'use strict';
var liczba1 = 8
	, liczba2 = -10
	, liczba3 = -15
	, wynik;

function mnozenie(par1, par2, par3) {
	wynik = par1 * par2 * par3;
	return wynik;
}
mnozenie(liczba1, liczba2, liczba3);

function check(par1) {
	if (par1 >= 0) {
		console.log(wynik);
	}
	else {
		document.write(wynik);
	}
}
check(wynik);