/* 
    Desafíos - Oracle Next Education
*/

// CURSO: Lógica de programación: sumérgete en la programación con JavaScript

// desafio 02 - loops y tentativas.


    // Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
    let contador = 1;

    while (contador <= 10) {
    console.log(contador);
    contador++;
    };

    // Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
    let contador2 = 10;

    while (contador2 >= 0) { 
    console.log(contador2); 
    contador2--; 
    };

    // Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
    let numeroUsuario = parseInt(prompt("Ingresa un número mayor a cero:"));
    let contador3 = 0;

    while (contador3 <= numeroUsuario) { 
        console.log(contador3); 
        contador3++; 
    };
