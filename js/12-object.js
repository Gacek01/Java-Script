'use strict';

function Auto(marka) {
	this.marka = marka;
	this.pojemnosc;
	this.moc;
	this.wyswietlDane = function () {
		console.log("Marka: " + this.marka + "\n" + "Pojemnosc: " + this.pojemnosc + "\n" + "Moc: " + this.moc);
	}
}
var audi = new Auto("Audi");
audi.pojemnosc = 2234;
audi.moc = 300;
audi.wyswietlDane();
var volkswagen = new Auto("Volkswagen");
volkswagen.pojemnosc = 1765;
volkswagen.moc = 500;
volkswagen.wyswietlDane();
var peugeot = new Auto("Peugeot");
peugeot.pojemnosc = 1543;
peugeot.moc = 350;
peugeot.wyswietlDane();
var hyundai = new Auto("Hyundai");
hyundai.pojemnosc = 2800;
hyundai.moc = 200;
hyundai.wyswietlDane();