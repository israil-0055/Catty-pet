$(function(){

    const owl = $('.owl-carousel');
    owl.owlCarousel({
        center:true,
        loop:true,
        margin:30,
        startPosition:1, 
        items:3,
        responsive :{
            0 :{
               items:1,
            },
            600 :{
               items:3,
            }, 
            850 :{
                margin:20,
                items:3,
            },
            1200 :{
                margin:30,
            },

        }
    }); 
    $('.slider__btn--next').click(function() {
        owl.trigger('next.owl.carousel');
    })
    $('.slider__btn--prev').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
});

   const navBtn = document.querySelector('.burger');
   const nav = document.querySelector('.nav');
  
   navBtn.onclick = function(){
    nav.classList.toggle('nav--mobile')
   }
})
  
