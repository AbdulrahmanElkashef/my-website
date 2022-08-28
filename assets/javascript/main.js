/*---------CHANGE BACKGROUND HEADER --------*/
function scrollHeader(){
    const header = document.getElementById("header")
   // when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
   if(this.scrollY >= 50) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")

}
window.addEventListener("scroll", scrollHeader)

/*---------SERVICES MODAL --------*/
const modalViews = document.queryselectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')
    
let modal = function(modaLCLick){
    modalViews[modaLCLick].classlist.add('active-modal')
}

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
        modal(i)
    })
})        


/*-------MIXITUP FILTER PORTFOLIO------*/

      
/* Link active work */


/*----------SWIPER TESTIMONIAL--------*/


/*--------SCROLL SECTIONS ACTIVE LINK-------*/
