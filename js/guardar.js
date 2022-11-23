function guardar(){
    db.collection("usuario").add({
        nombre: document.getElementById("name").value,
        apellido: document.getElementById("last").value,
        email: document.getElementById("email").value,
        pais: document.getElementById("pais").value,
        celular: document.getElementById("celular").value,
    })
    .then((docRef) => {
        alert("Registro exitoso");
    })
    .catch((error) => {
        alert("Error en el registro");
    });
}