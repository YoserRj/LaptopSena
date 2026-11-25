 /*Array O ARREGLOS
 ES UNA ESTRUTURA DE DATOS QUE PERMITE ALMANCENAR UNA COLECCIÓN ORDENADA DE ELEMENTOS;
 ESTO ELEMENTOS PUEDE SER CADENAS DE TEXTO, VALORES NUMÉRICOS, BOOLEANOS, ENTRE OTROS. 
 IGUALMENTE PODRÍAN SER UN CONJUNTO DE FUNCIONES E INCLUSIVE OTROS ARRAY.*/

 //Yoser: El array, es como una lista, es un contador, esta en su posicion, se puede mosificar.

//  Declaración de un array vacío

let numeros = [];

numeros = [5,4,8,12,16,35,44,2];

// mostrar en en la pagina web
document.writeln ('ELEMENTOS: ', numeros);
document.writeln ('<br>')
// un array puede crearse directamente sin ser declarado:
Numeros = [3,5,9,6,19];
document.writeln ('Elementos:', Numeros);
document.writeln ('<br>------------');
document.writeln('<br>')



//Array con valores de tipo texto o string
let frutas = ['Manzanas', 'Peras','Mandarinas','Naranjas', 'kiwi'];
document.writeln ('Diversas frutas:', frutas);
document.writeln ('<br>----------------');
document.writeln ('<br>');

// Metodos de los ARRAY

//VER LA CANTIDAD DE ELEMENTOS 
// el length es para saber que cantidad de elemntos hay, larg.
document.writeln ('Cantidad de elementos del array de Frutas: ', frutas.length);
document.writeln ('<br>');
document.writeln ('Cantidad de Elemntos del array de Numeros: ', Numeros.length);
document.writeln ('<br>----------------');
document.writeln ('<br>');

//
let abecedario = ['A','B','C','D','B','R','S','W','K','T'];
document.writeln (abecedario);
document.writeln ('<br>');
// organiza alfabeticamente de las letras.
document.writeln (abecedario.sort());
document.writeln ('<br>');
// Funcion Reverse organiza los elementos 
document.writeln (abecedario.reverse());
document.writeln ('<br>');




