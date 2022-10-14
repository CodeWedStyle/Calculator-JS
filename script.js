const calculator = document.querySelector('.calculator');
const values = document.querySelector('#values');
const result = document.querySelector('#result');

calculator.addEventListener('click', (e)=>{
    if(!e.target.classList.contains('calculator__button')) return;

    const value = e.target.innerText;

    switch(value){
        case 'C':
            values.innerText= '';
            result.innerText= '0';
            break;
        case '↩':
            if(values.innerText){
                values.innerText = values.innerText.slice(0, -1);
            }
            break;
        case '×':
            values.innerText += '*';
            break;
        case '÷':
            values.innerHTML += '/';
            break;
        case '=':
            try{
            if(values.innerText.search(/[^0-9*/+-.()]/im) != -1) return;
            result.innerText = eval(values.innerText).toFixed(2);
            }catch{
                if( values.innerText === ''){
                    result.innerText = 'Empty';
                    setTimeout(clearDisplay, 1200);
                } else {
                    result.innerText = 'Invalid value';
                    setTimeout(clearDisplay,1200);
                }
            }
            break;
        default:
            if(result.innerText != 'Invalid value' && result.innerText == '0'){
                values.innerText += value;
            }else{
                values.innerText += value;
            }
    }
});

function clearDisplay(){
    values.innerText = '';
    result.innerText = '0';
}

const changeColor = document.querySelector('.change__color')
const area = document.querySelector('.calculator__input-area')
const buttons = document.querySelectorAll('.calculator__button')
const rightBtns = document.querySelectorAll('.calculator__button-right')
const topBtns = document.querySelectorAll('.calculator__button-top')

changeColor.addEventListener('click', ()=>{
    changeColor.classList.toggle('change__color--light');
    area.classList.toggle('calculator__input-area--light');
    calculator.classList.toggle('calculator--light');

    for( let i =0; i < buttons.length; i++){
        buttons[i].classList.toggle('calculator__button--light');
    }

    for( let i =0; i < rightBtns.length; i++){
        rightBtns[i].classList.toggle('calculator__button-right--light');
    }

    for( let i =0; i < topBtns.length; i++){
        topBtns[i].classList.toggle('calculator__button-top--light');
    }

    values.classList.toggle('calculator__values--light');
    result.classList.toggle('calculator__result--light');
})