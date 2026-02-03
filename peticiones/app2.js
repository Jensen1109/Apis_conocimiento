// Parte 2: Creación de información (POST)
// • Solicitud 4: Realice una solicitud POST para crear una nueva publicación asociada a un
// usuario existente.
// Incluya información como título y contenido.
// const Funcionpost = async (user, titulo, contenido) => {
//     const publicaciones = await fetch(`http://localhost:3000/posts`, {
//         method: `POST`,
//         body: JSON.stringify({
//             title: titulo,
//             body: contenido,
//             userId: user
//         }),
//         headers: {
//             'Content-type': 'application/json'
//         }
//     });

//     const data = await publicaciones.json();
//     console.log(`se realizo la publicacion`, data);
// }

// Funcionpost(2, `titulo nuevo`, `este contenido es bueno`);


// • Solicitud 5: Realice una solicitud POST para registrar un nuevo comentario relacionado con
// una publicación

const FuncionPostComentario = async (postId, contenido) => {
    const comentario = await fetch(`http://localhost:3000/comments`, {
        method: `POST`,
        body: JSON.stringify({
            postId: postId,
            body: contenido
        }),
        headers: {
            'Content-type': 'application/json'
        }
    });

    const data = await comentario.json();
    console.log(`Se realizó el comentario`, data);
}

// Ejecución
FuncionPostComentario(3, `Este comentario está relacionado con el post 3`);
