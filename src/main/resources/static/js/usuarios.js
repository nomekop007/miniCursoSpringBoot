// Call the dataTables jQuery plugin
$(document).ready(function() {
 cargarUsuarios()
  $('#usuarios').DataTable();
});


const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':localStorage.token
  };

async function cargarUsuarios(){

      const response = await fetch('api/usuarios', {
        method: 'GET',
        headers: headers
      });
      const usuarios = await response.json();


          let usuariohtml = '';
    for(let usuario of usuarios){

        let btnDelete = '<a href="#" onclick="eliminarUsuario('+usuario.id+')" class="btn btn-danger btn-circle"> <i class="fas fa-trash"></i> </a>'


        usuariohtml += `
          <tr>
              <td>${usuario.id}</td>
              <td>${usuario.nombre}</td>
              <td>${usuario.email}</td>
              <td>${usuario.telefono}</td>
              <td>${btnDelete}</td>
          </tr>
    `
    }


    document.querySelector("#usuarios tbody").outerHTML = usuariohtml;

}


async function eliminarUsuario(id){
      const response = await fetch('api/usuarios/'+id, {
           method: 'DELETE',
           headers: headers
         });

         location.reload()
}
