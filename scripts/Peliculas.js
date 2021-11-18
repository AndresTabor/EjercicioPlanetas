let nombrePLanetas = Array ('Tierra', 'Marte')
let distancia = [6,3,'67']
const tamaño = []

console.log(nombrePLanetas)
console.log(distancia)
console.log(tamaño)

let i=0;
while(i <= nombrePLanetas.length -1) {
    console.log(i)
    console.log(nombrePLanetas[i])
    i = i+1
}

for(let index = 0; index < nombrePLanetas.length; index++){
    console.log(nombrePLanetas[i])
}

for(const key in Object){
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
    }
}
for (const key in nombrePLanetas){
    console.log(nombrePLanetas[key])
}
for (const planeta of nombrePLanetas){
    console.log(planeta)
}
// operador de igualdad
for (const key in distancia){
    if (distancia[key] == '5') {
        console.log('se encontró la distancia')
    }
    else{
       console.log('no se encontró la distancia') 
    }
}
nombrePLanetas.forEach((value, index, array) => {
    console.log('planeta', index, value)
});
nombrePLanetas.map((planetas, index)=>{
    return(
        console.log(`El planeta ${planetas} tiene tamaño de :${tamaño[index]}`)
    )
})
let resultadoMap = nombrePLanetas.map((planetas, index)=>{
    return(
        console.log(`El planeta ${planetas} tiene tamaño de :${tamaño[index]}`)
    )
})
console.log(resultadoMap) 