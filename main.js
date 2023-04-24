// DEFINING TERMS

const clearButton = document.querySelector('.clear')
const outPut = document.querySelector('.output')
const numberButtons = document.querySelectorAll('.number')
const evalButton = document.querySelector('.eval')



// FUNCTION
// declaring a perameter - in the future you can give it an input --> output


const calculate = function(formula){
   let result = eval(formula)
   outPut.innerText= result  
}


// EVENT LISTENERS


for (let button of numberButtons){
   button.addEventListener('click',(event)=>{
       outPut.innerText+=button.innerText}
   )}


  clearButton.addEventListener('click',() => {
    outPut.innerText=''})


  evalButton.addEventListener('click',() => {
   calculate(outPut.innerText) }) 
 
// additional think that happens when i hit the return key 
// return = 13  --> why not work? 
// tab = 9
// delete=13

document.addEventListener('keydown',(event) => {
    if (event.keyCode ===  9){
        console.log(event.keyCode)
        console.log(outPut.innerText)
    calculate(outPut.innerText)
    } 
})

document.addEventListener('keydown',(event) => {
    if (event.keyCode === 8) {
    outPut.innerText=''
    }
})


// NOTES:

// input -> div = .value -> .innerText
// delete and clear 'keydown' are its own event listener 
        // ENTER key  not working exactly -- maybe having to do with javaScript default? 
        // DELETE 




// *ISOLATE PROBLEMS BY TAKING AWAY VARIABLES 