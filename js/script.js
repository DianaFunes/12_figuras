function cambiarImagen(src) {
  var img= document.getElementById("imagen");
  img.src = src;


}

function mostrarTexto01(id){

    var texto01 = document.getElementById(id);
    if (texto01.style.display === "none") {
      texto01.style.display = "block";
    } else {
      texto01.style.display = "none";
    
  
    var formCir = document.getElementById("circulo", "cuadrado");
    formCir.classList.add("ocultar"); }
  }

function mostrarTexto02(id)
{
    var texto02 = document.getElementById(id);
        if (texto02.style.display === "none") {
          texto02.style.display = "block";
          } else {
           texto02.style.display = "none";
        
        var formTri = document.getElementById("triangulo", "cuadrado");
        formTri.classList.add("ocultar");}
}

function mostrarTexto03(id){
    var texto03 = document.getElementById(id);
    if (texto03.style.display === "none") {
      texto03.style.display = "block";
      } else {
       texto03.style.display = "none";
      

    var formCua = document.getElementById("triangulo", "circulo");
    formCua.classList.add("ocultar");}
  }

  let res = document.getElementById("resultado");

function triangulo() {
    var a = parseInt(document.getElementById("lado01").value);
    var b = parseInt(document.getElementById("lado02").value);

    let area01 = (a * b) / 2;
  
    res.innerHTML = area01;
  }

  function circulo() {
    var a = parseInt(document.getElementById("radio").value);
    var b = 3.1416;

    let area02 = (b * (a * a)) ;
  
    res.innerHTML = area02;
  }

  function cuadrado() {
    var a = parseInt(document.getElementById("lado").value);

    let area03 = (a * a) ;
  
    res.innerHTML = area03;
  }