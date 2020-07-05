'use strict';

//let form = document.querySelector('#')
//let carMark document.querySelector('#')

document.querySelector('#form').addEventListener('submit', checkCar);

function checkCar(event) {
	let carMark = document.querySelector('#carMark').value;
	let carNumber = document.querySelector('#carNumber').value;
	let time = new Date();

	if (!carMark && !carNumber) {
		confirm('Please fill all fields');
		return false;
	}

	car = {
		mark: carMark,
		RegNumber: carNumber,
		hora: time.getHours(),
		minuts: time.getMinutes()
	};
	//console.log(car);
	if (localStorage.getItem('data') === null) {
		let cars = [];
		cars.push(car);
		localStorage.setItem('data', JSON.stringify(cars));
	} else {
		let cars = JSON.parse(localStorage.getItem('data'));
		cars.push(car);
		localStorage.setItem('data', JSON.stringify(cars));
	}
	document.querySelector('#form').reset();
	showData();
	event.preventDefault();
}

function showData() {
	let cars = JSON.parse(localStorage.getItem('data'));
	let carResults = document.querySelector('#results');

	carResults.innerHTML = '';
	for (let i = 0; i < cars.length; i++) {
		let mark = cars[i].mark;
		let RegNumber = cars[i].RegNumber;
		let hora = cars[i].hora;
		let minuts = cars[i].minuts;

		carResults.innerHTML +=
			'<tr><td>' +
			mark +
			'</td><td>' +
			RegNumber +
			'</td><td>' +
			hora +
			':' +
			minuts +
			'</td><td><botton class="btn btn-danger" onclick="removeCar(\'' +
			RegNumber +
			'\')">Exit</button></td>' +
			'</tr>';
	}
}

//Remove car
function removeCar(RegNumber) {
	let cars = JSON.parse(localStorage.getItem('data'));
	for (let i = 0; i < cars.length; i++) {
		if (cars[i].RegNumber == RegNumber) {
			cars.splice(i, 1);
		}
		localStorage.setItem('data', JSON.stringify(cars));
	}
	showData();
}
