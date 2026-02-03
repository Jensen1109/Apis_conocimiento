// Parte 4: Eliminación de información (DELETE)
// • Solicitud 8: Realice una solicitud DELETE para eliminar una publicación existente.

const FuncionDeletePost = async (idPost) => {
    const eliminar = await fetch(`http://localhost:3000/posts/${idPost}`, {
        method: `DELETE`
    });

    if (eliminar.ok) {
        console.log(`La publicación con id ${idPost} fue eliminada correctamente`);
    } else {
        console.error(`Error al eliminar la publicación`);
    }
}

// Ejecución
FuncionDeletePost(3);
