var btn = document.querySelector(".btn")
var iput1 = document.querySelector(".iput1")
var iput2 = document.querySelector(".iput2")
var iput3 = document.querySelector(".iput3")
var h1 = document.querySelector(".h1")
var dias = 0
var dia = 0
var mes = 1
var ano = 0
var tanos = 0
var mmes=1
var contmes=0

var arrmes=[
    "",
    "0",
    "31",
    "59",
    "90",
    "120",
    "151",
    "181",
    "212",
    "243",
    "273",
    "304",
    "334",

]


btn.addEventListener("click",()=>{
    

   var pes=0
   dia=0
   mes=1
   ano=0
   dias=0
   h1.innerHTML=""

    pes = iput3.value*365
    pes=pes+parseInt(iput1.value)
    pes=pes+parseInt(arrmes[iput2.value])
    
    
   /* document.querySelector(".teste").innerHTML=pes*/
    alert("Aguarde em quanto processa dados")
while(dias<pes){
    
    if (dia>=30) {
        dia=0
        mes++
        
    }
    if(mes>=13){
        mes=1
        contmes=1
        ano++

    }
    dias++
    dia++
    h1.innerHTML="Calendario Bíblico          "+dia+"/"+mes+"/"+ano+"   total de dias"+":"+dias
}
})


