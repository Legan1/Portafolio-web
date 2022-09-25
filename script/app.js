/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)




//*writing */
const text = document.querySelector(".sec-text")

const textload =() =>{
    setTimeout(() => {
        text.textContent=''
    }, 0);
    setTimeout(() => {
        text.textContent='diseñador'
    }, 4000);
    setTimeout(() => {
        text.textContent='copywriting'
    }, 8000);
}
textload();
setInterval(textload,12000);

/**Preloader */


window.addEventListener("load",()=>{

    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        preloader.style.display = "none"
    },2000 );
   
  
})




