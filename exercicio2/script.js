
const tabuada = [1,2,3,4,5,6,7,8,9,10]
let numero = Number(prompt(" Digite um número:"));
for (let i in tabuada){
    i++
  console.log(`A tabuada ${numero} x ${i} = ${i * numero}`);
}

