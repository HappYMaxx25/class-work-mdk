let firstName
let lastName
let nextBtn
let reqInput = () => {
    firstName = document.querySelector("#input-firstname").value 
    lastName = document.querySelector("#input-lastname").value
    nextBtn = document.querySelector("#next-btn")

    if ( firstName.length !=0 && lastName.length !=0 ) {
        nextBtn.disabled = false
    }
    return [ firstName, lastName]
}
let nextForm = () => {
    inputChecks = document.querySelectorAll('.wrapper-form-check')

    if ( inputChecks[0].checked === true && inputChecks[1].checked === false) {

        let contentnine = document.querySelector('.wrapper-content-nine')
        contentnine.style.display = 'block'
        return inputChecks
    }  else if (inputChecks[1].checked === true && inputChecks[0].checked === false) {
        
        let contenteleven = document.querySelector('.wrapper-content-eleven')
        contenteleven.style.display = 'block'
        return inputChecks
    } else {
        alert('Укажите только одно значение')
    }
}
let saveForm = () => {
    let check = nextForm()
    let peopleNames = reqInput()
        if ( check[0].checked ) {
            let contenteleven = document.querySelector('.wrapper-content-eleven')
            let inputKaf = contenteleven.querySelector('#input-kaf').value
            let inputSchool = contenteleven.querySelector('#input-school').value
            let select = contenteleven.querySelector('#select-nap')
            let selectOptions = select.options[select.selectedIndex].text
            alert(`Участник ${peopleNames[0]} ${peopleNames[1]}, прошел обучение в школе ${inputSchool} и на данный момент является студентом кафедры ${inputKaf} явился на чемпионат по направлению ${selectOptions}`)

        } else if ( check[1].checked) {
            let contentnine = document.querySelector('.wrapper-content-nine')
            let inputSchool = contentnine.querySelector('#input-school').value
            let select = contentnine.querySelector('#select-nap')
            let sel = contentnine.querySelector('#select-form')
            let selectOptions = select.options[select.selectedIndex].text
            
            alert(`Участник ${peopleNames[0]} ${peopleNames[1]} с наставником ${sel}, прошел обучение в школе ${inputSchool} и явился на чемпионат по направлению ${selectOptions}`)
        }
}