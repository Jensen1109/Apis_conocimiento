const FuncionGetPostPorId = async (idPost) => {
    const respuesta = await fetch(`http://localhost:3000/posts/${idPost}`);

    if (!respuesta.ok) {
        console.log(`La publicación no existe o fue eliminada`);
        return;
    }

    const data = await respuesta.json();
    console.log(`Publicación encontrada`, data);
}

// Ejecución
FuncionGetPostPorId(3);


const FuncionGetPosts = async () => {
    const respuesta = await fetch(`http://localhost:3000/posts`);
    const data = await respuesta.json();
    console.log(`Listado de publicaciones`, data);
}

// Ejecución
FuncionGetPosts();
