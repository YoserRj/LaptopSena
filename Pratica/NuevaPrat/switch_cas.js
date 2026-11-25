
/*Switch Case:
Es una estructura de control utiliza para tomar decisiones basadas en el valor de una expresión.
Es útil se desea un mismo valor con múltiples casos posible y ejecutar un bloque de código según el caso que coincida.*/

// se define primero la variable
let valor;

valor = parseInt(prompt('Ingrese valores numémricos entre 1 y 3'));

// sintaxis de switch case, es if, else, parecido

// creo los caso dependiendo de la cantidad de valor determindado
switch (valor) {
    case 1:
        document.writeln('Usted ingreso el número: ', valor);
        break;
    case 2:
        document.writeln('usted ingreso el número: ', valor);
        break;
    case 3:
        document.writeln('usted ingreso el número: ', valor);
        break;

    default:
        document.writeln('El número esta fuera del rango o no es un número válido');
        break;
}

document.writeln ('<br>----------------');
document.writeln ('<br>');


let color;
color = prompt('ingrese uno de estos colores: Rojo, Verde o Azul');

switch (color) {
    case "Rojo":
        document.writeln('Usted ingreso el color: ', color);
        break;
    
    case "Verde":
        document.writeln('Usted ingreso el color: ', color);
        break;
    
    case "Azul":
        document.writeln('Usted ingreso el color: 3', color);
        break;
    default:
        document.writeln ('el color esta fuera del rango o no es un color válido');
        break;
}
