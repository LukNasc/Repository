/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./functions.js":
/*!**********************!*\
  !*** ./functions.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.soma = soma;\n\nfunction soma(a, b) {\n  return a + b;\n}\n\n//# sourceURL=webpack:///./functions.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _functions = __webpack_require__(/*! ./functions */ \"./functions.js\");\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconsole.log((0, _functions.soma)(1, 2));\nvar usuarios = [{\n  nome: 'Diego',\n  idade: 23,\n  empresa: 'Rocketseat'\n}, {\n  nome: 'Gabriel',\n  idade: 15,\n  empresa: 'Rocketseat'\n}, {\n  nome: 'Lucas',\n  idade: 30,\n  empresa: 'Facebook'\n}];\nvar idades = usuarios.map(function (item) {\n  return item.idade;\n});\nconsole.log(\"essas s\\xE3o as idades dos usu\\xE1rios \".concat(idades));\nvar userRocketsearMore18 = usuarios.filter(function (item) {\n  return item.idade >= 18 && item.empresa == 'Rocketseat';\n});\nconsole.log(\"os usu\\xE1rios que trabalham na rocketseat e tem mais de 18 anos s\\xE3o \".concat(userRocketsearMore18));\nconsole.log(userRocketsearMore18);\nvar userWorkingGoogle = usuarios.find(function (item) {\n  item.empresa == 'Google';\n});\nconsole.log(userWorkingGoogle != null ? \"O nome do usu\\xE1rio que trabalha na goole \\xE9 \".concat(userWorkingGoogle.nome) : 'Não há ninguém trabalhando no google');\nvar userAux = usuarios.map(function (item) {\n  var aux = _objectSpread({}, item, {\n    idade: item.idade * 2\n  });\n\n  return aux;\n});\nvar userMore18 = userAux.filter(function (item) {\n  return item.idade >= 50;\n});\nconsole.log(userMore18);\nvar arr = [1, 2, 3, 4, 5];\narr.map(function (item) {\n  return item + 10;\n}); // 3.2\n// Dica: Utilize uma constante pra function\n\nvar usuario = {\n  nome: 'Diego',\n  idade: 23,\n  endereco: {\n    cidade: 'Rio do Sul',\n    uf: 'SC',\n    pais: 'Brasil'\n  }\n};\n\nvar mostraIdade = function mostraIdade(usuario) {\n  return usuario.idade;\n};\n\nmostraIdade(usuario); // 3.3\n// Dica: Utilize uma constante pra function\n\nvar nome = \"Diego\";\nvar idade = 23;\n\nvar mostraUsuario = function mostraUsuario() {\n  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';\n  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;\n  return {\n    nome: nome,\n    idade: idade\n  };\n};\n\nmostraUsuario(nome, idade);\nmostraUsuario(nome); // 3.4\n\nvar promise = function promise() {\n  return new Promise(function (resolve, reject) {\n    return resolve();\n  });\n};\n\nvar empresa = {\n  nomeEmpresa: 'Rocketseat',\n  endereco: {\n    cidade: 'Rio do Sul',\n    estado: 'SC'\n  }\n};\nvar nomeEmpresa = empresa.nomeEmpresa,\n    _empresa$endereco = empresa.endereco,\n    cidade = _empresa$endereco.cidade,\n    estado = _empresa$endereco.estado;\nconsole.log(\"o nome da empresa \\xE9 \".concat(nomeEmpresa, \"\\n\"), \" \\xE9 da cidade de \".concat(cidade, \"\\n\"), \" do estado de \".concat(estado));\n\nfunction mostraInfo(_ref) {\n  var nome = _ref.nome,\n      idade = _ref.idade;\n  return \"\".concat(nome, \" tem \").concat(idade, \" anos.\");\n}\n\nconsole.log(mostraInfo({\n  nome: 'Diego',\n  idade: 23\n})); //REST\n\nvar array = [1, 2, 3, 4, 5, 6];\nvar first = array[0],\n    rest = array.slice(1);\nconsole.log(first);\nconsole.log(rest); //SPREAD\n\nvar usuario2 = _objectSpread({}, usuario, {\n  nome: 'Gabriel'\n});\n\nconsole.log(usuario2);\n\nvar usuario3 = _objectSpread({}, usuario, {\n  endereco: _objectSpread({}, usuario.endereco, {\n    cidade: 'Lontras'\n  })\n});\n\nconsole.log(usuario3);\nvar username = 'Diego';\nvar userage = 23;\nconsole.log(\"O usu\\xE1rio \".concat(username, \" possui \").concat(userage, \" anos\"));\nvar nomeAux = 'Diego';\nvar idadeAux = 23;\nvar usuarioAux = {\n  nomeAux: nomeAux,\n  idadeAux: idadeAux,\n  cidade: 'Rio do Sul'\n};\nconsole.log(usuarioAux);\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });