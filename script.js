document.getElementById("mybtn").addEventListener("click",theclick);

//The click function
function theclick() {
  let cadena = prompt('Introduzca una oración','Anita lava la tina');

  const myarray1 = cadena.split(" ");
  console.log('La frase es: ' + myarray1)
  //Número de palabras
  const myarray = myarray1;
  let mylength = myarray.length;
  console.log('El número de palabras es: '+mylength);
  let fistword = myarray[0];
  console.log('La primer palabra es: '+fistword);
  let lastword = myarray[myarray.length-1];
  console.log('La última palabra es: '+lastword);
  let string1 = myarray.toString().replace( /,/g,'').toLowerCase();
  console.log('string1: '+string1)
  
  //funcion para revertir un string
  function reverse(palabra){
  return palabra.split("").reverse().join("");}
  //revirtiendo el string1
  var string2 = reverse(string1);
  console.log('string2: '+string2);
  
  let revarray = myarray.reverse();
  console.log('En reversa: '+revarray);
  let sortarray = myarray.sort();
  console.log('Ordenado A-Z: '+sortarray);
  let sortrevarray = sortarray.reverse();
  console.log('Ordenado Z-A: '+sortrevarray);
  
  //Verificación de polindromo
  function verificacion() {
  if(string1 == string2){
    let positivo = 'LA FRASE ES PALINDROMO'
    return positivo
  }else{
    let negativo = 'LA FRASE NO ES PALINDROMO'
    return negativo
  }};
    
//Impresión en pantalla
  let result = document.getElementById("theresult");
    result.innerHTML = 
  
  'La frase es: ' + myarray1.reverse() +'</br>'+
  'El número de palabras es: '+mylength+'</br>'+
  'La primer palabra es: '+fistword+'</br>'+
  'La última palabra es: '+lastword+'</br>'+
  'En reversa: '+revarray.reverse()+'</br>'+
  'Ordenado A-Z: '+sortarray.reverse()+'</br>'+
  'Ordenado Z-A: '+sortrevarray.reverse()+'</br>'+
  verificacion()    

}
