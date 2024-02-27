let firstName
let lastName
let nextBtn
<<<<<<< HEAD

=======
>>>>>>> 4590c3a24995ca5878c31603c583deb802c2969a
let reqInput = () => {
    firstName = document.querySelector("#input-firstname").value 
    lastName = document.querySelector("#input-lastname").value
    nextBtn = document.querySelector("#next-btn")

    if ( firstName.length !=0 && lastName.length !=0 ) {
        nextBtn.disabled = false
    }
    return [ firstName, lastName]
}
<<<<<<< HEAD

=======
>>>>>>> 4590c3a24995ca5878c31603c583deb802c2969a
let nextForm = () => {
    inputChecks = document.querySelectorAll('.wrapper-form-check')

    if ( inputChecks[0].checked === true && inputChecks[1].checked === false) {

<<<<<<< HEAD
        let contentPositive = document.querySelector('.wrapper-content-positive')
        contentPositive.style.display = 'block'
        return inputChecks
    }  else if (inputChecks[1].checked === true && inputChecks[0].checked === false) {
        
        let contentNegative = document.querySelector('.wrapper-content-negative')
        contentNegative.style.display = 'block'
=======
        let contentnine = document.querySelector('.wrapper-content-nine')
        contentnine.style.display = 'block'
        return inputChecks
    }  else if (inputChecks[1].checked === true && inputChecks[0].checked === false) {
        
        let contenteleven = document.querySelector('.wrapper-content-eleven')
        contenteleven.style.display = 'block'
>>>>>>> 4590c3a24995ca5878c31603c583deb802c2969a
        return inputChecks
    } else {
        alert('Укажите только одно значение')
    }
}
<<<<<<< HEAD

=======
>>>>>>> 4590c3a24995ca5878c31603c583deb802c2969a
let saveForm = () => {
    let check = nextForm()
    let peopleNames = reqInput()
        if ( check[0].checked ) {
<<<<<<< HEAD
            let contentNegative = document.querySelector('.wrapper-content-positive')
            let inputKaf = contentNegative.querySelector('#input-kaf').value
            let inputSchool = contentNegative.querySelector('#input-school').value
            let select = contentNegative.querySelector('#select-nap')
=======
            let contenteleven = document.querySelector('.wrapper-content-eleven')
            let inputKaf = contenteleven.querySelector('#input-kaf').value
            let inputSchool = contenteleven.querySelector('#input-school').value
            let select = contenteleven.querySelector('#select-nap')
>>>>>>> 4590c3a24995ca5878c31603c583deb802c2969a
            let selectOptions = select.options[select.selectedIndex].text
            alert(`Участник ${peopleNames[0]} ${peopleNames[1]}, прошел обучение в школе ${inputSchool} и на данный момент является студентом кафедры ${inputKaf} явился на чемпионат по направлению ${selectOptions}`)

        } else if ( check[1].checked) {
<<<<<<< HEAD
            let contentNegative = document.querySelector('.wrapper-content-negative')
            let inputChild = contentNegative.querySelector('#input-name').value
            let inputSchool = contentNegative.querySelector('#input-school').value
            let select = contentNegative.querySelector('#select-nap')
            let selectOptions = select.options[select.selectedIndex].text
            
            alert(`Участник ${peopleNames[0]} ${peopleNames[1]} с наставником ${inputChild}, прошел обучение в школе ${inputSchool} и явился на чемпионат по направлению ${selectOptions}`)

=======
            let contentnine = document.querySelector('.wrapper-content-nine')
            let inputSchool = contentnine.querySelector('#input-school').value
            let select = contentnine.querySelector('#select-nap')
            let sel = contentnine.querySelector('#select-form')
            let selectOptions = select.options[select.selectedIndex].text
            
            alert(`Участник ${peopleNames[0]} ${peopleNames[1]} с наставником ${sel}, прошел обучение в школе ${inputSchool} и явился на чемпионат по направлению ${selectOptions}`)
>>>>>>> 4590c3a24995ca5878c31603c583deb802c2969a
        }
}