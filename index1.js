//задание под *
const numberCount = document.querySelector('.number_count');
const button = document.querySelector('button');

function calc () {
    let numberAdd = document.querySelector('.number_add').value;
    let result = numberAdd * numberAdd;
    numberCount.value = result;
}

button.addEventListener('click', calc);



