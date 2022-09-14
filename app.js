fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        let menu = document.getElementById('menu');
        let opciones = "";
        for (let i = 0; i < json.length; i++) {
            opciones += `<option value="${json[i].id}">${json[i].username}</option>`;
        }
        menu.innerHTML = opciones;
    })
    //Lo que aquí es que con el boton creado en el html darle una funcionde cargar el usuario en la lista/menu creado
    // instalar extensiòn Live Server

/*const commentary = document.getElementById("commentary");
commentary.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + menu.value + '/comments')
        .then((response) => response.json())
        .then((json) => {
            let datos = '';
            json.forEach(json => {
                datos += `
                <p>ID: ${json.postId}</p>
                <div><h2>Titulo: ${json.name}</h2>
                <p>Contenido: ${json.body}</p>
                </div>
            `;
            });
            dcomm.innerHTML = datos;
        })
});*/

const user = document.getElementById("user");
user.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + menu.value)
        .then((response) => response.json())
        .then((json) => {
            let post = document.getElementById("posts")
            let datos = '';
            json.forEach(json => {
                datos += `
                <div id="pub${json.id}">
                <h2>${json.title}</h2>
                <p>${json.body}</p>
                <button type="button" onclick="Mostrar(${json.id})" class="button">Mostar comentarios</button>
                <div class="w3-row-padding">
                <br><div id="pcom${json.id}"></div>
                </div> 
            `;

            });
            post.innerHTML = datos;
        })
});

function Mostrar(id) {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
        .then(response => response.json())
        .then(json => {
            let comm = document.getElementById('pcom' + id);
            let comments = '';
            json.forEach(comment => {
                comments += `<div  class="borderimg"><h3>${comment.name}</h3><p>${comment.body}</p></div><br>`;
            });
            comm.innerHTML = `${comments} <button type="button" onclick="Ocultar(${id})" class="button2">Ocultar comentarios</button>`;
        });
};

function Ocultar(id) {
    let comm = document.getElementById('pcom' + id);
    comm.innerHTML = "";
}

const clear = document.getElementById("clear");
clear.addEventListener('click', () => {
    res.innerHTML = "";
    posts.innerHTML = "";
});

const info = document.getElementById("info");
info.addEventListener('click', () => {
    console.log(menu.value);
    fetch('https://jsonplaceholder.typicode.com/users/' + menu.value)
        .then(response => response.json())
        .then(json => {
            let datos = "";
            datos += `
                <p><h2>ID: ${json.id}</h2></p>
                <div><div class="border"><h3>Datos:</h3>
                            <div>Nombre: ${json.name}
                            <p>Nombre de Usuario: ${json.username}</p>
                            <p>Correo: ${json.email}</p>
                            <p>Telefono: ${json.phone}</p>
                            <p>Pagina Web: ${json.website}</p>
                            </div>
                            </div>
                            <div class="border"><h3>Domicilio:</h3>
                            <p>Calle: ${json.address.street}</p> 
                            <p>Suite: ${json.address.suite}</p>                             
                            <p>Ciudad: ${json.address.city}</p> 
                            <p>Zipcode: ${json.address.zipcode}</p> 
                             </div>
                            <div class="border"><h3>Geografia:</h3>         
                            <p>Latitud: ${json.address.geo.lat}</p> 
                            <p>Longitud: ${json.address.geo.lng}</p> 
                            </div>
                            <div class="border"><h3>Compañia:</h3>
                            <p>Nombre: ${json.company.name}</p>
                            <p>catchPhrase: ${json.company.catchPhrase}</p>
                            <p>bs: ${json.company.bs}</p>
                            </div>
                            </div>
                        `;
            res.innerHTML = datos;
        })

});