
const submit = document.getElementById("message-form");

submit.addEventListener('submit', (e)=> {
    e.preventDefault();
    //console.log("Clicked");

    const email = document.getElementById("email").value;
    const name = document.getElementById("full-name").value;
    const body = document.getElementById("message").value;
    const phone = document.getElementById("phone-number").value;

    let mailBody = `
    <b>Este mensaje proviene del casillero de contacto de la web V+ </b>
    <br>
    <b>Nombre: </b>${name}
    <br>
    <b>Email: </b>${email}
    <br>
    <b>Número de teléfono: </b>${phone}
    <br>
    <b>Mensaje: </b>${body}
    <br>
    `

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "molinolojuan@gmail.com",
        Password : "37F7926BADF79893E57845650EEE2A12226C",
        To : 'nicolas.henderson@vmasport.com',
        From : "nicolas.henderson@vmasport.com",
        Subject : "Casillero de mensajes V+, Mensaje de " + name,
        Body : mailBody
    }).then(
      message => alert(message)
    );
})