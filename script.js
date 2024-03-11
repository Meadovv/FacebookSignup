var dayBirthDay = document.getElementById('day')
var monthBirthDay = document.getElementById('month')
var yearBirthDay = document.getElementById('year')

// Populate day select
for (var i = 1; i <= 31; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.text = i;
    dayBirthDay.appendChild(option);
}

// Populate month select
for (var i = 1; i <= 12; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.text = i;
    monthBirthDay.appendChild(option);
}

// Populate year select
for (var i = 1900; i <= new Date().getFullYear(); i++) {
    var option = document.createElement('option');
    option.value = i;
    option.text = i;
    yearBirthDay.appendChild(option);
}

dayBirthDay.value = new Date().getDate();
monthBirthDay.value = new Date().getMonth() + 1;
yearBirthDay.value = new Date().getFullYear();


var genderButtons = document.querySelectorAll('input[name="gender"]')
genderButtons.forEach(button => {
    button.addEventListener('change', () => {
        if(button.attributes.value.value === 'custom' && button.checked) {
            document.querySelector('.custom_gender_addon').style.display = 'flex'
        } else {
            document.querySelector('.custom_gender_addon').style.display = 'none'
            document.querySelector('.custom_gender_addon .select_field').value = 'default'
            document.querySelector('.custom_gender_addon input').value = ''
        }
    })
})

var genderFields = document.querySelectorAll('.field_with_icon .fields .radio-container')
genderFields.forEach(field => {
    field.addEventListener("click", function() {
        genderFields.forEach(field => {
            field.style.border = '1px solid #ccd0d5'
        })
    })
})

var genderAddon = document.querySelector('.custom_gender_addon .select_field')
genderAddon.addEventListener('change', function() {
    if(this.value !== 'default') {
        this.style.border = '1px solid #ccd0d5'
    }
})

var genderRadios = document.querySelectorAll('.field_with_icon .fields .radio-container input')

var firstname = document.getElementById('firstname')
var surname = document.getElementById('surname')
var username = document.getElementById('username')
var password = document.getElementById('password')

firstname.addEventListener('change', function() {
    if(!this.value) {
        this.style.border = '1px solid #ce4646'
    } else {
        this.style.border = '1px solid #ccd0d5'   
    }
})

surname.addEventListener('change', function() {
    if(!this.value) {
        this.style.border = '1px solid #ce4646'
    } else {
        this.style.border = '1px solid #ccd0d5'   
    }
})

username.addEventListener('change', function() {
    if(!this.value) {
        this.style.border = '1px solid #ce4646'
    } else {
        this.style.border = '1px solid #ccd0d5'   
    }
})

password.addEventListener('change', function() {
    if(!this.value) {
        this.style.border = '1px solid #ce4646'
    } else {
        this.style.border = '1px solid #ccd0d5'   
    }
})


document.querySelector('.signup_button').addEventListener('click', function() {
    if(!firstname.value) {
        firstname.style.border = '1px solid #ce4646'
    } else {
        firstname.style.border = '1px solid #ccd0d5'   
    }

    if(!surname.value) {
        surname.style.border = '1px solid #ce4646'
    } else {
        surname.style.border = '1px solid #ccd0d5'   
    }

    if(!username.value) {
        username.style.border = '1px solid #ce4646'
    } else {
        username.style.border = '1px solid #ccd0d5'   
    }

    if(!password.value) {
        password.style.border = '1px solid #ce4646'
    } else {
        password.style.border = '1px solid #ccd0d5'   
    }

    let genderFlag = false;
    genderRadios.forEach(radio => {
        if(radio.checked) genderFlag = true;
    })
    if(!genderFlag) {
        genderFields.forEach(field => {
            field.style.border = '1px solid #ce4646'
        })
    }

    if(genderRadios[2].checked && genderAddon.value === 'default') {
        genderAddon.style.border = '1px solid #ce4646'
    }

    if(new Date().getFullYear() - yearBirthDay.value < 18) {
        
    }
})