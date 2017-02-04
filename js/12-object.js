'use strict';
/*var Krzysiek = {
	imie: "Krzysiek"
	, wzrost: 180
	, przedstawosobe: function () {
		console.log(this.imie)
	}
}
var Krystian = {
	imie: "Krystian"
	, wzrost: 180
	, przedstawosobe: function () {
		console.log(this.imie)
	}
}
Krzysiek.przedstawosobe();
Krystian.przedstawosobe();*/
function Osoba(imie, nazwisko) {
	this.imie = imie;
	this.nazwisko = nazwisko;
	this.wzrost;
	this.oczy;
	this.wyswietlInfo = function () {
		console.log("Imie: " + this.imie + "\n" + "Nazwisko: " + this.nazwisko + "\n" + "Wzrost: " + this.wzrost + "\n" + "Oczy: " + this.oczy);
	}
}
var krystian = new Osoba("Krystian", "Dziopa");
krystian.wzrost = 180;
krystian.oczy = "niebieskie";
krystian.wyswietlInfo();