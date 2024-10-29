document.getElementById("post").addEventListener("submit", function(event){
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === "prueba1" && password === "clave1"){
        window.location.href = "intento1.html";
    }else{
        alert("Usuario o contraseña incorrectos")
    }

});