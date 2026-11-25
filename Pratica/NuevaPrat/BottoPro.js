// funcion para incrementar el contador

let contador = 0;

function incrementar (){
    contador++;
    // alert no permite incrementar tan rapido, paulatinamente
    alert(`valor: ${contador}`);
}

function decrementar (){
    contador--;
    alert(`valor: ${contador}`);
}