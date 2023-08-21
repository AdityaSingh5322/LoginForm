const Username = document.getElementById('Username') 
const password = document.getElementById('password')
const Loginform = document.getElementById('Loginform')
const errorElement = document.getElementById('error')
debugger

Loginform.addEventListener('submit', (e) => {
    var messages = [];
    if(password.value.length <= 6){
        messages.push('Password must be longer than 6 characters')
    }

    if(password.value.length >= 20){
        messages.push('Password must be less than 20 characters')
    }

    if(password.value === 'password'){
        messages.push('password cannot be password')
    }

    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})

    

    
