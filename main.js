let boton = document.getElementById('boton');
let puntos = 0;

boton.addEventListener('click',()=>{
    let usuario = document.getElementById('nom').value;
    
    let valores = document.getElementsByClassName("true");
    let nombre = document.getElementById('bruce').checked;
    let mayor = document.getElementById('alfred').checked;
    let ciudad = document.getElementById('gotica').checked;
    let robin = document.getElementById('di').checked;
    let joker = document.getElementById('guason').checked;
    let movil = document.getElementById('batmobile').checked;
    let lucius = document.getElementById('luci').checked;
    let muerte = document.getElementById('muerte').checked;
    let lex = document.getElementById('lex').checked;
    let noche = document.getElementById('noche').checked;
    for(let i = 0; i < valores.length - 1 ; i++){console.log(valores[i].checked)}
localStorage.setItem("valores",JSON.stringify(valores));
    if(nombre) puntos++
    if(mayor) puntos++
    if(ciudad) puntos++
    if(robin) puntos++
    if(joker) puntos++
    if(movil) puntos++
    if(lucius) puntos++
    if(muerte) puntos++
    if(lex) puntos++
    if(noche) puntos++

 
    let resultados = JSON.parse(localStorage.getItem("resultados"))||[];

    resultados.push({usuario,puntos});
    localStorage.setItem("resultados",JSON.stringify(resultados));
    window.location.href = "fin.html";

   localStorage.setItem("puntos",puntos);
});



