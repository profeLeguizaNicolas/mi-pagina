let punto = localStorage.getItem("point");
let point = document.getElementById("puntos");


let usuario = localStorage.getItem("usuario");
let body = document.body;

let resultados = JSON.parse(localStorage.getItem("resultados"))


let existente = resultados.find(r => r.usuario === usuario);
if (existente) {
  existente.punto = punto; // actualiza puntaje
} else {
  resultados.push({ usuario, punto });
}


let valores = JSON.parse(localStorage.getItem("valores"));


console.log(valores);

let tabla = `<style>td,th{border: 2px red solid; padding:10px;}</style><h1 style="text-align:center">Tabla de Puntajes</h1> <br> <table style="margin:0 auto; border-collapse:collapse;"><thead><th>Nombre</th><th>Puntos</th></thead><tbody>`;
    for(let i = 0 ; i < resultados.length-1;i++){
        tabla += `<tr><td>${resultados[i].usuario}</td><td>${resultados[i].puntos}</td></tr>`
    }
tabla += `</tbody></table>`

body.innerHTML += tabla;

point.textContent = resultados[i].puntos;



document.getElementById("reset").addEventListener("click",()=>{localStorage.clear()})
