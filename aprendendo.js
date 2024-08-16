const mongoose = require('mongoose'); // IMPORTANDO O MONGOOSE PARA TRABALHAR COM MONGODB

// CONFIGURANDO O MONGOOSE
mongoose.Promise = global.Promise // DEFININDO O USO DE PROMISES NATIVAS DO NODE.JS PARA O MONGOOSE
mongoose.connect('mongodb://localhost/bancoteste') // CONECTANDO AO BANCO DE DADOS MONGODB CHAMADO 'bancoteste'
    .then(() => { // SE A CONEXÃO FOR BEM-SUCEDIDA
        console.log('Banco conectado'); // EXIBE UMA MENSAGEM NO CONSOLE INFORMANDO QUE O BANCO FOI CONECTADO
    })
    .catch((err) => { // SE HOUVER ALGUM ERRO NA CONEXÃO
        console.log('Houve um erro ao iniciar a conexão->', err); // EXIBE UMA MENSAGEM DE ERRO NO CONSOLE
    });

// CRIANDO UM MODEL (EQUIVALENTE A UMA TABELA EM SQL)
const UsuariosSchema = mongoose.Schema({ // DEFININDO UM ESQUEMA PARA A COLEÇÃO 'usuarios'
    nome: { // DEFININDO O CAMPO 'nome'
        type: String, // O TIPO DO CAMPO 'nome' É STRING
        require: true // O CAMPO 'nome' É OBRIGATÓRIO
    },
    sobrenome: { // DEFININDO O CAMPO 'sobrenome'
        type: String // O TIPO DO CAMPO 'sobrenome' É STRING
    },
    idade: { // DEFININDO O CAMPO 'idade'
        type: Number, // O TIPO DO CAMPO 'idade' É NÚMERO
        requeire: true // O CAMPO 'idade' É OBRIGATÓRIO (OBS.: ESCRITO INCORRETAMENTE COMO 'requeire' EM VEZ DE 'require')
    }
});

// CRIANDO A COLEÇÃO BASEADA NO ESQUEMA DEFINIDO
mongoose.model('usuarios', UsuariosSchema) // CRIA UMA COLEÇÃO 'usuarios' BASEADA NO ESQUEMA 'UsuariosSchema'

// CRIANDO UM NOVO DOCUMENTO (USUÁRIO) NA COLEÇÃO 'usuarios'
const rodrigo = mongoose.model('usuarios') // REFERENCIANDO A COLEÇÃO 'usuarios' PARA INSERIR DADOS

new rodrigo({ // CRIANDO UM NOVO DOCUMENTO NA COLEÇÃO 'usuarios'
    nome: 'Rodrigo', // DEFININDO O VALOR DO CAMPO 'nome' COMO 'Rodrigo'
    sobrenome: 'Henrique', // DEFININDO O VALOR DO CAMPO 'sobrenome' COMO 'Henrique'
    idade: 17 // DEFININDO O VALOR DO CAMPO 'idade' COMO 17
}).save() // SALVANDO O DOCUMENTO NO BANCO DE DADOS
    .then(() => { // SE A INSERÇÃO FOR BEM-SUCEDIDA
        console.log('Usuario cadastrado'); // EXIBE UMA MENSAGEM NO CONSOLE INFORMANDO QUE O USUÁRIO FOI CADASTRADO
    })
    .catch(err => { // SE HOUVER ALGUM ERRO NA INSERÇÃO
        console.log('Deu ruim: ', err); // EXIBE UMA MENSAGEM DE ERRO NO CONSOLE
    });
