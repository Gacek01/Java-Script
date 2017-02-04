'use strict';
var l1 = -10
	, l2 = -101
	, l3 = 10
	, l4 = -345
	, l5 = 3453
	, l6 = 234
	, l7 = -45
	, l8 = 1207
	, l9 = 12083
	, wynik;

function mnozenie(par1, par2, par3) {
	return par1 * par2 * par3;
}

function check(wynik) {
	(wynik >= 0) ? console.log(wynik): document.write(wynik);
}
check(mnozenie(l1, l2, l3));
check(mnozenie(l4, l5, l6));
check(mnozenie(l7, l8, l9));