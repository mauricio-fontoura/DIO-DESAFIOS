"use strict"
// ESTRUTURA PARA MODELO DE HEROIS ---------------------------------
class CriarHerois{
    constructor(nome,idade,tipo,ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    };
    statusDoAtaque(){
        console.log("Preparando o ataque...");
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`) 
    }
};
// CRIANDO HEROIS | VALORES ----------------------------------------
const escolherHerois = {
    heroi_1:new CriarHerois("Esqueleto",400,"Mago", "magia"),
    heroi_2:new CriarHerois("Siegfreid",34,"Guerreiro","espada"),
    heroi_3:new CriarHerois("Ping Lau",60,"Monge", "artes marciais"),
    heroi_4:new CriarHerois("Tsunoia",19,"Ninja","shuriken")
}
// ESTATÍSTICAS DA BATALHA -----------------------------------------
escolherHerois.heroi_1.statusDoAtaque();
escolherHerois.heroi_2.statusDoAtaque();