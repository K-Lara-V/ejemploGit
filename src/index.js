class Main {

    listaPersonas = ["Jallmar", "Lara", "Alexa"];

    listar(){
        this.listaPersonas.map((persona)=>{
            console.log(persona);
        });
    }
}

const jallmar = new Main();

jallmar.listar();