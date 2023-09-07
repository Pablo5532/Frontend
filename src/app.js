
const paintProd = () => {
    const contenedor = document.getElementById('prod-contenedor');
    productos.forEach(productos => {
        const div = document.createElement('div');
        div.classList.add('prod-contenedor');
        div.innerHTML += ` 
            <div class="producto">
                <a href="${productos.link}">
                <img class="producto__imagen" src=${productos.img} alt="imagen camisa">
            <div class="producto__informacion">
                <p class="producto__nombre" >${productos.name}</p>
                <p class="producto__precio" >${productos.precio}</p>
            </div>
                </a>
            </div>
        `;
        contenedor.appendChild(div);
    });
}
paintProd()


