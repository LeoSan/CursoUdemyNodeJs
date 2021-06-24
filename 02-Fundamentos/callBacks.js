//CallBacks -> Es una función que se ejecuta eventualmente cuando se necesite
//Caracteristicas: No es mas que una ejecución que se ejecuta en cierto punto del tiempo 
//No es mas que una función que se manda como argumento

//En si esto es un callback 
setTimeout(() => {
    console.log("hola mundo");
}, 100);




const getUsuarioid = (id, callback)=>{
    const usuario = {
        id,
        nombre:'Leonard',
        apellido:'Cuenca',
    }

    setTimeout(() => {
        callback(usuario);
    }, 1500);

}

getUsuarioid(10, (usuario)=>{
    console.log(usuario);
});