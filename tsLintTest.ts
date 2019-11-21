// npm install -g typescript   (installar global typescript)
// corre yarn o yarn install   (installar tslint dependecia )
// descargar tslint package en VScode    (installar tslint para VScode)   ESTE PASO NO ES NESESARIO
// chequear en VScode preferences/settings/extensions/tsline para ver si esta  ESTE TAMPOCO
// ver codigo abajo para verificar si tslint esta funciona

function greeter(person: string) {
  return "Hello," + person;
}

greeter(4); //debe ser error abajo el 4
greeter("hola");

let num: number = 5;
let num2: number = "hello"; //debe ser error abajo num2

function hola(word?: string) {
  if (word) {
    console.log("hola " + word);
  } else {
    console.log("hola");
  }
}

hola();
hola(4); //debe ser error abajo el 4
hola("friend");

//funcion que necesita devolver un numero
function randomNumber(): number {
  return Math.random() * 10;
}

//funcion que debe devolver un numero pero no lo hace
function randomNumber2(): number {
  return "hola"; //debe ser error aca
}

//guardar funcion en variable
let addNumbers: (x: number, y: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};

let anyValue = "five"; //no debe ser error
let anyValue2: any = "five2"; //este tampoco

//funcion que puede retornar todo tipos
function returnAny(anything): any {
  return anything;
}

returnAny(5);
returnAny("five");
returnAny(null);
returnAny(); //debe ser error porque necesita retornar algo

//funcion tipo void que no retorna nada
function doNothing(): void {
  console.log("haciendo nada");
}

//funcion tipo void que debe retorna nada pero devuelve aldo y tira error
function shouldDoNothing(): void {
  return "Deberia hacer nada";
}
