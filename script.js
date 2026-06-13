const links = document.querySelectorAll(".navbar ul li a")

links.forEach(link => {
    link.addEventListener("click", function(){
        links.forEach(nav => nav.classList.remove("active"))
        this.classList.add("active")
    })
})

const toggle = document.querySelector(".toggle")
const cross = document.querySelector(".toggle-cross")
const crossLink = document.querySelector(".toggle-link-cross")
const link = document.querySelector(".socialLinkIcon")
const navbar = document.querySelector(".navbar ul")
const socialLink = document.querySelector(".sociallinks")

toggle.addEventListener("click", () => {
    navbar.classList.add("active")

    toggle.style.display = "none";
    cross.style.display ="block"
})

cross.addEventListener("click", () => {
    navbar.classList.remove("active")

    toggle.style.display = "block"
    cross.style.display = "none"
})


link.addEventListener("click", () => {
    socialLink.classList.add("active")

    link.style.display = "none"
    crossLink.style.display = "block"
})

crossLink.addEventListener("click", () => {
    socialLink.classList.remove("active")

    link.style.display = "block"
    crossLink.style.display = "none"
})










// header section end here

const slider = document.querySelectorAll(".slider img")
let current = 0;

function showSlide(index){
    slider.forEach( (slide) => {
        slide.classList.remove("active")
    });

    slider[index].classList.add("active")
}


const next = document.querySelector(".next")

next.addEventListener("click", () => {
    current++;
    if(current >= slider.length){
        current = 0;
    };
    showSlide(current);
});


const prev = document.querySelector(".prev")

prev.addEventListener("click", () => {
    current--;
    if(current < 0) {
        current = slider.length - 1;
    }
    showSlide(current);
})



setInterval(() => {
    current++;
    if(current >= slider.length){
        current = 0;
    }
    showSlide(current)
},3000);