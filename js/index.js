let tl = gsap.timeline({repeat: -1, repeatDelay: 2});

tl.to(".rectangle", {x: 220, duration: 1, ease: "power4.inOut"});
tl.to(".rectangle", {x: 0, duration: 1, ease: "power4.inOut"});

gsap.to(".block", {rotate: 360, duration: 1, delay: 1, repeat: -1, repeatDelay: 3, ease: "power4.inOut"});