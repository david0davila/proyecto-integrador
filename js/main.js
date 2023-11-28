document.addEventListener('DOMContentLoaded', function () {

    const buttonsAdd = document.querySelectorAll('.button--add');
    const buttonsRemove = document.querySelectorAll('.button--remove');
    const counters = document.querySelectorAll('.card__counter');

    const countersArray = Array.from(counters).map(() => 0);

    function actualizarContador(index) {
        counters[index].innerText = countersArray[index];
    }

    function sumar(index) {
        if (countersArray[index] < 10) {
            countersArray[index]++;
            actualizarContador(index);
        }
    }

    function restar(index) {
        if (countersArray[index] > 0) {
            countersArray[index]--;
            actualizarContador(index);
        }
    }

    buttonsAdd.forEach((button, index) => {
        button.addEventListener('click', () => sumar(index));
    });

    buttonsRemove.forEach((button, index) => {
        button.addEventListener('click', () => restar(index));
    });
});



// function guardarProducto() {
//     const nombreInput = document.getElementById('nombre');
//     const precioInput = document.getElementById('precio');
//     const stockInput = document.getElementById('stock');
//     const marcaInput = document.getElementById('marca');
//     const categoriaInput = document.getElementById('categoria');
//     const descripcionCortaInput = document.getElementById('descripcionCorta');
//     const descripcionLargaInput = document.getElementById('descripcionLarga');
//     const fotografiaInput = document.getElementById('fotografia');

//     const nombreRegex = /^[a-zA-Z\s]+$/;
//     const marcaCategoriaRegex = /^[a-zA-Z0-9\s]+$/;
//     const descripcionRegex = /^.{10,}$/;  // Al menos 10 caracteres para la descripción larga

//     if (!nombreRegex.test(nombreInput.value)) {
//         alert('El nombre solo puede contener letras y espacios.');
//         return;
//     }

//     if (isNaN(parseFloat(precioInput.value)) || parseFloat(precioInput.value) <= 0) {
//         alert('Ingrese un precio válido.');
//         return;
//     }

//     if (isNaN(parseInt(stockInput.value)) || parseInt(stockInput.value) < 0) {
//         alert('Ingrese un valor de stock válido.');
//         return;
//     }

//     if (!marcaCategoriaRegex.test(marcaInput.value)) {
//         alert('La marca solo puede contener letras, números y espacios.');
//         return;
//     }

//     if (!marcaCategoriaRegex.test(categoriaInput.value)) {
//         alert('La categoría solo puede contener letras, números y espacios.');
//         return;
//     }

//     if (!descripcionRegex.test(descripcionCortaInput.value)) {
//         alert('La descripción corta debe tener al menos 10 caracteres.');
//         return;
//     }

//     if (!descripcionRegex.test(descripcionLargaInput.value)) {
//         alert('La descripción larga debe tener al menos 10 caracteres.');
//         return;
//     }

//     if (!fotografiaInput.files[0]) {
//         alert('Seleccione una fotografía.');
//         return;
//     }

//     // Si todas las validaciones pasan, muestra la alerta de éxito
//     alert('Producto guardado exitosamente.');

//     // Puedes deshabilitar el botón después de guardar el producto
//     document.getElementById('productForm').reset(); // Esto reinicia el formulario
// }


function guardarProducto() {
    const nombreInput = document.getElementById('nombre');
    const precioInput = document.getElementById('precio');
    const stockInput = document.getElementById('stock');
    const marcaInput = document.getElementById('marca');
    const categoriaInput = document.getElementById('categoria');
    const descripcionCortaInput = document.getElementById('descripcionCorta');
    const descripcionLargaInput = document.getElementById('descripcionLarga');
    const fotografiaInput = document.getElementById('fotografia');

    const nombreRegex = /^[a-zA-Z\s]+$/;
    const marcaCategoriaRegex = /^[a-zA-Z0-9\s]+$/;
    const descripcionRegex = /^.{10,}$/;  // Al menos 10 caracteres para la descripción larga

    if (!nombreRegex.test(nombreInput.value)) {
        showToast('error', 'El nombre solo puede contener letras y espacios.');
        return;
    }

    if (isNaN(parseFloat(precioInput.value)) || parseFloat(precioInput.value) <= 0) {
        showToast('error', 'Ingrese un precio válido.');
        return;
    }

    if (isNaN(parseInt(stockInput.value)) || parseInt(stockInput.value) < 0) {
        showToast('error', 'Ingrese un valor de stock válido.');
        return;
    }

    if (!marcaCategoriaRegex.test(marcaInput.value)) {
        showToast('error', 'La marca solo puede contener letras, números y espacios.');
        return;
    }

    if (!marcaCategoriaRegex.test(categoriaInput.value)) {
        showToast('error', 'La categoría solo puede contener letras, números y espacios.');
        return;
    }

    if (!descripcionRegex.test(descripcionCortaInput.value)) {
        showToast('error', 'La descripción corta debe tener al menos 10 caracteres.');
        return;
    }

    if (!fotografiaInput.files[0]) {
        showToast('error', 'Seleccione una fotografía.');
        return;
    }


    showToast('success', 'Producto guardado exitosamente.');

    document.getElementById('productForm').reset(); // Esto reinicia el formulario
}

function showToast(type, message) {
    const toastContainer = document.getElementById('contenedor-toast');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
                <div class="contenido">
                    <div class="icono">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path
                                d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                            />
                        </svg>
                    </div>
                    <div class="texto">
                        <p class="titulo">${type.charAt(0).toUpperCase() + type.slice(1)}</p>
                        <p class="descripcion">${message}</p>
                    </div>
                </div>
                <button class="btn-cerrar">
                    <div class="icono">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                            />
                        </svg>
                    </div>
                </button>
            `;

    toastContainer.style.display = 'block';
    toastContainer.appendChild(toast);

    const btnCerrar = toast.querySelector('.btn-cerrar');
    btnCerrar.addEventListener('click', () => {
        toast.style.display = 'none';
    });

    setTimeout(() => {
        toast.style.display = 'none';
    }, 3500);
}