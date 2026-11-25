/* (POO) Progtamcion orientado a Objetos.
La poo es un paradigma de programación que organiza el software en clases y objetos para modelar concepto del mundo real. Este enfoque promueve la reutilización del código,  modularidad y mejora organización del software*/

// Crear el Objeto Automovil
document.writeln ('Creación de objecto AUTOMOVIL <br>');

// 
var auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    color: 'Azul',
    año:'2026',
    combustible: 'Diasel',
    tipo:'sedán',
    radio: ['FM', 'MP4', 'USB']
}

// Acceso a las propiedades: se ultilizan de punto(Auto.marca) para acceder a las propiedades del objecto.
// muestra en pagina: ${llamo la varible con punto y la definicion.}
document.writeln(`Marca: ${auto.marca}`, '<br>');
document.writeln ('Clase Vehiculo con objeto ferrari', '<br>')

// crear una clase
class vehiculos {
    // atributos
    marca = 'Toyota';
    modelo = 'Corolla';
    color = 'Rojo';
    año = '2027';
    combustible = 'Corriente';
    tipo = 'Sedán';
    precio = '$ 78.282.000';


//Metodos 
// Representan acciones o comportamientos en este caso del vehículo.
acelerar(){
    // This= esto,
    return`el ${this.marca} acelera de 0 a 100 km/h en tan sólo 3 segundos,`
    }
    frenar (){
        return `${this.modelo} puede frenar de 100 a 0 km/h en tan solo 2.5 segundos`
    }
}

// crear un Objeto basado en la clase Vehiculo
const ferrari = new vehiculos();
/*la declara una constante, luego la palabra reservada NEW que significa que esta creado una nueva instancia de tipo objeto y al colocar el nombre de la clase para este nuevo objeto tendrá 
disposición los atributo y de la clase previamente creada.*/

// mostrar las propiedades y métodos del objeto ferrari

document.writeln (`Marca: ${ferrari.marca} <br>`);
document.writeln (`Modelo: ${ferrari.modelo} <br>`);
document.writeln (`Color: ${ferrari.color} <br>`);