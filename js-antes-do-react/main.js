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
  nameUser: "Diego",
  idadeUser: 27,
  adressUser: {
    streetUser: "Rua de baixo",
    numberUser: 3,  
  },
  zip: {
    code: "000078",
    city: "Xique Xique Bahia";
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

// filter()

// every() 

// some()

// find() e findIndex()

// reduce()

// Template Literals

// Promises

// ES Modules

