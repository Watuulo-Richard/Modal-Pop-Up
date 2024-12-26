// Get Modal Element
const modalElement = document.getElementById('simpleModal')
// Get Open Modal Button
const modalBtn = document.getElementById('modalBtn')
// Get Close Modal Button
const closeBtn = document.getElementById('closeBtn')
//Listening For A Click
// modalBtn.addEventListener('click', function(){
//     modalElement.style.display = 'block'
// })
// console.log(modalBtn)
modalBtn.addEventListener('click', openModal)
function openModal(){
    modalElement.style.display = 'block'
}

//Listening For A Click On A Close Btn
closeBtn.addEventListener('click', closeModal)
console.log(closeBtn, 'clicked')
// Function To Close Modal
function closeModal() {
    modalElement.style.display = 'none'
}

// Listening For An Outside Click
window.addEventListener('click', clickOutside)
// Function To Close the outside click
function clickOutside(e){
    if(e.target == modalElement){
        modalElement.style.display = 'none'
    }
}