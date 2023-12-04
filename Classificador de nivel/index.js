//MANUTENÇÃO
"use strict"
// const log = new Function('mensage','console.log(mensage)');
//----------------------------------------------------------------
//VARIAVEIS 
let rank;
const heroName = "Siegfried";
let countXP=0;
//----------------------------------------------------------------
//ESTRUTURA DE DESIÇÃO DO RANK  
while(countXP<10000){
    countXP ++
         
    if(countXP<=1000)
        rank="Ferro";
    if(countXP == 1001 && countXP < 2000)
        rank="Bronze";
    if(countXP ==2001 && countXP <5000)
        rank="Prata";
    if(countXP == 6001 && countXP<7000)
        rank="Ouro";
    if(countXP == 7001 && countXP<8000)
        rank="Platina";
    if(countXP == 8001 && 9000)
        rank="Ascendente";
    if(countXP == 9001 && 10000)
        rank="Imortal";
    if(countXP >= 10000)
        rank="Radiante";    
//----------------------------------------------------------------
//IMPRESSÃO DO RANK    
console.log(`O Herói de nome ${heroName} está no nível de ${rank}`);
};