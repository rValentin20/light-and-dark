let nubeIzquierda = document.getElementById('nubeIzquierda')



window.addEventListener('scroll', function(){

    let value = window.scrollY

    nubeIzquierda.style.left = value* 3 + 'px';
}) 


$('.slider').slick({
    centerMode: true,
    dots: true,
    autoplay: true,
    arrows: true,
    centerPadding: '0px',
    slidesToShow: 3,
    responsive: [{
        breakpoint: 768,
        settings: {
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '40px',
        Infinity: true,
        slidesToShow: 1,
        }
    },
    {
        breakpoint: 500,
        settings: {
        arrows: false,
        centerMode: true,
        dots: true,
        centerPadding: '40px',
        Infinity: true,
        slidesToShow: 1
        }
    }
    ]
});