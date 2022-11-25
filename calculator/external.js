class Calculator{
    
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear(){
        this.previousOperand = '';
        this.currentOperand = '';
        this.operation = '';
    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
    apendNumber(number){
        if(number === '.' && this.currentOperand.includes('.'))return;
        this.currentOperand = this.currentOperand.toString()+number.toString();
    }
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        if(this.operation !== null){
            this.previousOperandTextElement.innerText = 
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        }
    }
    compute(){
        let computation;
        let prev = parseFloat(this.previousOperand);
        let cur = parseFloat(this.currentOperand);
        if(isNaN(prev) || isNaN(cur))return;
        switch(this.operation){
            case '+':
                computation = prev + cur;
                break;
            case '-':
                computation = prev - cur;
                break;
            case 'x':
                computation = prev * cur;
                break;
            case '÷':
                computation = prev / cur;
                break;
            case '%':
                computation = prev % cur;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = '';
        this.previousOperand = '';
    }
    chooseOperation(operation){
        if(this.currentOperand === '')return;
        if(this.previousOperand !== ''){
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        console.log(integerDigits);
        const decimalDigits = stringNumber.split('.')[1]
        console.log(decimalDigits);
        let integerDisplay;
        if (isNaN(integerDigits)) {
          integerDisplay = '';
        } else {
          integerDisplay = integerDigits.toLocaleString('en');
        }
        if (decimalDigits != null) {
          return `${integerDisplay}.${decimalDigits}`;
        } else {
          return integerDisplay;
        }
      }
}
let buttonNumbers = document.querySelectorAll('[data-number]');
let operationNumbers = document.querySelectorAll('[data-operation]');
let equalsButton = document.querySelector('[data-equal]');
let deletebtn = document.querySelector('[data-delete]');
let allClearbtn = document.querySelector('[data-allclear]');
let previousOperandTextElement = document.querySelector('[data-previous-operand]');
let currentOperandTextElement = document.querySelector('[data-current-operand]');



let calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

buttonNumbers.forEach(button => button.addEventListener('click', ()=>{
    calculator.apendNumber(button.innerText);
    // console.log(button.innerText);
    calculator.updateDisplay();
}));

operationNumbers.forEach(button => button.addEventListener('click', ()=>{
    calculator.chooseOperation(button.innerText);
    // console.log(button.innerText);
    calculator.updateDisplay();
}));

equalsButton.addEventListener('click', button =>{
    calculator.compute();
    calculator.updateDisplay();
})

allClearbtn.addEventListener('click', button =>{
    calculator.clear();
    calculator.updateDisplay();
})
deletebtn.addEventListener('click', button =>{
    calculator.delete();
    calculator.updateDisplay();
})