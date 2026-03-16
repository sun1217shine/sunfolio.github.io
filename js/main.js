// visual /////////////////////////////////////////////////////////
const visualSection = document.querySelector(".visual");
const txtAreas = gsap.utils.toArray(".txt-area", visualSection);
// visual scroll
const visualTl = gsap.timeline({
    scrollTrigger: {
        trigger: visualSection,
        start: "top+=1 top",
        end: "+=" + (txtAreas.length * 100) + "%",
        pin: true,
        pinSpacing: true,
        scrub: .5,
    }
});

// visual txt 효과
txtAreas.forEach((area, j) => {
    const items = area.querySelectorAll('.txt-item');
    visualTl.to(area, {
        duration: .3,
        onStart: () => {
            items.forEach(el => el.classList.remove("height-down"));
            items.forEach(el => el.classList.add("height-up"));
        },
        onReverseComplete: () => {
            items.forEach(el => el.classList.remove("height-up"));
            items.forEach(el => el.classList.add("height-down"));
        }
    }, j * .3);
});


// link /////////////////////////////////////////////////////////
const linkSection = document.querySelector(".link");
const linkList = document.querySelector('.link .link-list');

// link 너비 조절
gsap.to(linkList, {
    width: "100%",
    scrollTrigger: {
        trigger: linkSection,
        start: "top bottom",
        end: "top top",
        scrub: 1.5,
    }
});
