const mm = gsap.matchMedia();

// profile /////////////////////////////////////////////////////////
const profileSection = document.querySelector('.profile');
const profileItem = gsap.utils.toArray(".profile-item", profileSection);
const profileTl = gsap.timeline();

// why 텍스트 효과
profileTl.to(".profile-name span",{width:'auto', duration:1});

// 원형 효과
profileItem.forEach((item, j) => { profileTl.to(item, {opacity:1}, j * .5);},"+=1");


// work /////////////////////////////////////////////////////////
// pin
const workItem = gsap.utils.toArray(".work-item");
workItem.forEach((item, i) => {
    gsap.set(item, { zIndex: i });
    ScrollTrigger.create({
        trigger: item,
        start: "top-=1 top",
        endTrigger: ".work-list",
        end: "bottom bottom",
        pin: true,W
        pinSpacing: false,
        scrub: 1,
        onEnter: () => item.classList.add("active"),
        onLeaveBack: () => item.classList.remove("active"),
    });
});


// PC /////////////////////////////////////////////////////////
mm.add("(min-width: 993px)", () => {
    // introduction title 패딩 효과
    const introTit = document.querySelectorAll('.induction-tit span');
    introTit.forEach((item) => {
        gsap.to(item, {
            paddingLeft: 100, 
            duration: 1.5,  
            scrollTrigger: {
                trigger: item,
                start: "center bottom",
                end: "top top",
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






