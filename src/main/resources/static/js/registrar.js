// Call the dataTables jQuery plugin
$(document).ready(function() {

});


async function registrarUsuario(){


        let data = { };

            data.nombre =  document.getElementById('txtNombre').value
            data.apellido =  document.getElementById('txtApellido').value
            data.email =  document.getElementById('txtEmail').value
            data.password =  document.getElementById('txtPassword').value

      const response = await fetch('api/usuarios', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':localStorage.token
        },
        body:JSON.stringify(data)
      });

        alert('usuario creado')
          window.location.href = 'login.html'


}

