/*
Luiz Otávio tem 30 anos, pesa 84 kg
o mesmo tem 1,80 de altura e seu imc é de 25.925...
Luiz Otávio nasceu em 1980
*/


const firstname = "Luiz";
const secondname = "Otavio";
const age = 30;
const weight = 84;

/* Altura Em CM */
const height = 1.80;
let imc;
let birth;

imc = weight / (height * height);
console.log("IMC", imc);

birth = 2024 - age;

console.log(`${firstname} ${secondname} tem ${age} anos, pesa ${weight} kg`);
console.log(`Ele tem ${height}m de altura e seu IMC é de ${imc.toFixed(2)}`);
console.log(`${firstname} nasceu em ${birth}`);

/* Testando o imc com um exercicio */
