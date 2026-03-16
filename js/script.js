'use strict';
document.addEventListener('DOMContentLoaded', () => {
    // plugin
    const lenis = new Lenis();
    gsap.registerPlugin(ScrollTrigger);

    // 스크롤 부드럽게
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    // 마우스 글자 효과
    window.addEventListener("mousemove", e => {
        gsap.to(".cursor .txt", {
            x: e.clientX,
            y: e.clientY,
            duration: 0.8,
            ease: "power2.out",
            stagger: {
                each: 0.05,
            }
        });
    });


    // a 태그에 마우스 올렸을 때 글자 변경
    const links = document.querySelectorAll('a');
    const cursorTexts = document.querySelectorAll('.cursor .txt');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursorTexts.forEach(txt => {
                if (txt.querySelector('span')) {
                    txt.querySelector('span').textContent = "click";
                } else {
                    txt.textContent = "click";
                }
            });
            gsap.to(".cursor .txt", { duration: 0.3 });
        });
        link.addEventListener('mouseleave', () => {
            cursorTexts.forEach(txt => {
                if (txt.querySelector('span')) {
                    txt.querySelector('span').textContent = "scroll down";
                } else {
                    txt.textContent = "scroll down";
                }
            });
            gsap.to(".cursor .txt", { duration: 0.3 });
        });
    });

});



