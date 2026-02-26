'use strict';
document.addEventListener('DOMContentLoaded', () => {
    // common /////////////////////////////////////////////////////////
    // plugin
    const lenis = new Lenis();
    gsap.registerPlugin(ScrollTrigger);
    const windowWidth = gsap.matchMedia();

    // scroll 부드럽게
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);


    // link 아이템 크기 확장
    const linkSection = document.querySelector('.link');
    const linkList = document.querySelector('.link .link-list');
    gsap.to(linkList, {
        width: "100%",
        duration: 1,
        scrollTrigger: {
            trigger: linkSection,
            start: "top 20%",
            end: "30% 30%",
            scrub: 1.5,
        }
    });





    // PC /////////////////////////////////////////////////////////
    windowWidth.add("(min-width: 993px)", () => {
        // visual pin 효과
        const visualSection = gsap.utils.toArray(".visual");
        visualSection.forEach((panel, i) => {
            ScrollTrigger.create({
                trigger: panel,
                start: "top top",
                pin: true,
                scrub: .5,
                pinSpacing: false,
                markers: true
            });
        })

        // visual txt 효과
        const visualScroll = gsap.timeline({
            scrollTrigger: {
                trigger: ".visual .container",
                start: "top top",
                end: "center 10%",
                scrub: .5,
                markers: true
            }
        });
        visualScroll.to(".visual .txt-area .txt-item", { x: 0, y: 0, opacity: 1 })






    });




    // mobile /////////////////////////////////////////////////////////
    windowWidth.add("(max-width: 992px)", () => {

        gsap.to(".visual .txt-area .txt-item", { x: 0, y: 0, opacity: 1 })

    });







    // profile /////////////////////////////////////////////////////////










});