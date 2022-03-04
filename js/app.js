const personas = [
    new Persona("Juan", "Perez"),
    new Persona("Pedro", "Gomez"),
];

function mostrarPersonas() {
    let texto = "";
    for(let persona of personas) {
        texto += `<li>${persona._nombre} ${persona._apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;

    if(nombre != "" && apellido != "") {
        let persona = new Persona(nombre, apellido);
        personas.push(persona);
        mostrarPersonas();
    }
    else{
        alert("Debe ingresar nombre y apellido");
    }
}
