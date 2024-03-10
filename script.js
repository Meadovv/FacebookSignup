// Populate day select
for (var i = 1; i <= 31; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.text = i;
    document.getElementById('day').appendChild(option);
}

// Populate month select
for (var i = 1; i <= 12; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.text = i;
    document.getElementById('month').appendChild(option);
}

// Populate year select
for (var i = 1900; i <= new Date().getFullYear(); i++) {
    var option = document.createElement('option');
    option.value = i;
    option.text = i;
    document.getElementById('year').appendChild(option);
}

document.getElementById('day').value = new Date().getDate();
document.getElementById('month').value = new Date().getMonth() + 1;
document.getElementById('year').value = new Date().getFullYear();

genderButtons = document.querySelectorAll('input[name="gender"]')
console.log(genderButtons)
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