let a = document.querySelector('.price1').innerHTML = '4000';
a = Number(a);
let b = document.querySelector('.price2').innerHTML = '3500';
b = Number(b);
let c = document.querySelector('.price3').innerHTML = '2000';
c = Number(c);
let d = document.querySelector('.price4').innerHTML = '5000';
d = Number(d);
let button = document.querySelector('.button');
let finalPrice = document.querySelector('.price5');

/*function sum(a, b, c, d) {
    return a + b + c + d;
    console.log (sum);
}*/

let sum = function(a, b, c, d) {
	return a + b + c + d;
};

let percent = sum * 20 / 100;

function total() {
    let result = Number(sum) - percent;
    finalPrice.textContent = result;
}

button.addEventListener('click', total);


