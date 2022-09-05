const input = document.getElementById('input');
const button = document.querySelector('.btn');


const answer = document.querySelector('.answer');

button.addEventListener('click', ()=>{
    const inputValue = input.value;
     let displayAnswer = inputValue**2;
    answer.innerHTML = `Square root of ${inputValue} is ${displayAnswer}`
    setBackToDefault();
})

function setBackToDefault(){
    input.value = '';
}