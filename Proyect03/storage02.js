const miBotonX = document.getElementById("iBu");

miBotonX.addEventListener("click",() => 
{ let miClave = document.getElementById("iClave");
  let miValor = document.getElementById("iValor");
  localStorage.setItem(miClave, miValor);
})