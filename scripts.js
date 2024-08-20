document.getElementById('buscar').addEventListener('click', function() {
    // Obtiene los valores de los filtros seleccionados
    const peso = document.getElementById('peso').value;
    const sensacion = document.getElementById('sensacion').value;
    const tamaño = document.getElementById('tamaño').value;

    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = ''; // Limpia los resultados anteriores

// Lista de colchones con atributos hardcodeados
// Lista de colchones con atributos hardcodeados
const colchones = [
    {
        nombre: "Colchón Doral Pillow Top",
        pesoSoportado: "100",
        sensacion: "Firme",
        tamaño: "2",
        imagen: "imagenes/Fichas/Doral Pillow.jpg"
    },
    {
        nombre: "Colchón Doral Pillow Top",
        pesoSoportado: "100",
        sensacion: "Firme",
        tamaño: "Queen",
        imagen: "imagenes/Fichas/Doral Pillow.jpg"
    },
    {
        nombre: "Colchón Doral Pillow Top",
        pesoSoportado: "100",
        sensacion: "Firme",
        tamaño: "King",
        imagen: "imagenes/Fichas/Doral Pillow.jpg"
    },
    {
        nombre: "Colchón Doral",
        pesoSoportado: "90",
        sensacion: "Firme",
        tamaño: "1",
        imagen: "imagenes/Fichas/Doral.jpg"
    },
    {
        nombre: "Colchón Doral",
        pesoSoportado: "90",
        sensacion: "Firme",
        tamaño: "1 y media",
        imagen: "imagenes/Fichas/Doral.jpg"
    },
    {
        nombre: "Colchón Doral",
        pesoSoportado: "90",
        sensacion: "Firme",
        tamaño: "2",
        imagen: "imagenes/Fichas/Doral.jpg"
    },
    {
        nombre: "Colchón Doral",
        pesoSoportado: "90",
        sensacion: "Firme",
        tamaño: "Queen",
        imagen: "imagenes/Fichas/Doral.jpg"
    },
    {
        nombre: "Colchón Doral",
        pesoSoportado: "90",
        sensacion: "Firme",
        tamaño: "King",
        imagen: "imagenes/Fichas/Doral.jpg"
    },
    {
        nombre: "Colchón Especial de Lujo",
        pesoSoportado: "80",
        sensacion: "Firme",
        tamaño: "1",
        imagen: "imagenes/Fichas/Especial de Lujo.jpg"
    },
    {
        nombre: "Colchón Especial de Lujo",
        pesoSoportado: "80",
        sensacion: "Firme",
        tamaño: "1 y media",
        imagen: "imagenes/Fichas/Especial de Lujo.jpg"
    },
    {
        nombre: "Colchón Especial de Lujo",
        pesoSoportado: "80",
        sensacion: "Firme",
        tamaño: "2",
        imagen: "imagenes/Fichas/Especial de Lujo.jpg"
    },
    {
        nombre: "Exclusive Pillow",
        pesoSoportado: "100",
        sensacion: "Extra Firme",
        tamaño: "1",
        imagen: "imagenes/Fichas/Exclusive Pillow.jpg"
    },
    {
        nombre: "Exclusive Pillow",
        pesoSoportado: "100",
        sensacion: "Extra Firme",
        tamaño: "1 y media",
        imagen: "imagenes/Fichas/Exclusive Pillow.jpg"
    },
    {
        nombre: "Exclusive Pillow",
        pesoSoportado: "100",
        sensacion: "Extra Firme",
        tamaño: "2",
        imagen: "imagenes/Fichas/Exclusive Pillow.jpg"
    },
    {
        nombre: "Exclusive Pillow",
        pesoSoportado: "100",
        sensacion: "Extra Firme",
        tamaño: "Queen",
        imagen: "imagenes/Fichas/Exclusive Pillow.jpg"
    },
    {
        nombre: "Exclusive Pillow",
        pesoSoportado: "100",
        sensacion: "Extra Firme",
        tamaño: "King",
        imagen: "imagenes/Fichas/Exclusive Pillow.jpg"
    },
    {
        nombre: "Exclusive",
        pesoSoportado: "100",
        sensacion: "Extra Firme",
        tamaño: "1",
        imagen: "imagenes/Fichas/Exclusive.jpg"
    },
    {
        nombre: "Exclusive",
        pesoSoportado: "100",
        sensacion: "Extra Firme",
        tamaño: "1 y media",
        imagen: "imagenes/Fichas/Exclusive.jpg"
    },
    {
        nombre: "Exclusive",
        pesoSoportado: "100",
        sensacion: "Extra Firme",
        tamaño: "2",
        imagen: "imagenes/Fichas/Exclusive.jpg"
    },
    {
        nombre: "Exclusive",
        pesoSoportado: "100",
        sensacion: "Extra Firme",
        tamaño: "Queen",
        imagen: "imagenes/Fichas/Exclusive.jpg"
    },
    {
        nombre: "Exclusive",
        pesoSoportado: "100",
        sensacion: "Extra Firme",
        tamaño: "King",
        imagen: "imagenes/Fichas/Exclusive.jpg"
    },
    {
        nombre: "Platino",
        pesoSoportado: "90",
        sensacion: "Firme",
        tamaño: "1",
        imagen: "imagenes/Fichas/Platino.jpg"
    },
    {
        nombre: "Platino",
        pesoSoportado: "90",
        sensacion: "Firme",
        tamaño: "1 y medio",
        imagen: "imagenes/Fichas/Platino.jpg"
    },
    {
        nombre: "Platino",
        pesoSoportado: "90",
        sensacion: "Firme",
        tamaño: "2",
        imagen: "imagenes/Fichas/Platino.jpg"
    },
    {
        nombre: "Platino",
        pesoSoportado: "90",
        sensacion: "Firme",
        tamaño: "Queen",
        imagen: "imagenes/Fichas/Platino.jpg"
    },
    {
        nombre: "Platino",
        pesoSoportado: "90",
        sensacion: "Firme",
        tamaño: "King",
        imagen: "imagenes/Fichas/Platino.jpg"
    },
    {
        nombre: "Princess",
        pesoSoportado: "80",
        sensacion: "Firme",
        tamaño: "1",
        imagen: "imagenes/Fichas/Princess 23.jpg"
    },
    {
        nombre: "Princess",
        pesoSoportado: "80",
        sensacion: "Firme",
        tamaño: "2",
        imagen: "imagenes/Fichas/Princess 23.jpg"
    },
    {
        nombre: "Princess",
        pesoSoportado: "80",
        sensacion: "Firme",
        tamaño: "1 y medio",
        imagen: "imagenes/Fichas/Princess 23.jpg"
    },
    {
        nombre: "Renovation pillow",
        pesoSoportado: "120",
        sensacion: "Extra Firme",
        tamaño: "2",
        imagen: "imagenes/Fichas/Renovation Pillow.jpg"
    },
    {
        nombre: "Renovation pillow",
        pesoSoportado: "120",
        sensacion: "Extra Firme",
        tamaño: "Queen",
        imagen: "imagenes/Fichas/Renovation Pillow.jpg"
    },
    {
        nombre: "Renovation pillow",
        pesoSoportado: "120",
        sensacion: "Extra Firme",
        tamaño: "King",
        imagen: "imagenes/Fichas/Renovation Pillow.jpg"
    },
    {
        nombre: "Renovation",
        pesoSoportado: "120",
        sensacion: "Extra Firme",
        tamaño: "1",
        imagen: "imagenes/Fichas/Renovation.jpg"
    },
    {
        nombre: "Renovation",
        pesoSoportado: "120",
        sensacion: "Extra Firme",
        tamaño: "1 y medio",
        imagen: "imagenes/Fichas/Renovation.jpg"
    },
    {
        nombre: "Renovation",
        pesoSoportado: "120",
        sensacion: "Extra Firme",
        tamaño: "2",
        imagen: "imagenes/Fichas/Renovation.jpg"
    },
    {
        nombre: "Renovation",
        pesoSoportado: "120",
        sensacion: "Extra Firme",
        tamaño: "Queen",
        imagen: "imagenes/Fichas/Renovation.jpg"
    },
    {
        nombre: "Renovation",
        pesoSoportado: "120",
        sensacion: "Extra Firme",
        tamaño: "King",
        imagen: "imagenes/Fichas/Renovation.jpg"
    },
    {
        nombre: "soñar",
        pesoSoportado: "80",
        sensacion: "Firme",
        tamaño: "1",
        imagen: "imagenes/Fichas/Soñar.jpg"
    },
    {
        nombre: "soñar",
        pesoSoportado: "80",
        sensacion: "Firme",
        tamaño: "1 y medio",
        imagen: "imagenes/Fichas/Soñar.jpg"
    },
    {
        nombre: "soñar",
        pesoSoportado: "80",
        sensacion: "Firme",
        tamaño: "2",
        imagen: "imagenes/Fichas/Soñar.jpg"
    },
    {
        nombre: "sublime Pillow",
        pesoSoportado: "120",
        sensacion: "Firme",
        tamaño: "2",
        imagen: "imagenes/Fichas/Sublime Pillow.jpg"
    },
    {
        nombre: "sublime Pillow",
        pesoSoportado: "120",
        sensacion: "Firme",
        tamaño: "Queen",
        imagen: "imagenes/Fichas/Sublime Pillow.jpg"
    },
    {
        nombre: "sublime Pillow",
        pesoSoportado: "120",
        sensacion: "Firme",
        tamaño: "King",
        imagen: "imagenes/Fichas/Sublime Pillow.jpg"
    },
    {
        nombre: "sublime",
        pesoSoportado: "120",
        sensacion: "Firme",
        tamaño: "2",
        imagen: "imagenes/Fichas/sublime"
    },
    {
        nombre: "sublime",
        pesoSoportado: "120",
        sensacion: "Firme",
        tamaño: "Queen",
        imagen: "imagenes/Fichas/sublime"
    },
    {
        nombre: "sublime",
        pesoSoportado: "120",
        sensacion: "Firme",
        tamaño: "2",
        imagen: "imagenes/Fichas/sublime"
    },
    {
        nombre: "Tropical",
        pesoSoportado: "70",
        sensacion: "Firme",
        tamaño: "1",
        imagen: "imagenes/Fichas/Tropical.jpg"
    },
    {
        nombre: "Tropical",
        pesoSoportado: "70",
        sensacion: "Firme",
        tamaño: "1 y medio",
        imagen: "imagenes/Fichas/Tropical.jpg"
    },
    {
        nombre: "Tropical",
        pesoSoportado: "70",
        sensacion: "Firme",
        tamaño: "2",
        imagen: "imagenes/Fichas/Tropical.jpg"
    }
    // Puedes añadir más colchones aquí si lo deseas
];

// Inicializa una variable para verificar si se encontraron coincidencias
let encontrados = [];

// Recorre cada colchón y verifica si coincide con los filtros seleccionados
for (const colchon of colchones) {
    if (peso && sensacion && tamaño && 
        peso <= colchon.pesoSoportado && 
        sensacion === colchon.sensacion && 
        tamaño === colchon.tamaño) {
        encontrados.push(colchon.imagen);
    }
}

// Si se encontraron colchones, muestra las imágenes en el carrusel
if (encontrados.length > 0) {

    const otroContenedor = document.getElementById('carrusel-container');
        if (otroContenedor) {
            otroContenedor.innerHTML = ''; // Limpia el contenido
        }
    resultadosDiv.innerHTML = `
        
        <div class="resultado-item">
            ${encontrados.map((img, index) => `
                <img src="${img}" alt="Imagen de colchón" style="display: ${index === 0 ? 'block' : 'none'};">
            `).join('')}
        </div>
        <div class="carrusel-buttons">
            <button onclick="moverCarrusel1(-1)">Anterior</button>
            <button onclick="moverCarrusel1(1)">Siguiente</button>
        </div>
    `;
    let currentIndex = 0;

    window.moverCarrusel1 = function(direction) {
        const imgs = document.querySelectorAll('.resultado-item img');
        imgs[currentIndex].style.display = 'none'; // Oculta la imagen actual
        currentIndex = (currentIndex + direction + imgs.length) % imgs.length; // Calcula el índice de la nueva imagen
        imgs[currentIndex].style.display = 'block'; // Muestra la nueva imagen
    };
} else {
    // Si no se encontró ningún colchón que coincida con los filtros, muestra un mensaje
    resultadosDiv.innerHTML = '<p>No se encontraron colchones que coincidan con los filtros seleccionados.</p>';
}
});

    



