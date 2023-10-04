const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contarVocalesConTilde(frase) {

  const regex = /[áéíóúÁÉÍÓÚ]/g;
  
  const matches = frase.match(regex);
  
  if (!matches) {
    return 0;
  }

  return matches.length;
}

rl.question('Por favor, ingresa una frase o palabra: ', (frase) => {
  const cantidadVocalesConTilde = contarVocalesConTilde(frase);
  console.log(`La cantidad de vocales con tilde en la frase "${frase}" es: ${cantidadVocalesConTilde}`);
  rl.close();
});
//para que funcione tiene que ejecutarse en la terminal e ingresar la palabra o frase.
