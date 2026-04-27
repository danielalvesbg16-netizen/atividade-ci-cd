const calc = require('./calculadora');

console.assert(calc.soma(2,2) === 4, "Erro teste 1");
console.assert(calc.subtracao(5,2) === 3, "Erro teste 2");
console.assert(calc.multiplicacao(3,3) === 9, "Erro teste 3");
console.assert(calc.divisao(10,2) === 5, "Erro teste 4");
console.assert(calc.soma(10,5) === 15, "Erro teste 5");

console.log("Todos os testes passaram!");
