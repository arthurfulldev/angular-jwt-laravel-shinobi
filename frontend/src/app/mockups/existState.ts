import { AbstractControl } from  '@angular/forms';

export const STATES = [
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038531_249px.jpg?1370033492", name: "Jalisco" },
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038539_249px.jpg?1370033492", name: "Oaxaca" },
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038537_249px.jpg?1370033492", name: "Nuevo León" },
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038524_249px.jpg?1370033492", name: "Ciudad de México" },
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038520_249px.jpg?1370033492", name: "Chihuahua" },
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038551_249px.jpg?1370033492", name: "Yucatán" },
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038549_249px.jpg?1370033492", name: "Guanajuato" },
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038519_249px.jpg?1370033492", name: "Chiapas" },
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038553_249px.jpg?1370033492", name: "Tlaxcala" },
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038525_249px.jpg?1370033492", name: "Durango" },
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038532_249px.jpg?1370033492", name: "México" },
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038515_249px.jpg?1370033492", name: "Baja California" },
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038528_249px.jpg?1370033492", name: "Guerrero" },
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038540_249px.jpg?1370033492", name: "Puebla" },
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038550_249px.jpg?1370033492", name: "Veracruz" },
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038533_249px.jpg?1370033492", name: "Michoacán" },
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038513_249px.jpg?1370033492", name: "Aguascalientes" },
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038545_249px.jpg?1370033492", name: "Sonora" },
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038547_249px.jpg?1370033492", name: "Tamaulipas" },
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038544_249px.jpg?1370033492", name: "Sinaloa" },
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038552_249px.jpg?1370033492", name: "Zacatecas" },
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038546_249px.jpg?1370033492", name: "Tabasco" },
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038541_249px.jpg?1370033492", name: "Queretaro" },
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038521_249px.jpg?1370033492", name: "Coahuila" },
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038516_249px.jpg?1370033492", name: "Baja California Sur" },
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038529_249px.jpg?1370033492", name: "Hidalgo" },
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038535_249px.jpg?1370033492", name: "Nayarit" },
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038542_249px.jpg?1370033492", name: "Quintana Roo" },
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038522_249px.jpg?1370033492", name: "Colima" },
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038543_249px.jpg?1370033492", name: "San Luis Potosí" },
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038534_249px.jpg?1370033492", name: "Morelos" },
    { flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038518_249px.jpg?1370033492", name: "Campeche" },
];

export function existState ( control ): {[key: string]: any}
{
    let res = null;
    for ( let state of STATES ) {
        if( control.value == state.name ){
            res = true;
        }
    }

    if ( control.value == "" || control.pristine )
    {
        return null;
    }

    return ( ! res ) ? { 
        'message': 'Estado incorrecto', 
        'value' : res,
        'error': undefined 
    } 
    : null;
}