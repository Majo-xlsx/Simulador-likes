document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const feed = document.getElementById('Feed');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const titulo = document.getElementById('Titulo').value;
        const mensaje = document.getElementById('Mensaje').value;
        const archivoImagen = document.getElementById('Imagen').files[0];

        if (!archivoImagen) {
            alert('Debes seleccionar una imagen para crear una publicación.');
            return;
        }

        const imagenURL = URL.createObjectURL(archivoImagen);

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${imagenURL}" alt="Imagen" class="card-img">
            <h3>${titulo}</h3>
            <p>${mensaje}</p>
            <button class="like-btn">❤️ <span class="like-count">0</span></button>
        `;

        const botonLike = card.querySelector('.like-btn');
        const contador = card.querySelector('.like-count');

        botonLike.addEventListener('click', () => {
            botonLike.style.color = 'red';
            let likes = parseInt(contador.textContent);
            contador.textContent = likes + 1;
        });

        feed.prepend(card);

        form.reset();
    });
});
