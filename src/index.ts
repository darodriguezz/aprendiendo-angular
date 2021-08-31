

/*
    ===== Código de TypeScript =====
*/

class Heroe{

    /* alterEgo: string;
    edad: number;
    nombreReal: string; */

    constructor( 
        public alterEgo: string,
        public edad: number,
        public nombreReal: string){}

}

const iroman = new Heroe('Ironman' , 45 ,'Tony');

console.log(iroman);