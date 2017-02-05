'use strict';
var jsonAuta = {
	"auta": [{
		marka: "Audi"
		, pojemnosc: "2234"
		, moc: "300"
	}, {
		marka: "Volkswagen"
		, pojemnosc: "1765"
		, moc: "500"
	}, {
		marka: "Peugeot"
		, pojemnosc: "1543"
		, moc: "350"
	}, {
		marka: "Hyundai"
		, pojemnosc: "2800"
		, moc: "200"
	}]
}
console.log(jsonAuta);
jsonAuta.auta.forEach(function (auto, i) {
	console.log("Marka: " + auto.marka + "\n" + "Pojemnosc: " + auto.pojemnosc + "\n" + "Moc: " + auto.moc)
});