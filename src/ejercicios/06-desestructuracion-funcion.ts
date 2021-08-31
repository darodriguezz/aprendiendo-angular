

/*
    ===== Código de TypeScript =====
*/

 export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {

    desc: 'Xiaomi',
    precio: 500

}

const tableta: Producto = {

    desc: 'ipad air',
    precio: 900

}

export function calculaISV(productos:Producto[]): [number , number]{

    let total=0;

    productos.forEach(({precio}) =>{
        total += precio;

    })

    return  [total,total * 0.15];

}

const articulos = [telefono , tableta];

const[ total,isv] = calculaISV(articulos);

console.log('ISV: ', isv);
console.log('Total: ', total);