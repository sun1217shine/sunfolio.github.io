const mm = gsap.matchMedia();

// profile /////////////////////////////////////////////////////////
// 원형 효과
const circleDraw = gsap.timeline({
    scrollTrigger: {
        trigger: ".profile",
        start: "24% 15%",
        end: "60% 15%",
        scrub: 1,
    }
});
circleDraw.to('.profile .circle-draw', { strokeDashoffset: 0, stagger: 0.02 });
gsap.set('.profile .circle-inner', { yPercent: 150, filter: "blur(10px)", autoAlpha: 0 });
gsap.to('.profile  .circle-inner', 1,
    {
        yPercent: -50,
        filter: "blur(0px)",
        autoAlpha: 1,
        scrollTrigger: {
            trigger: ".profile",
            start: "15% 15%",
            end: "22% 15%",
            scrub: 1,
        }
    });





// work /////////////////////////////////////////////////////////
// pin
const workItem = gsap.utils.toArray(".work-item");
workItem.forEach((item, i) => {
    gsap.set(item, { zIndex: i });
    ScrollTrigger.create({
        trigger: item,
        start: "top top",
        endTrigger: ".work-list",
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
        scrub: true,
        onEnter: () => item.classList.add("active"),
        onLeaveBack: () => item.classList.remove("active"),
    });
});




// PC /////////////////////////////////////////////////////////
mm.add("(min-width: 993px)", () => {

    // 전체 pin
    const pinItem = gsap.utils.toArray(".pin");
    pinItem.forEach((item, i) => {
        gsap.set(item, { zIndex: i });
        ScrollTrigger.create({
            trigger: item,
            start: "top top",
            endTrigger: ".induction",
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
            scrub: 1,
        });
    });

    // skill 
    const introTit = document.querySelectorAll('.induction-tit span');
    
    introTit.forEach((item) => {
        gsap.to(item, {
            paddingLeft: 100, 
            duration: 1.5,  
            scrollTrigger: {
                trigger: item,
                start: "top+=1 top",
                end: "top+=2 top+=1",
                scrub: 1, 
                markers:true
            }
        });
    });











    return () => { };






});

// mobile /////////////////////////////////////////////////////////
mm.add("(max-width: 992px)", () => {




});






