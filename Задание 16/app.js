let summ
let otpName
let polName
let nextBtn
let reqInput = () => {
    summ = document.querySelector("#input-summ").value
    otpName=document.querySelector("#input-otp_name").value
    polName=document.querySelector("#input-pol_name").value
    nextBtn = document.querySelector("#next-btn")
    if ( summ.length !=0 && otpName.length !=0 && polName.length !=0) {
        nextBtn.disabled = false
    }
    return [summ]
}
let saveForm=() =>{
    let operation = reqInput()
    alert(`Уважаемый ${otpName} операция на ${summ} успешно переведена человеку ${polName}`)

}