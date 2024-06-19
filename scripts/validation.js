document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault()
    
    let isValid = true

    const firstName = document.getElementById('firstName')
    const firstNameError = document.getElementById('firstNameError')
    if (firstName.value.trim() === '') {
        firstNameError.style.display = 'block'
        isValid = false
    } else {
        firstNameError.style.display = 'none'
    }

    const secondName = document.getElementById('secondName')
    const secondNameError = document.getElementById('secondNameError')
    if (secondName.value.trim() === '') {
        secondNameError.style.display = 'block'
        isValid = false;
    } else {
        secondNameError.style.display = 'none'
    }

    const email = document.getElementById('emailAddress')
    const emailError = document.getElementById('emailError')
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    if (!emailPattern.test(email.value.trim())) {
        emailError.style.display = 'block'
        isValid = false
    } else {
        emailError.style.display = 'none'
    }

    const phoneNumber = document.getElementById('phoneNumber')
    const phoneError = document.getElementById('phoneError')
    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(phoneNumber.value.trim())) {
        phoneError.style.display = 'block'
        isValid = false;
    } else {
        phoneError.style.display = 'none'
    }

    if (isValid) {
        alert('Form submitted successfully!')
        this.submit()
    }
});
