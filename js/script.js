'use strict';
document.addEventListener('DOMContentLoaded', () => {
    // common /////////////////////////////////////////////////////////
    // plugin
    const lenis = new Lenis();
    gsap.registerPlugin(ScrollTrigger);
    const windowWidth = gsap.matchMedia();

    // scroll 부드럽게
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
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
            end: "10% 30%",
            scrub: 1.5,
        }
    });

    // profile 
    const profileSection = document.querySelector(".profile");
    const profileTag = document.querySelectorAll(".profile .tag p")
    ScrollTrigger.create({
        trigger: profileSection,
        start: "top+=2 top",
        end: "center 10%",
        onEnter: () => profileSection.classList.add("active"),
        onLeaveBack: () => profileSection.classList.remove("active"),
    });

    profileTag.forEach((item, i) => {
        gsap.to(item,{
            opacity:1,
        },
        i * 0.5
        )
    });





    // PC /////////////////////////////////////////////////////////
    windowWidth.add("(min-width: 993px)", () => {

        // visual pin 효과
        const visualSection = gsap.utils.toArray(".visual");
        visualSection.forEach((panel) => {
            ScrollTrigger.create({
                trigger: panel,
                start: "top top",
                pin: true,
                scrub: .5,
                pinSpacing: false,
            });
        })

        // visual txt 효과
        const visuaItems = gsap.utils.toArray(".visual .txt-area .txt-item");
        const visualScroll = gsap.timeline({
            scrollTrigger: {
                trigger: ".visual .container",
                start: "top=+1 top",
                end: "center 10%",
                scrub: 1.5,
            }
        });

        visuaItems.forEach((item, i) => {
            visualScroll.fromTo(item,
                {
                    opacity: 0
                },
                {
                    opacity: 1,
                    duration: 1,
                    onStart: () => item.classList.add("height-up"),
                    onReverseStart: () => item.classList.remove("height-up")
                },
                i * 0.5
            );
        });
        // link pin 효과
        const linkSection = gsap.utils.toArray(".link");
        linkSection.forEach((panel) => {
            ScrollTrigger.create({
                trigger: panel,
                start: "top top",
                pin: true,
                scrub: .5,
                pinSpacing: false,
            });
        })






        // work addclass



    });

    // mobile /////////////////////////////////////////////////////////
    windowWidth.add("(max-width: 992px)", () => {

        // visual txt 효과
        const visuaItems = gsap.utils.toArray(".visual .txt-area .txt-item");
        const visualScroll = gsap.timeline({
            scrollTrigger: {
                trigger: ".visual .container",
                start: "top top",
                end: "10% top",
                scrub: 1.5,
            }
        });
        visuaItems.forEach((item, i) => {
            visualScroll.fromTo(item,
                { opacity: 0 },
                {
                    duration: 1, opacity: 1,
                    onStart: () => item.classList.add("height-up"),
                },
                i * 0.5
            );
        });




    });



    // profile /////////////////////////////////////////////////////////
    // skill progressbar 효과
    const progressBars = gsap.utils.toArray(".progress .line");
    progressBars.forEach((item) => {
        gsap.from(item, {
            width: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".profile",
                start: "top top",
                end: "10% 10%",
                scrub: 1.5
            }
        });
    });






    const workItems = document.querySelectorAll('.work-item');
    workItems.forEach((item) => {
        item.addEventListener('mouseover', function () {
            workItems.forEach((el) => el.classList.remove('active'));
            item.classList.add('active');
        });

        item.addEventListener('mouseleave', function () {
            item.classList.remove('active');
        });
    });


});