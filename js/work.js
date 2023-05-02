$('.slider').slick({
    centerMode: true,
    dots: true,
    autoplay: true,
    arrows: false,
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

// Encuentra el modal 1 por su ID
var modal1 = document.getElementById("miModal1");


// Encuentra el botón "cerrar" en el modal 1
var closeBtn1 = modal1.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el botón "cerrar" del modal 1, cierra el modal 1
closeBtn1.onclick = function() {
  modal1.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal 1, cierra el modal 1
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

// Función para mostrar el modal 1
function showModal1() {
  modal1.style.display = "block";
}


// Encuentra el modal 2 por su ID
var modal2 = document.getElementById("miModal2");

// Encuentra el botón "cerrar" en el modal 2
var closeBtn2 = modal2.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el botón "cerrar" del modal 2, cierra el modal 2
closeBtn2.onclick = function() {
  modal2.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal 2, cierra el modal 2
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

// Función para mostrar el modal 2
function showModal2() {
  modal2.style.display = "block";
}

