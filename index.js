const carrusel = document.querySelector(".carrusel");
const backgruondImage = document.querySelector("");

const leftArrow = document.querySelector("left-arrow");
const rightArrow = document.querySelector("right-arrow");

let currentIndex = 0;
let prevIndex;
const images = document.querySelector(".corrusel_imágen");

const totalImages = Object.keys(images).length;

// const imageWidth = images [1].getBoundingClientRect().x;
const imageWidth = 520;

1. Cuando se hace clic en el botón de flecha derecha, establezca prevIndex = currentIndex.
2. Establecer currentIndex = (currentIndex + 1) % totalImages
3. Ahora, para tener la parte de animación, agregaremos la clase 'sliding-transition' a carrusel.
4. Mueva el carrusel hacia la izquierda por el ancho de una imagen usando 'translateX(-imageWidth pixels)'..
5. Una vez completada la transición::
   1.  Mueva la imagen prevIndex al final del 'carrusel'DOM.
   2. Elimine la clase 'sliding-transition' del carrusel.
   3. Elimine también la propiedad transform, ya que reordenamos el DOM.


var swiper = new swiper(". mySwiper", {

    slidesPerview: 1,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    breakpoints: {
        991: {
            slidePerview:4
        }
    }
})

<div class="header_contenido">
           
           </div>

<div class="seminario_contenedor">
            <img class="imágen_contenido" src="/Prueba/img/Seminario.jpeg" alt="Imágen del seminario">
            <div>
                <h1>Semniario</h1>
                <p>Párrafo Seminario</p>
            </div>
        </div>

        <div class="revista_contenedor">
            <img class="imágen_contenido" src="/Prueba/img/Revista economía.jpeg" alt="Imágen de revista">
            <div>
                <h1>Revista</h1>
                <p>Párrafo Revista</p>
            </div>
        </div>

        </section>

        <section class="presentación_segundo_contenido">
            <h1 class="presentación_contenido_título">
    
        <strong class="Título-destaque">NOTICIAS</strong>
        <p class="presentación_contenido_texto">Imagenes...</p>

<section class="título">
<title class="Título_contenido">OBERVATORIO de ECONOMÍA CIRCULAR de TARAPACÁ</title>
</section>

<section class="carrusel_noticias">
<section class="carrusel">
    <div class="carrusel_contenido">
        <div class="swiper_mySwiper_contenido"></div>
<div class="swiper_mySwiper_contenido">
    <div class="swiper-wrapper">
        <div class="carrusel">
            <input class="arrow-btn" id="btn-left" type="arrow-button">
            <button class="arrow-button left-arrow"><span>&#8249;</span></button><input>

            <div class="carrusel_imágen">
                <img src="img/page_1.webp" alt="Imagen" class="Imágenes_carrusel" width="260px" height="280px">
                <!--insert images here-->
            </div>
            <div class="carrusel_imágen">
                <img src="img/palacio-da-justica.jpeg" alt="Imagen" class="Imágenes_carrusel" width="260px" height="280px">
                <!--insert images here-->
            </div>
            <div class="carrusel_imágen">
                <img src="img/blogger-image-297832871.jpg" alt="Imagen" class="Imágenes_carrusel" width="260px" height="280px">
                <!--insert images here-->
            </div>
            <div class="carrusel_imágen">
                <img src="img/th (1).jpeg" alt="Imagen" class="Imágenes_carrusel" width="260px" height="280px">
                <!--insert images here-->
            </div>
            <div class="carrusel_imágen">
                <img src="img/palacio-da-justica.jpeg" alt="Imagen" class="Imágenes_carrusel" width="260px" height="280px">
                <!--insert images here-->
            </div>
            <div class="carrusel_imágen">
                <img src="" alt="Imagen" class="Imágenes_carrusel" width="260px" height="280px">
                <!--insert images here-->
            </div>
            <div class="carrusel_imágen">
                <img src="" alt="Imagen" class="Imágenes_carrusel" width="260px" height="280px">
                <!--insert images here-->
            </div>

            <input class="arrow-btn" id="btn-left" type="arrow-button">
            <button class="arrow-button right-arrow"><span>&#8250;</span></button><input>
        </div>
    </div>
</div>