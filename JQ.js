$(document).ready(function(){
    $(`.slider`).slick({
        arrows: false,
        dots:true,
        infinite:true,
        appendDots: `.slider-dots`,
        dotsClass:`dots`
    })
})