const toggleBtns = document.querySelectorAll(".toggle");
const notSubscribe = document.querySelectorAll("#Notsubscribe")
const subscribe = document.querySelectorAll("#Subscribe ")
const btnSubscribe = document.querySelector(".subscribe")



toggleBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const question = e.currentTarget.parentElement.parentElement//PEGANDO O PAI DO CURRENT TARGET
        console.log(question)
        question.classList.toggle("show")
    })
})
function Toogle() {
    subscribe.forEach(function (e) { e.classList.toggle("on") })
    notSubscribe.forEach(function (e) { e.classList.toggle("on") })
}
