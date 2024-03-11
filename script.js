gsap.to('#nav',{
    backgroundColor:'rgba(0,0,0,0.4)',
    height:'90px',
    duration:0.5,
    scrollTrigger:{
        trigger:'#nav',
        scroller:'body',
        start:'top -10%',
        end:'end -10%',
        scrub:0.7
        }
})

gsap.to('#main',{
    backgroundColor:'black',
    scrollTrigger:{
        trigger:'#main',
        scroller:'body',
        start:'top -50%',
        end:'top -100%',
        scrub:0.7
    }

})
gsap.to('#about-us img,#about-us-in',{
    y:100,
    opacity:1,
    duration:1,
    scrollTrigger:{
        trigger:'#about-us img',
        scroller:'body',
        start:'top 60%',
        end:'top 58%',
        scrub:3,

    }
    

})


gsap.to('#green-div',{
    scale:0.8,
    y:100,
    opacity:1,
    duration:1,
    scrollTrigger:{
        trigger:'#green-div',
        scroller:'body',
        start:'top 60%',
        end:'top 58%',
        scrub:3,

    }
    

})
gsab.to('#colon2,#colon1',{
    opacity:1,
    duration:1,
    x:-70,
    y:-70,
    scrollTrigger:{
        trigger:'#colon1',
        scroller:'body',
        start:'top 55%',
        end:'top 45%',
        scrub:1
    }


})


gsab.to('#page4 h1',{
    y:50,
    duration:1,
    scrollTrigger:{
        trigger:'#page4 h1',
        scroller:'body',
        start:'top 75%',
        end:'top 70%',
        scrub:3,

    }
})