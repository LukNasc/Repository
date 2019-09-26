const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

const idades = usuarios.map(item=>{
    return item.idade;
});

console.log(`essas são as idades dos usuários ${idades}`);

const userRocketsearMore18 = usuarios.filter((item)=>{
   return item.idade >= 18 && item.empresa == 'Rocketseat';
})
console.log(`os usuários que trabalham na rocketseat e tem mais de 18 anos são ${userRocketsearMore18}`);
console.log(userRocketsearMore18);


const userWorkingGoogle = usuarios.find(item=>{item.empresa == 'Google'})

console.log(userWorkingGoogle != null ? `O nome do usuário que trabalha na goole é ${userWorkingGoogle.nome}`:'Não há ninguém trabalhando no google');

const userAux = usuarios.map(item=>{
    const aux =  {...item, idade: item.idade*2} ;
  
    return aux;
});

const userMore18 = userAux.filter((item)=>{
    return item.idade >= 50;
 })



console.log(userMore18);

const arr = [1, 2, 3, 4, 5];
arr.map(item=> {
 return item + 10;
});

// 3.2
// Dica: Utilize uma constante pra function
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
   };
const  mostraIdade = usuario=> {
 return usuario.idade;
}
mostraIdade(usuario);

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) =>{
 return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);

// 3.4
const promise = ()=> {
    return new Promise(function(resolve, reject) {
    return resolve();
    })
}

const empresa = {
    nomeEmpresa: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
   };

   const { nomeEmpresa,endereco:{cidade,estado}} = empresa;
   console.log(`o nome da empresa é ${nomeEmpresa}\n`,` é da cidade de ${cidade}\n`,` do estado de ${estado}`);

   function mostraInfo({nome,idade}) {
    return `${nome} tem ${idade} anos.`;
   }
   console.log(mostraInfo({ nome: 'Diego', idade: 23 }))

   //REST
   const array = [1, 2, 3, 4, 5, 6]
   const [first,...rest] = array;
   console.log(first);
   console.log(rest);

   //SPREAD
   const usuario2 = {...usuario, nome: 'Gabriel'}
   console.log(usuario2);
   const usuario3 = {...usuario, endereco:{...usuario.endereco, cidade:'Lontras'}}
   console.log(usuario3);

const username = 'Diego';
const userage = 23;
console.log(`O usuário ${username} possui ${userage} anos`);

const nomeAux = 'Diego';
const idadeAux = 23;
const usuarioAux = {
 nomeAux,
 idadeAux,
 cidade: 'Rio do Sul',
};

console.log(usuarioAux)