gsap.registerPlugin(ScrollTrigger);

// scrollTrigger.defaults({
//     toggleActions:"restart pause resume pause",
// })
const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".heading3",
      start: "top top",
      triggerActions:"restart pause reverse pause",
    }
  });

  tl.to(".heading1", {rotate:360, duration: 1})
  
  gsap.to(".player2",{
    scrollTrigger:{
        trigger:".container3",
        start:"top 90%",
        triggerActions:"restart pause reverse pause",
    },
    rotate:360,
    duration:5,
    repeat:5,
    delay:8,
  })