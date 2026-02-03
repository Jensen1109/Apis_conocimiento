// • Solicitud 6: Realice una solicitud PUT para actualizar completamente la información de una
// publicación existente.

// const FuncionPutPost = async (idPost, user, titulo, contenido) => {
//     const actualizar = await fetch(`http://localhost:3000/posts/${idPost}`, {
//         method: `PUT`,
//         body: JSON.stringify({
//             id: idPost,
//             userId: user,
//             title: titulo,
//             body: contenido
//         }),
//         headers: {
//             'Content-type': 'application/json'
//         }
//     });

//     const data = await actualizar.json();
//     console.log(`Se actualizó la publicación`, data);
// }


// FuncionPutPost(2, 1, `Título actualizado`, `Contenido completamente nuevo`);


// • Solicitud 7: Realice una solicitud PATCH para modificar únicamente un campo específico
// de esa publicación.

const FuncionPatchPost = async (idPost, nuevoTitulo) => {
    const actualizar = await fetch(`http://localhost:3000/posts/${idPost}`, {
        method: `PATCH`,
        body: JSON.stringify({
            title: nuevoTitulo
        }),
        headers: {
            'Content-type': 'application/json'
        }
    });

    const data = await actualizar.json();
    console.log(`Se actualizó parcialmente la publicación`, data);
}

FuncionPatchPost(2, `Título modificado con PATCH`);
