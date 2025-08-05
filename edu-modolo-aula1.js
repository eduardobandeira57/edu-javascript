import { nomes } from "./nomes.js";
var btn = document.querySelector(".btn")
var p1 = document.querySelector(".p1")

btn.addEventListener("click",()=>{
    p1.innerHTML=" bem-vindo "+nomes[2]
})