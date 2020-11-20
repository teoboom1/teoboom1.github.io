const btnModal = document.querySelector('#btn')
const modalContent = document.querySelector('.modal')
const btnClose = document.querySelector('.close')

btnModal.addEventListener('click', ()=>{
	modalContent.style.display = 'block'
})
btnClose.addEventListener('click', ()=>{
	modalContent.style.display = 'none'
})