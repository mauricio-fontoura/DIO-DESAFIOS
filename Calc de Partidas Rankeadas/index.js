"use strict"
//VARIAVEIS
let resultVitorias = CalcResult(102,51);
//-----------------------------------------------------------------------------------------------
// RETORNA A MEDIA ENTRE VITORIA E DERROTA
function CalcResult(vitoria,derrota){
    let resultado = vitoria - derrota
    
    return resultado
};
// RETORNA A POSIÇÃO DO NIVEL DO RANK NA RANKEADA
function PosiçãoRank(nivelRank){
    if(resultVitorias<=10)
        nivelRank ="Ferro";
    if(resultVitorias>=11 && resultVitorias<=20)
        nivelRank = "Bronze";
    if(resultVitorias>=21 && resultVitorias<=50)
        nivelRank = "Prata";
    if(resultVitorias >= 51 && resultVitorias<=80)
        nivelRank = "Ouro";
    if(resultVitorias >= 81 && resultVitorias<=90)
        nivelRank = "Diamante";
    if(resultVitorias >=101)
        nivelRank = "Imortal";
//----------------------------------------------------------------
    return nivelRank
};
// IMPRIME VITORIAS E A POSIÇÃO NA RANKEADA
console.log(`O Herói tem de saldo ${resultVitorias} vitórias está no nível de ${PosiçãoRank()}`);