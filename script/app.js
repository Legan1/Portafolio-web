


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




