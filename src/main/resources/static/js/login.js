// Call the dataTables jQuery plugin
$(document).ready(function() {

});


async function iniciarSesion(){


        let data = { };

            data.email =  document.getElementById('txtEmail').value
            data.password =  document.getElementById('txtPassword').value

      const response = await fetch('api/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
      });
      const res = await response.text();
    if(res !== 'fail'){

    localStorage.token = res;
    localStorage.email = data.email;

    window.location.href = 'usuarios.html'
    }else {
    alert('login fallido')
    }

}

