
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


//Implementando um switch

let arrayProfession = ['fireFighter','cop','doctor','driver'];
let sorteio = Math.floor(Math.random()*4);
let profession = arrayProfession[sorteio];
console.log(`Your profession is: ${profession}`);
switch(profession){
    case 'fireFighter':
        console.log("Your shirt is red");
        break;
    case 'cop':
        console.log("Your shirt is blue");
        break;
    case 'doctor':
        console.log("Your shirt is white");
        break;
    default:
        console.log("Your shirt is black");
        break;

}

//Implementando funçoes 

function discoverRoot(number){
    return Math.sqrt(number);
}

let number = Math.floor(Math.random()*50);
let Root = discoverRoot(number);
console.log(`Seu número é ${number} e sua raiz quadrada é ${Root}`);

//maior ou menor de idade

let idade = Math.floor(Math.random()*80);

//let test = (idade < 18)? console.log(`Você têm ${idade} anos, logo você é menor de idade`) : 
//console.log(`Você têm ${idade} anos, logo você é maior de idade`)

function verifyAge(idade){
    if(idade < 18){
        return 1;
    }
    else{
        return 0;
    }
}

if(verifyAge(idade)){
    console.log(`Você têm ${idade} anos, logo você é menor de idade`);
}
else{
    console.log(`Você têm ${idade} anos, logo você é maior de idade`);
}

//calculo de porcentagem

function verificaPorcentagem(numero,porcentagem){
    return ((numero*porcentagem)/100);
}

let numero = Math.floor(Math.random()*301);
let porcentagem = Math.floor(Math.random()*101);

let verificado =  verificaPorcentagem(numero,porcentagem);
console.log(`${porcentagem}% de ${numero} é ${verificado}`);

/*calculo preço do imovel
-m^2 = 3000
-Se tiver 1 quarto, o m^2 é 1x
-Se tiver 2 quartos, o m^2 é 1,2x
-Se tiver 3 quartos, o m^2 é 1.5x
*/

function vericaPreco(metros,quartos){
    switch(quartos){
        case 1:
            return metros * m2;
            break;
        case 2:
            return metros*1.2 *m2;
            break;
        case 3:
            return metros*1.5* m2;
            break;
        default:
            return metros *m2;
            break;
    }
}

let metros = Math.floor(Math.random()*201);
let quartos = Math.floor(Math.random()*3)+1;
const m2 = 3000;

let preco1 = vericaPreco(metros,quartos).toFixed(2);
console.log(`O número de quartos é ${quartos}, o número de metros é ${metros}, e o preço da casa é de ${preco1}`);

//Criando um arrow function 
const randomNumber = () => Math.floor(Math.random()*201);
const addNumbers = (number1,number2) => number1 + number2; 
   


let number1 = randomNumber();
let number2 = randomNumber();
let sum = addNumbers(number1,number2);
console.log(`A soma de ${number1} com ${number2} é ${sum}`);

//soma de elementos de um array

/*
let array = [15,20,27];
let aux = 0;
for(i=0;i<array.length;i++){
    aux += array[i];
}

for(i=0;i<array.length;i++){
    console.log(array[i]);
}
console.log(`A soma dos elementos é ${aux}`);

*/

//menor elemento de um array

let array = [5,-2,20];
let aux =0;
let menor = array[0];
for(i=0;i < array.length;i++){
   if(menor < array[i]){
    menor = menor;
   }
   else{
    menor = array[i];
   }
}
console.log(`O menor número é ${menor}`);

//adicionando elementos em um array

let ingredientes = ['agua','leite','ovo','azeite'];

ingredientes.push('Uva');
ingredientes.push('Carne');
ingredientes.pop();
ingredientes.shift();
console.log(ingredientes);

//