// Función para manejar las tabs de las sucursales
function openSucursal(evt, sucursalName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(sucursalName).style.display = "block";
    if (evt) {
        evt.currentTarget.className += " active";
    }
}

// Llama a la función para mostrar la Sucursal1 al cargar la página
window.onload = function() {
    openSucursal(null, 'Sucursal1');
    document.querySelector('.tablink').classList.add('active');
}

function mostrarCarrusel(producto) {
    let carruselContainer = document.getElementById('carrusel-container');
    
    const imagenes = {
        producto1: [
            'imagenes/colchones/2.jpg',
            'imagenes/colchones/3.webp',
            'imagenes/colchones/4.jpg',
            'imagenes/colchones/5.png',
            'imagenes/colchones/6.jpg',
            'imagenes/colchones/7.jpg',
            'imagenes/colchones/8.webp',
            'imagenes/colchones/9.webp',
            'imagenes/colchones/10.jpg',
            'imagenes/colchones/11.webp',
            'imagenes/colchones/12.jpg',
            'imagenes/colchones/13.jpg',
            'imagenes/colchones/14.jpg',
            'imagenes/colchones/15.jpg',
            'imagenes/colchones/16.jpg',
            'imagenes/colchones/17.jpg',
            'imagenes/colchones/18.jpg',
            'imagenes/colchones/19.jpg',
            'imagenes/colchones/20.webp',
            'imagenes/colchones/21.webp',
            'imagenes/colchones/22.jpg',
            'imagenes/colchones/23.jpg',
            'imagenes/colchones/1.webp'
        ],
        producto2: [
            'imagenes/bases/1.webp'
        ],
        producto3: [
            'imagenes/sommiers/1.jpg',
            'imagenes/sommiers/2.webp',
            'imagenes/sommiers/3.webp',
            'imagenes/sommiers/4.webp',
            'imagenes/sommiers/5.jpg',
            'imagenes/sommiers/6.jpg',
            'imagenes/sommiers/7.jpg',
            'imagenes/sommiers/8.jpg',
            'imagenes/sommiers/9.jpg',
            'imagenes/sommiers/10.jpg',
            'imagenes/sommiers/11.webp',
            'imagenes/sommiers/12.jpg',
            'imagenes/sommiers/13.webp',
            'imagenes/sommiers/14.webp',
            'imagenes/sommiers/15.jpg',
            'imagenes/sommiers/16.jpg',
            'imagenes/sommiers/17.webp',
            'imagenes/sommiers/18.jpg',
            'imagenes/sommiers/19.jpg',
            'imagenes/sommiers/20.webp',
            'imagenes/sommiers/21.jpg',
            'imagenes/sommiers/22.jpg',
            'imagenes/sommiers/23.jpg',
            'imagenes/sommiers/24.webp',
            'imagenes/sommiers/25.jpg',
            'imagenes/sommiers/26.jpg',
        ],
        producto4: [
            'imagenes/Almohadas/Cervical 2.webp',
            'imagenes/Almohadas/Cervical.webp',
            'imagenes/Almohadas/exclusive 2.jpg',
            'imagenes/Almohadas/exclusive.jpg'
        ],
        producto5: [
            'imagenes/Baulera Espaldar/1.jpg',
            'imagenes/Baulera Espaldar/2.webp',
            'imagenes/Baulera Espaldar/3.jpg',
            'imagenes/Baulera Espaldar/4.webp',
            'imagenes/Baulera Espaldar/5.jpg',
            'imagenes/Baulera Espaldar/6.webp',
            'imagenes/Baulera Espaldar/7.jpg',
            'imagenes/Baulera Espaldar/8.webp',
            'imagenes/Baulera Espaldar/9.jpg',
            'imagenes/Baulera Espaldar/10.webp',
            'imagenes/Baulera Espaldar/11.jpg',
            'imagenes/Baulera Espaldar/12.webp',
            'imagenes/Baulera Espaldar/13.jpg',
            'imagenes/Baulera Espaldar/14.webp',
            'imagenes/Baulera Espaldar/15.webp',
            'imagenes/Baulera Espaldar/16.webp',
            'imagenes/Baulera Espaldar/17.webp',
            'imagenes/Baulera Espaldar/18.webp',
            'imagenes/Baulera Espaldar/19.webp',
            'imagenes/Baulera Espaldar/20.webp',
            'imagenes/Baulera Espaldar/21.webp',
        ],
        producto6: [
            'imagen1_producto3.jpg',
            'imagen2_producto3.jpg',
            'imagen3_producto3.jpg'
        ]
    };

    const botoness = document.getElementById('carrusel-buttons');

        
    if (botoness) {
        botoness.innerHTML = ''; // Limpia el contenido
    }

    const otroContenedor2 = document.getElementById('resultados');

        
    if (otroContenedor2) {
        otroContenedor2.innerHTML = ''; // Limpia el contenido
    }

    let carruselHTML = `
        <div class="carrusel">
            ${imagenes[producto].map(img => `<img src="${img}" alt="Imagen de ${producto}">`).join('')}
        </div>
        <div class="carrusel-buttons">
            <button onclick="moverCarrusel(-1)">Anterior</button>
            <button onclick="moverCarrusel(1)">Siguiente</button>
        </div>

    `;

    

    carruselContainer.innerHTML = carruselHTML;
    carruselContainer.setAttribute('data-current-slide', 0);
}





function moverCarrusel(direccion) {
    let carrusel = document.querySelector('.carrusel');
    let currentSlide = parseInt(carrusel.parentElement.getAttribute('data-current-slide'));
    const totalSlides = carrusel.children.length;

    currentSlide += direccion;
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    if (currentSlide >= totalSlides) currentSlide = 0;

    carrusel.style.transform = `translateX(-${currentSlide * 100}% )`;
    carrusel.parentElement.setAttribute('data-current-slide', currentSlide);
}
