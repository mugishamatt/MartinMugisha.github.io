
class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement=previousOperandTextElement;
        this.currentOperandTextElement=currentOperandTextElement;
        this.clear()
    }

    clear(){
        this.currentOperand=""
        this.previousOperand=""
        this.operation="undefined"


    }
    delete(){

    }
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
      }seOperation(operation){


    }
    compute(){
        let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''

    }
    updateDisplay(){
        this.currentOperandTextElement.innerText=this.currentOperand

    }


}





let numberButtons = document.querySelectorAll('[data-number]')
console.log(numberButtons)
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

let calculator=new Calculator(previousOperandTextElement ,currentOperandTextElement )
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
      console.log("clicked")
    })
  })

  equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
  })

  
