let botonSumar = document.querySelector("#sumar");
let botonMultiplicar = document.querySelector("#multiplicar");

function sumar() {
  let numeroUno = parseInt(prompt("1er numero"));
  let numeroDos = parseInt(prompt("2do numero"));
  let resultado = numeroUno + numeroDos;
  alert("la suma de los numeros es" + resultado);
}

function multiplicar() {
  let numeroUno = parseInt(prompt("1er numero"));
  let numeroDos = parseInt(prompt("2do numero"));
  let resultado = numeroUno * numeroDos;
  alert("la multiplicacion de los numeros es" + resultado);
}

const contactoText = {
  email: 'somosfundacionmas@gmail.com',
  instagram: '@SomosMás',
  facebook: 'Somos_Mas',
  teléfono: '+54 11 60112988',
}


Object.entries(contactoText).map((item) => console.log(item) )
