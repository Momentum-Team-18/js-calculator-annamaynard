// DEFINING TERMS

const clearButton = document.querySelector('.clear')
const outPut = document.querySelector('.output')
const numberButtons = document.querySelectorAll('.number')
const evalButton = document.querySelector('.eval')

// FUNCTION
// declaring a perameter - in the future you can give it an input --> output 

const calculate = function(formula){ 
    let result = eval(formula) 
    outPut.value= result   
}

// EVENT LISTENERS 

for (let button of numberButtons){
    button.addEventListener('click',(event)=>{
        outPut.value+=button.innerText
    })
}
   clearButton.addEventListener('click',() => {
     outPut.value=''})

   evalButton.addEventListener('click',() => {
    calculate(outPut.value)
   })
   
    