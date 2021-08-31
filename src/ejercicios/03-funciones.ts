

/*
    ===== Código de TypeScript =====
*/

function sumar(a: number,b: number): number{

    return a + b;

}

const   sumarFlecha = (a:number, b:number): number =>{

    return a + b;
    
}

function multiplicar(numero:number, otroNumero?: number, base:number = 2): number{

        return numero* base;
}


//const resultado = multiplicar(5,4,5);

//console.log(resultado);

interface PersonajeDARM{

    nombre: string;
    pv: number;
    mostrarPv: () => void;
}


function curar ( personaje: PersonajeDARM, curarx:number): void{

        personaje.pv += curarx;

        console.log( personaje);


}

const nuevoPersonaje: PersonajeDARM ={

    nombre: 'Diego',
    pv: 50,
    mostrarPv() {
        console.log( 'Puntos de Vida', this.pv);
    }
}

curar(nuevoPersonaje, 80);

nuevoPersonaje.mostrarPv();