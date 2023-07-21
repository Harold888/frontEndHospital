function eliminarCita(idCita){
    fetch(`http://localhost:8080/citas/${idCita}`,{
        method:'DELETE'
    })
    .then(response =>{
        if(response.ok){
            obtenerCitas();
            mostrarMensaje('Cita eliminada con éxito.');
        }else{
            mostrarMensaje('Error al eliminar la cita', true);
        }
    })
    .catch(error => {
        mostrarMensaje('Error en la solicitud de eliminación', true);
    });

    function mostrarMensaje(mensaje, tipo){
        const mensajeDiv = document.getElementById('mensaje');
        mensajeDiv.innerText = mensaje;
        mensajeDiv.classList.remove('alert-success', 'alert-danger', 'd-none');
        mensajeDiv.classList.add(`alert-${tipo}`);
    }
}