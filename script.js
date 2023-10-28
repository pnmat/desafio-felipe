let nomeHeroi = 'pnmat';
let xpHeroi = 15000;
let rankHeroi = ''

if(xpHeroi <= 1000) rankHeroi = 'Ferro'
if(xpHeroi >= 1001 && xpHeroi <= 2000) rankHeroi = 'Bronze'
if(xpHeroi >= 2001 && xpHeroi <= 5000) rankHeroi = 'Prata'
if(xpHeroi >= 6001 && xpHeroi <= 7000) rankHeroi = 'Ouro'
if(xpHeroi >= 7001 && xpHeroi <= 8000) rankHeroi = 'Platina'
if(xpHeroi >= 8001 && xpHeroi <= 9000) rankHeroi = 'Ascendente'
if(xpHeroi >= 9001 && xpHeroi <= 10000) rankHeroi = 'Imortal'
if(xpHeroi >= 10001) rankHeroi = 'Radiante'

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${rankHeroi}`)

