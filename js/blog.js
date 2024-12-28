document.addEventListener('DOMContentLoaded', () => {
    const blogPosts = [
        {
            title: 'Aprende a Programar en JavaScript',
            description: 'En este artículo te enseño desde cero cómo aprender a programar con JavaScript. ¡Comienza tu camino en el desarrollo web!',
            link: '#javascript', // Usamos un ancla en la misma página
            icon: 'fas fa-code'
        },
        {
            title: 'Navidad: Reflexión y Creatividad',
            description: 'La Navidad es un momento de reflexión, creatividad y unión. En este artículo, te comparto algunas ideas para aprovechar esta época.',
            link: '#navidad', // Usamos un ancla en la misma página
            icon: 'fas fa-gift'
        }
    ];

    const blogContainer = document.getElementById('blog-container');

    blogPosts.forEach(post => {
        const blogCard = document.createElement('div');
        blogCard.classList.add('blog-card');

        blogCard.innerHTML = `
            <i class="${post.icon}"></i>
            <h3>${post.title}</h3>
            <p>${post.description}</p>
            <a href="${post.link}" class="read-more">Leer más</a>
        `;

        blogContainer.appendChild(blogCard);
    });

    // Agregar secciones con el contenido de los artículos
    const contentContainer = document.getElementById('content-container');

    const javascriptContent = document.createElement('div');
    javascriptContent.id = 'javascript';
    javascriptContent.classList.add('article-content');
    javascriptContent.innerHTML = `
        <h2>Aprende a Programar en JavaScript</h2>
        <p>En este artículo, te guiaré paso a paso para que comiences tu aprendizaje en JavaScript. JavaScript es uno de los lenguajes más populares para el desarrollo web...</p>
        <p>¡Sigue leyendo y empieza tu camino hacia convertirte en un desarrollador web!</p>
    `;
    contentContainer.appendChild(javascriptContent);

    const navidadContent = document.createElement('div');
    navidadContent.id = 'navidad';
    navidadContent.classList.add('article-content');
    navidadContent.innerHTML = `
        <h2>Navidad: Reflexión y Creatividad</h2>
        <p>La Navidad es una época de reflexión, creatividad y unión familiar. En este artículo, te quiero compartir algunas ideas para aprovechar esta temporada y hacerla más significativa...</p>
        <p>Es momento de reflexionar sobre lo que hemos aprendido y pensar en cómo seguir creciendo en el próximo año.</p>
    `;
    contentContainer.appendChild(navidadContent);
});
