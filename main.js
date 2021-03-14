
gsap.registerPlugin(ScrollTrigger);


document.addEventListener("DOMContentLoaded", function(event){
gsap.set("svg", { visibility: "visible" });




gsap.from(".hero-text", {opacity: 0, y: 100, duration: 1,});

gsap.from(".hero-contact-details", {opacity: 0, y: 10, duration: 1, delay: 1});



gsap.from(".gps-fade", {opacity:0, x:-50, duration:1, scrollTrigger:".gps-fade"})

gsap.from(".cost-fade", {opacity:0, x:50, duration:1, scrollTrigger:".cost-fade"})

gsap.from(".us-fade", {opacity:0, x:-50, duration:1, scrollTrigger:".us-fade"})




});