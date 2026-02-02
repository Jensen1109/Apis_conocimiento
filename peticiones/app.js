// Parte 1: Solicitudes de consulta (GET)
// • Solicitud 1: Realice una solicitud GETpara obtener la lista completa de usuarios disponibles
// en el servicio.
// const FuncionGet = async() =>
// {
//     const soli = await fetch(`http://localhost:3000/users`)
//     const data = await soli.json();
//     console.log(data);

// }

// FuncionGet();

// Solicitud 2: Realice una solicitud GET para consultar la información de un usuario
// específico, utilizando su identificador.

const Funcionidentificador = async (id) =>
{
    const usuarioid = await fetch(`http://localhost:3000/users/${id}`)
    const data = await usuarioid.json();
    console.log(data);
    
}

Funcionidentificador(2);

// Solicitud 3: Realice una solicitud GET para obtener todas las publicaciones (posts)
// asociadas a un usuario determinado.

const Funcionpost = async (usersid)=>
{
    const publicaciones= await fetch(`http://localhost:3000/posts/${usersid}`)
    const data = await publicaciones.json();
    console.log(data);
    
}

Funcionpost(6);