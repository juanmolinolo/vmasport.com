
const submit = document.getElementById("message-form");

submit.addEventListener('submit', (e) => {
    e.preventDefault();

    let mailBody = `
    <b>Este mensaje proviene del casillero de contacto de la web V+ </b>
    <br>
    <b>Nombre: </b>${document.getElementById("full-name").value}
    <br>
    <b>Email: </b>${document.getElementById("email").value}
    <br>
    <b>Número de teléfono: </b>${document.getElementById("phone-number").value}
    <br>
    <b>Mensaje: </b>${document.getElementById("message").value}
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
      $("#button-text").fadeOut("slow"),
      setTimeout(function() {$("#button-text").text("Enviado!")}, 600),
      $("#button-text").fadeIn("slow"),
    
      setTimeout(function() {   
        $("#button-text").fadeOut("slow")
        setTimeout(function() {$("#button-text").text("Enviar")}, 600)
        $("#button-text").fadeIn("slow")
        submit.reset()}, 3000)
    );
})