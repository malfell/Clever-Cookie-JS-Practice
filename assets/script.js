// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Mallory Fellows" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let cookies = 0
let totalCookies = document.getElementById('qty-total')

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')

// Code to update name display
credit.textContent = `Created by ${yourName}`

let gbTotal = document.getElementById('qty-gb')
// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
gb = gb + 1
gbTotal.textContent = gb
cookies = gb + cc + sugar
totalCookies.textContent = cookies

})
const gbMinusBtn = document.querySelector('#minus-gb')

gbMinusBtn.addEventListener('click', function(){
    if(gb > 0){
        gb--
        gbTotal.textContent = gb
        cookies = gb + cc + sugar
        totalCookies.textContent = cookies

    }
})

// TODO: Hook up event listeners for the rest of the buttons
//CHOCOLATE CHIP
const ccPlusBtn = document.querySelector('#add-cc')
let ccTotal = document.getElementById('qty-cc')
// Event listener for clicks on the "+" button for Chocolate Chip cookies
ccPlusBtn.addEventListener('click', function() {
cc = cc + 1
ccTotal.textContent = cc
cookies = gb + cc + sugar
totalCookies.textContent = cookies

})

const ccMinusBtn = document.querySelector('#minus-cc')
ccMinusBtn.addEventListener('click', function(){
    if(cc > 0){
        cc--
        ccTotal.textContent = cc
        cookies = gb + cc + sugar
        totalCookies.textContent = cookies

    }
})

//SUGAR SPRINKLE
const sugarPlusBtn = document.querySelector('#add-sugar')
let sugarTotal = document.getElementById('qty-sugar')
// Event listener for clicks on the "+" button for Sugar Sprinkle cookies
sugarPlusBtn.addEventListener('click', function() {
sugar = sugar + 1
sugarTotal.textContent = sugar
cookies = gb + cc + sugar
totalCookies.textContent = cookies

})

const sugarMinusBtn = document.querySelector('#minus-sugar')
sugarMinusBtn.addEventListener('click', function(){
    if(sugar > 0){
        sugar--
        sugarTotal.textContent = sugar
        cookies = gb + cc + sugar
        totalCookies.textContent = cookies

    }
})