"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var idades = usuarios.map(function (item) {
  return item.idade;
});
console.log("essas s\xE3o as idades dos usu\xE1rios ".concat(idades));
var userRocketsearMore18 = usuarios.filter(function (item) {
  return item.idade >= 18 && item.empresa == 'Rocketseat';
});
console.log("os usu\xE1rios que trabalham na rocketseat e tem mais de 18 anos s\xE3o ".concat(userRocketsearMore18));
console.log(userRocketsearMore18);
var userWorkingGoogle = usuarios.find(function (item) {
  item.empresa == 'Google';
});
console.log(userWorkingGoogle != null ? "O nome do usu\xE1rio que trabalha na goole \xE9 ".concat(userWorkingGoogle.nome) : 'Não há ninguém trabalhando no google');
var userAux = usuarios.map(function (item) {
  var aux = _objectSpread({}, item, {
    idade: item.idade * 2
  });

  return aux;
});
var userMore18 = userAux.filter(function (item) {
  return item.idade >= 50;
});
console.log(userMore18);
var arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
  return item + 10;
}); // 3.2
// Dica: Utilize uma constante pra function

var usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

mostraIdade(usuario); // 3.3
// Dica: Utilize uma constante pra function

var nome = "Diego";
var idade = 23;

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

mostraUsuario(nome, idade);
mostraUsuario(nome); // 3.4

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

var empresa = {
  nomeEmpresa: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nomeEmpresa = empresa.nomeEmpresa,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log("o nome da empresa \xE9 ".concat(nomeEmpresa, "\n"), " \xE9 da cidade de ".concat(cidade, "\n"), " do estado de ".concat(estado));

function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostraInfo({
  nome: 'Diego',
  idade: 23
})); //REST

var array = [1, 2, 3, 4, 5, 6];
var first = array[0],
    rest = array.slice(1);
console.log(first);
console.log(rest); //SPREAD

var usuario2 = _objectSpread({}, usuario, {
  nome: 'Gabriel'
});

console.log(usuario2);

var usuario3 = _objectSpread({}, usuario, {
  endereco: _objectSpread({}, usuario.endereco, {
    cidade: 'Lontras'
  })
});

console.log(usuario3);
var username = 'Diego';
var userage = 23;
console.log("O usu\xE1rio ".concat(username, " possui ").concat(userage, " anos"));
var nomeAux = 'Diego';
var idadeAux = 23;
var usuarioAux = {
  nomeAux: nomeAux,
  idadeAux: idadeAux,
  cidade: 'Rio do Sul'
};
console.log(usuarioAux);
