let data = new Date()
let dia = data.getDate()
let hor = data.getHours()
let minu = data.getMinutes()
let mes = data.getMonth()
let ano = data.getFullYear()


var hoje = dia+"/"+mes+"/"+ano+"  ; "+hor+":"+minu

export{hoje}