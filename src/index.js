class Main {

    listaPersonas = ["Jallmar", "Lara", "Alexa"];

    listar() {
        this.listaPersonas.map((persona) => {
            console.log(persona);
        });
    }

    agregar() {
        this.listaPersonas.push("Nueva Persona");
        console.log("Persona agregada");
    }
}

const jallmar = new Main();

jallmar.listar();

jallmar.agregar("kevin");

jallmar.listar();