var carred = document.getElementById("red");
var carredwidth = parseInt(window.getComputedStyle(carred).width);
var carredright = parseInt(window.getComputedStyle(carred).right);

var carwhite = document.getElementById("white");
var carwhitewidth = parseInt(window.getComputedStyle(carwhite).width);
var carwhiteleft = parseInt(window.getComputedStyle(carwhite).left);

//CARRO BRANCO
  carwhite.addEventListener("click",function(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

    //Mostrar o selecionado
    var result = document.getElementById("result");
      result.innerHTML = "Branco";

    //Aparece os botões
    var resetar = document.getElementById("resetar");
      resetar.style.display = "block";
      resetar.addEventListener("click", function(){
        window.location.reload();
      })
  
    var acelerar = document.getElementById("acelerar");
      acelerar.style.display = "block";
      acelerar.addEventListener("click", function(){
        carwhitewidth = parseInt(window.getComputedStyle(carwhite).width);
        carwhite.style.width = (carwhitewidth - 1) + "px";
        carwhiteleft = parseInt(window.getComputedStyle(carwhite).left);
        carwhite.style.left = (carwhiteleft + 1) + "px";
      })

    var desacelerar = document.getElementById("desacelerar");
      desacelerar.style.display = "block";
      desacelerar.addEventListener("click", function(){
        carwhitewidth = parseInt(window.getComputedStyle(carwhite).width);
        carwhite.style.width = (carwhitewidth + 1) + "px";
        carwhiteleft = parseInt(window.getComputedStyle(carwhite).left);
        carwhite.style.left = (carwhiteleft - 1) + "px";
      })

  })

//CARRO VERMELHO
carred.addEventListener("click",function(){
    document.body.style.backgroundColor = "red";
    document.body.style.color = "black";

    //Mostrar o selecionado
    var result = document.getElementById("result");
      result.innerHTML = "Vermelho";

    //Aparece os botões
    var resetar = document.getElementById("resetar");
      resetar.style.display = "block";
      resetar.addEventListener("click", function(){
        window.location.reload();
      })

    var acelerar = document.getElementById("acelerar");
      acelerar.style.display = "block";
      acelerar.addEventListener("click", function(){
        carredwidth = parseInt(window.getComputedStyle(carred).width);
        carred.style.width = (carredwidth - 1) + "px";
        carredright = parseInt(window.getComputedStyle(carred).right);
        carred.style.right = (carredright + 1) + "px";
      })

    var desacelerar = document.getElementById("desacelerar");
      desacelerar.style.display = "block";
      desacelerar.addEventListener("click", function(){
        carredwidth = parseInt(window.getComputedStyle(carred).width);
        carred.style.width = (carredwidth + 1) + "px";
        carredright = parseInt(window.getComputedStyle(carred).right);
        carred.style.right = (carredright - 1) + "px";
      })

  })

//BTN BRANCO
  btnwhite.addEventListener("click",function(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

    //Mostrar o selecionado
    var result = document.getElementById("result");
      result.innerHTML = "Branco";

    //Aparece os botões
    var resetar = document.getElementById("resetar");
      resetar.style.display = "block";
      resetar.addEventListener("click", function(){
        window.location.reload();
      })

    var acelerar = document.getElementById("acelerar");
      acelerar.style.display = "block";
      acelerar.addEventListener("click", function(){
        carwhitewidth = parseInt(window.getComputedStyle(carwhite).width);
        carwhite.style.width = (carwhitewidth - 1) + "px";
        carwhiteleft = parseInt(window.getComputedStyle(carwhite).left);
        carwhite.style.left = (carwhiteleft + 1) + "px";
      })

    var desacelerar = document.getElementById("desacelerar");
      desacelerar.style.display = "block";
      desacelerar.addEventListener("click", function(){
        carwhitewidth = parseInt(window.getComputedStyle(carwhite).width);
        carwhite.style.width = (carwhitewidth + 1) + "px";
        carwhiteleft = parseInt(window.getComputedStyle(carwhite).left);
        carwhite.style.left = (carwhiteleft - 1) + "px";
      })

  })

//BTN VERMELHO
  btnred.addEventListener("click",function(){
    document.body.style.backgroundColor = "red";
    document.body.style.color = "black";

    //Mostrar o selecionado
    var result = document.getElementById("result");
      result.innerHTML = "Vermelho";
      

    //Aparece os botões
    var resetar = document.getElementById("resetar");
      resetar.style.display = "block";
      resetar.addEventListener("click", function(){
        window.location.reload();
      })

    var acelerar = document.getElementById("acelerar");
      acelerar.style.display = "block";
      acelerar.addEventListener("click", function(){
        carredwidth = parseInt(window.getComputedStyle(carred).width);
        carred.style.width = (carredwidth - 1) + "px";
        carredright = parseInt(window.getComputedStyle(carred).right);
        carred.style.right = (carredright + 1) + "px";
      })

    var desacelerar = document.getElementById("desacelerar");
      desacelerar.style.display = "block";
      desacelerar.addEventListener("click", function(){
        carredwidth = parseInt(window.getComputedStyle(carred).width);
        carred.style.width = (carredwidth + 1) + "px";
        carredright = parseInt(window.getComputedStyle(carred).right);
        carred.style.right = (carredright - 1) + "px";
      })

  })