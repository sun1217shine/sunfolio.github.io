'use strict';
document.addEventListener('DOMContentLoaded', () => {
    // plugin
    const lenis = new Lenis();
    gsap.registerPlugin(ScrollTrigger);

    // 스크롤 부드럽게
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

});