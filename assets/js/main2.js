
/*------------------------------ Loader ------------------------------*/
window.addEventListener("load", ()=>{

    const loader = document.querySelector(".loader");
    loader.classList.add("loader--hidden");
    
    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const today = new Date();
    const year = today.getFullYear();
    document.getElementById('today-year').innerHTML = year;
});