
var n1 = prompt("Ingrese un primer numero entero mayor a cero")
var n2 = prompt("Ingrese un segundo numero entero mayor a cero")

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

var Celsius = prompt("Ingrese la temperatura a convertir en grados Celsius")
var kelvin = (parseInt(Celsius+273.15));
var Farenheit = (parseInt(Celsius*9/5)+32);

document.write("El equivalente en grados Farenheit es de " + Farenheit + " y en grados Kelvin es " + kelvin +"")

// Ejercicio 5: solicitar 5 números //

var numero1 = prompt("ingrese primer numero")
var numero2 = prompt("ingrese segundo numero")
var numero3 = prompt("ingrese tercer numero")
var numero4 = prompt("ingrese cuarto numero")
var numero5 = prompt("ingrese quinto numero")

var suma = parseInt(numero1) + parseInt(numero2) + parseInt(numero3) + parseInt(numero4) + parseInt(numero5);
var promedio = (suma/5);

document.write("La suma de los numeros ingresados es :" + suma + " y el promedio corresponde a : " + promedio +"")
