const nameInput = document.querySelector('#name')
const namecard = document.querySelector('.cardname')
const cardNumberInput = document.querySelector('#number')
const cardNumber = document.querySelector('.cardnumber')
const cvcNumberInput = document.querySelector('#cvc')
const cvcNumber = document.querySelector('.cardcvc')
const monthNumberInput = document.querySelector('#dateM')
const monthNumber = document.querySelector('.month')
const yearNumberInput = document.querySelector('#dateY')
const yearNumber = document.querySelector('.year')
const blank = document.querySelector('.blank')
const blankDate = document.querySelector('.blankDate')
const blankName = document.querySelector('.blankName')
const blankNumber = document.querySelector('.blankNumber')
const cardForm = document.querySelector('.right-side')
const thanku = document.querySelector('.thankyou')
nameInput.addEventListener("input", () =>{
    if (!isNaN(nameInput.value)){
        nameInput.value = ''
        return
    }
    namecard.innerHTML = nameInput.value

})


cardNumberInput.addEventListener("input", () =>{
    let res = [...cardNumberInput.value].map((d, i) => (i) % 4 == 0 ? ' ' + d : d).join('').trim()
    if (cardNumberInput.value.length > 16){
        cardNumberInput.value = cardNumberInput.value.slice(0,1)
        return
    }
    cardNumber.innerHTML = res
})

cvcNumberInput.addEventListener("input", () =>{
    if (cvcNumberInput.value.length > 3){
        cvcNumberInput.value = cvcNumberInput.value.slice(0,3)
        return
    }
    cvcNumber.innerHTML = cvcNumberInput.value

})

monthNumberInput.addEventListener("input", () =>{
    if (monthNumberInput.value.length > 2){
        monthNumberInput.value = monthNumberInput.value.slice(0,2)
        return
    }
    monthNumber.innerHTML = monthNumberInput.value

})

yearNumberInput.addEventListener("input", () =>{
    if (yearNumberInput.value.length > 2){
        yearNumberInput.value = yearNumberInput.value.slice(0,2)
        return
    }
    yearNumber.innerHTML = yearNumberInput.value
})

const confirm = document.querySelector('.confirm')

confirm.addEventListener("click", () => {
    if (!cvcNumberInput.value.length){
        blank.style.display ='block'
        cvcNumberInput.style.border = '1px solid red'
    } else if (cvcNumberInput.value.length){
        blank.style.display ='none'
        cvcNumberInput.style.border = '1px solid hsl(270, 3%, 87%)'
    }
    if (!monthNumberInput.value.length || !yearNumberInput.value.length){
        blankDate.style.display ='block'
        monthNumberInput.style.border = '1px solid red'
        yearNumberInput.style.border = '1px solid red'
    } else if (monthNumberInput.value.length || yearNumberInput.value.length){
        blankDate.style.display ='none'
        monthNumberInput.style.border = '1px solid hsl(270, 3%, 87%)'
        yearNumberInput.style.border = '1px solid hsl(270, 3%, 87%)'
    }
    if (!nameInput.value.length){
        blankName.style.display ='block'
        nameInput.style.border = '1px solid red'
    } else{
        blankName.style.display ='none'
        nameInput.style.border = '1px solid hsl(270, 3%, 87%)'
    }
    if (!cardNumberInput.value.length){
        blankNumber.style.display ='block'
        cardNumberInput.style.border = '1px solid red'
    } else{
        blankNumber.style.display ='none'
        cardNumberInput.style.border = '1px solid hsl(270, 3%, 87%)'
    }
    if (cvcNumberInput.value.length && cardNumberInput.value.length && nameInput.value.length && yearNumberInput.value.length && monthNumberInput.value.length && cvcNumberInput.value.length){
        cardForm.style.display = 'none'
        thanku.style.display = 'flex'
    }
})