const a = document.querySelector('.price1').innerHTML = +'4000';
//console.log(a);
const b = document.querySelector('.price2').innerHTML = +'3500';
//console.log(b);
const c = document.querySelector('.price3').innerHTML = +'2000';
//console.log(c);
const d = document.querySelector('.price4').innerHTML = +'5000';
//console.log(d);
const button = document.querySelector('.button');
const finalPrice = document.querySelector('.price5');

function sum(a, b, c, d) {
    return a + b + c + d;
}
let result = sum(a, b, c, d);
//console.log (result);

/*let sum = function(a, b, c, d) {
	return a + b + c + d;
};
console.log(a + b + c + d);*/

let percent = result * 20 / 100;
//console.log (percent);

function total() {
    let totalPrice = Number(result) - percent;
    finalPrice.textContent = totalPrice;
}

button.addEventListener('click', total);


