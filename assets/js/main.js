ScrollReveal().reveal('.animate-h-one', {delay: 500});
ScrollReveal().reveal('.animate-h-two', {delay: 800});
ScrollReveal().reveal('.animate-h-three', {delay: 1000});

ScrollReveal().reveal('.about-section', {delay: 500});
ScrollReveal().reveal('.projects', {delay: 500});
ScrollReveal().reveal('.contact', {delay: 500});

$('.skill-per').each(function(){
    let $this = $(this);
    let per = $this.attr('per');
    $this.css('width', per+'%');
    $({animatedValue: 0}).animate({animatedValue: per},{
      duration: 1000,
      step: function(){
          $this.attr('per', Math.floor(this.animatedValue));
      },
      complete: function(){
        $this.attr('per', Math.floor(this.animatedValue));
    },
    });
});