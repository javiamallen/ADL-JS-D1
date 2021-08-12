// Ejercicio 2: Realizar operaciones con dos números.  //

// Se solicitan dos variables al usuario en número //
var n1 = prompt("Ingrese un primer numero entero mayor a cero")
var n2 = prompt("Ingrese un segundo numero entero mayor a cero")

// Se muestran los resultados segun las diferentes operaciones matematicas //
document.write("La suma es: ")
document.write(parseInt(n1) + parseInt(n2));
document.write(" ");
document.write("La resta es: ")
document.write(parseInt(n1) - parseInt(n2));
document.write(" ");
document.write("La multiplicacion es: ")
document.write(parseInt(n1) * parseInt(n2));
document.write(" ");
document.write("La division es: ")
document.write(parseInt(n1) / parseInt(n2));
document.write(" ");
document.write("El modulo es: ")
document.write(parseInt(n1) % parseInt(n2));
document.write(" ");


// Ejercicio 3: Convertidor de temperatura de C a K y F //

// Usuario ingresa el dato de grados C a convertir//

var Celsius = prompt("Ingrese la temperatura a convertir en grados Celsius")
var kelvin = (parseInt(Celsius+273.15));
var Farenheit = (parseInt(Celsius*9/5)+32);

// Se muestra el resultado convertido a Farenheit y Kelvin en una misma accion //

document.write("El equivalente en grados Farenheit es de " + Farenheit + " y en grados Kelvin es " + kelvin +"")

// Ejercicio 4: calcular semanas y años  //

// se solicita al usuario que ingrese una cantidad de días. // 

var dias = prompt("Ingrese la cantidad de días a evaluar")
// dias divididos en semanas//
var semanas = (parseInt(dias/7));
//dias divididos en años//
var años = (parseInt(dias/365));
años = Math.floor(0);

// se muestran las variables equivalentes //

document.write(+ dias + " días equivalen a " + semanas +" semanas y a "+ años + " años .")





// Ejercicio 5: solicitar 5 números //

// Se solicitan cinco variables al usuario en número //
var numero1 = prompt("ingrese primer numero")
var numero2 = prompt("ingrese segundo numero")
var numero3 = prompt("ingrese tercer numero")
var numero4 = prompt("ingrese cuarto numero")
var numero5 = prompt("ingrese quinto numero")

// Se suman todas las variables ingresadas y estas se dividen por su cantidad// 
var suma = parseInt(numero1) + parseInt(numero2) + parseInt(numero3) + parseInt(numero4) + parseInt(numero5);
var promedio = (suma/5);

// se muestra el resultado de la suma de las variables y el promedio en una misma accion //
document.write("La suma de los numeros ingresados es :" + suma + " y el promedio corresponde a : " + promedio +"")

