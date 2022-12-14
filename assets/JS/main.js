/*---------CHANGE BACKGROUND HEADER --------*/
function scrollHeader(){
    const header = document.getElementById("header")
   // when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
   if(this.scrollY >= 50) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")

}
window.addEventListener("scroll", scrollHeader)

/*---------SERVICES MODAL --------*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalCLick){
    modalViews[modalCLick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
        modal(i)
    })
})
 

modalClose.forEach((mc) =>{
    mc.addEventListener ('click', () =>{
         modalViews.forEach((mv) =>{
             mv.classList.remove ( 'active-modal')
    })
 })

})
 
/*-------MIXITUP FILTER PORTFOLIO------*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});
      
/* Link active work */
const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(L=> L.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(L=> L.addEventListener('click', activeWork ))

/*----------SWIPER TESTIMONIAL--------*/


/*--------SCROLL SECTIONS ACTIVE LINK-------*/
