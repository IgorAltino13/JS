
//1. Crie uma variavel para armazenar o nome
//do carro e ponha o valor Ferrari. E exiba-a

let marca = "Ferrari";
console.log(marca);

//2. Crie uma variavel para armazenar o preço
//do bolo, que custa R$ 19,99.E exiba-a

let preco = 19.99;
console.log(preco);

//3. Corrija o código a seguir (e exiba-o).
// let "cidade" = São Paulo

let cidade = "São Paulo";
console.log(cidade);

//Template String

let nome = "Igor";
let sobrenome = "Altino"
let nomeCompleto = `Seu nome completo é ${nome} ${sobrenome} e voce mora na cidade de ${cidade}`;
console.log(nomeCompleto);


//Condicionais: Simples radar

let vel = Math.floor(Math.random()*91);
let cinto = Math.floor(Math.random() * 2);
console.log(cinto);
if(vel >= 80 || (!cinto)){
    console.log(`Você foi multado, sua velocidade era de ${vel} km/h`);
}
else if(vel <= 30 || (!cinto)){
    console.log(`Você foi multado, sua velocidade era de ${vel} km/h`);
}
else{
    console.log(`Você não foi multado, sua velocidade era de ${vel} km/h`);
}


 //condicional ternario --Sistema de login +frete

 let name = 'Igor';
 let lastname = 'Barbosa';
let isMember = true;

let verify = ((`${name} ${lastname}` === 'Igor Barbosa') && isMember === true) ? console.log("Você é um membro") :
console.log("Você não é um membro");



