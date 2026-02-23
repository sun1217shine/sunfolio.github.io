'use strict';
document.addEventListener('DOMContentLoaded', () => {
    // plugin /////////////////////////////////////////////////////////
    gsap.registerPlugin(ScrollTrigger);

    const mainCon = gsap.utils.toArray(".main-con");
    const sections = gsap.utils.toArray("section");

    // fullpage
    // gsap.to(sections, {
    //     yPercent: -100 * (sections.length - 1), 
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: mainCon,
    //         pin: true,
    //         scrub: 2,   
    //         end: () => "+=" + window.innerHeight * sections.length, 
    //         markers: true,
    //         snap: {
    //                 snapTo: 1 / (sections.length - 1),
    //                 duration: { min: 0, max: 0 }, 
    //                 delay: 0,   
    //                 ease: "power2.inOut"     
    //             }
    //     }
    // });

    // bg color
    sections.forEach((item) => {
        let color = item.getAttribute("data-bgcolor");
        ScrollTrigger.create({
            trigger: item,
            start: "cetner 70%",
            end: "center 30%",
            markers: true,
            onEnter: () => gsap.to("body", {
                backgroundColor: color,
                duration: 1.4,
            }),
            onEnterBack: () => gsap.to("body", {
                backgroundColor: color,
                duration: 1.4,
            }),
        });
    });

    // profile text
    const textElements = gsap.utils.toArray('.profile .txt');
        textElements.forEach(text => {
            gsap.to(text, {
                backgroundSize: '100%',
                ease: 'none',
                scrollTrigger: {
                    trigger: text,
                    start: 'center 50%',
                    end: 'center 40%',
                    scrub: true,
                },
            });
        });









});