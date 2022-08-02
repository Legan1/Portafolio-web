const text = document.querySelector(".sec-text")

const textload =() =>{
    setTimeout(() => {
        text.textContent='Luis Angel'
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