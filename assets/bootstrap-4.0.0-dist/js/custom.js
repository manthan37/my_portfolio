const flowpath = {
    curviness: 0,
    autoRotate: false,
    values: [{ x: -400, y: -80 }],

}
const tween = new TimelineLite();

tween.add(
    TweenLite.to('.movement', 1, {
        bezier: flowpath,
        ease: Power1.easeInOut,
        scaleX: 0.3, scaleY: 0.3
    })
)

const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.trigger',
    duration: 250,
    triggerHook: 0.9
})
    .setTween(tween)
    // .addIndicators()
    .addTo(controller);