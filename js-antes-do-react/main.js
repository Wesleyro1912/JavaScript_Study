// Nullish Coalescing Operator
const idade_tste = 27;
document.body.innerText = "Sua idade é: " + (idade_tste ?? "Não informado !");


// Ojetos 
const user = {
  name: "Diego",
  idade: 27,
  adress: {
    street: "Rua de baixo",
    number: 3,  
  },
};


// Desestruturação
const { street, idade: age } = user
document.body.innerText = JSON.stringify({street, age});


// Rest operator
const { name, idade, ...rest } = user;
const arrays = [1,2,3,4,5,6];

const [] = arrays;
const [primeiro, segundo, ...resto] = arrays;

document.body.innerText = JSON.stringify({primeiro, segundo, e});
document.body.innerText = JSON.stringify(rest);


// Short Syntax
const nome = "Macio";
const dte = 20;

const userTeste = {
  nome,
  dte,
};

document.body.innerText = JSON.stringify(userTeste);


// Optional Chaining
const userTeste02 = {
  nameUser: "Diego Alves",
  idadeUser: 27,
  adressUser: {
    streetUser: "Rua de baixo",
    numberUser: 3,  
  },
  zip: {
    code: "000078",
    city: "Xique Xique Bahia",
  },

  FuncaoTeste(){
    return "ok";
  }
};

const key = "name"
document.body.innerText = user[key];

document.body.innerText = userTeste02.adressUser?.zip?.code ?? "Não foi informado";
document.body.innerText = userTeste02.adressUser?.FuncaoTeste?.();


// map()
const array = [1,2,3,4,5, "Numero"];

for (const i of array) {
  document.body.innerText += i;
}

array.forEach( item =>{
  document.body.innerText += item;
})

const TesteMap = array.map(item => {
  return item * 2
});

document.body.innerText = JSON.stringify(TesteMap);


// filter()
const TesteFilter = array.filter(item => item % 2 !== 0);


// every() 
const TodosItensSaoNumeros = array.every(item => typeof item == "number");


// some()
const PeloMenosUmItemNaoEUmNumero = array.some(item => {
  return typeof item !== 'number';
})


// find() e findIndex()
const par = array.find(item => item % 2 == 0 )
const a = array.findIndex(item => item % 2 == 0 )


// reduce()
const TesteReduce = array.reduce((acc, item) => {
  document.body.innerText += acc + "," + item + "-----";
  return acc + item;
}, 0);


// Template Literals
const message  = `Bem Vindo(a): ${nameUser ?? "Visitante"}`;


// Promises

// === Exemplo simple ===
const TestePromises = (a, b) => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
}

TestePromises(1, 5).then(soma => {
  document.body.innerText = soma;
})
.catch(err =>{
  console.log(err);
})

// === Exemplo mais real ===
fetch("https://api.github.com/users/diedo3g")
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    console.log("deu");
  })

// ES Modules

