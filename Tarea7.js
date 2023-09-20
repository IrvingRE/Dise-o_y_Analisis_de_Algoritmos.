function calcularFibonacci(n) {
  if (n <= 0) {
    console.log("0");
  } else if (n === 1) {
    console.log("0, 1");
  } else {
    let a = 0;
    let b = 1;
    console.log("0, 1");
    let i = 2;

    while (i <= n) {
      const c = a + b;
      console.log(", " + c);
      a = b;
      b = c;
      i++;
    }
  }
}

calcularFibonacci(10); // Cambiar el número por el valor que se desee calcular
