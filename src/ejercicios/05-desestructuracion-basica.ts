

/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles; 
}

interface Detalles {
    autor: string;
    ano: number;
}

const reproductor: Reproductor = {

    volumen: 90,
    segundo:89,
    cancion:'El el dia de mi suerte',
    detalles:{
        autor: 'RedCode',
        ano: 2016
    }


}

const{volumen,segundo,cancion, detalles} = reproductor;
const {autor, ano} = detalles;


/* console.log( 'El volumen actul es de: ', volumen);
console.log( 'El Segundo actul es de: ', segundo);
console.log( 'La cancion actul es de: ',cancion);
console.log( 'El autor es: ',autor); */

const dbz: string[]= ['Goku', 'Vegueta','Trunks'];

const [p1,p2,p3] = dbz;

console.log('Personaje 1: ',dbz[0]);
console.log('Personaje 2: ',dbz[1]);
console.log('Personaje 3: ',dbz[2]);

