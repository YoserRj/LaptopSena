// declaro las variables a y b
a = 20 
b = 30

//es para impimir en la consola
console.log(a == b); // False
console.log(a < b); // True
console.log(a > b) // Falss

// crea dos variable
let pais, edad;

pais = prompt ("¿De que pais eres? ");
edad = promt ("¿Cual es tu edad? ");

if (pais === "Colombia" && edad >= 18){
    document.writeIn("Eres cuidado del pais de :", pais);
} else{
    document.writeIn("No eres cuidadano del pais de Colombia o no eres mayor de edad:", pais);
}

// El operador || or se utiliza para evaluar si al menos una d las condiciones es verdadero. Si alguna de las condiciones es verdadera, 
// el resultado será verdadero,

let day, month, year;

day = prompt("ingresa el dia");
month = prompt("ingresa el mes");
year = prompt ("ingresa el año");

// convertir los valores ingrados a números
day = parseInt(day);
month = parseInt(month);
year = parseInt(year);

// valida si el dia, mes y año son válidos
if (isNan(day)|| isNan(month)|| isNan(year)){
    document.writeIn ("Ingrese solo número")
} else if (month == 1 || month == 2 || month == 3){
    document.writeIn ("Pertence al prier trimestre del año")
} else{
    document.writeIn("No pertenece al primer trimestres del año")
}
