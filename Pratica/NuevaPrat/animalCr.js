document.writeln ('Creacion de Animales <br>');

class anima {
    especie = 'Retil';
    nombre = 'codrilo';
    carne = 'otros animales';
    tamaño = '1 metro a 2.5 mtro';
    entorno = 'agua y tierra';
    fuerza = 'descomunal';
    agilidad = 'lenta';
    edad = '50 años';


    //metodos
    alimentacion (){
        return `La alimentacion ${this.carne} cada 4 horas`
    }
    velocidad(){
        return`LA velocidad ${this.agilidad} 25 km/h`;
    }
    freno(){
        return `disminute ${this.tamaño} 25 Km/h a 0 km/h`;
    }
   
}

// objetos 
document.writeln (`Especie de animal es: ${this.especie}`, '<br>');
document.writeln (`Nombre de animal: ${this.nombre}`, '<br>');
document.writeln (`su alimentacion favorita: ${this.carne}`, '<br>');
document.writeln (`el tamaño es entre: ${this.tamaño}`, '<br>');
document.writeln (`habita donde halla: ${this.entorno}`, '<br>');
document.writeln (`la fuerza en en su mordidas: ${this.fuerza}`, '<br>');
document.writeln (`su velecidad y agilada: ${this.agilidad}`, '<br>');
document.writeln (`su años son de: ${this.edad}`, '<br>');


// Herencias subclases y metodos
class Deportistas {
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

// esta es la su clase, con la extennsion. es una herencia se pasa
class Futbolista extends Deportistas {
    constructor(nombre,apellido, goles){
        super(nombre,apellido);
        this._goles = goles;
    }

    get goles(){
        return this._goles;
    }
    set goles(newGoals){
        this._goles = newGoals;
    }

}

let futbolista2 = new Futbolista('Lionel', 'Messi', 5);
document.writeln ("Nombre: ", futbolista2.nombre, "<br>");
document.writeln ("apellido: ", futbolista2.apellido, "<br>");
document.writeln ("Goles: ", futbolista2.goles, "<br>");