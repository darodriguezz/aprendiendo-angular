

/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe {
    nombre:string;
    edad:number;
    direccion: Direccion,
    mostrarDireccion: () => string;
}

interface Direccion{

    calle: string;
    pais: string;
    ciudad: string;
}

const superHeroe = {

    nombre: 'Topoyllo',
    edad: 50,
    direccion: {
        calle: 'Av Maracos',
        pais: 'Colombia',
        ciudad: 'Villavicencio'
    },

    mostrarDireccion(){

        return this.nombre + ' ,' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }


}

const direccion = superHeroe.mostrarDireccion();

console.log(direccion);