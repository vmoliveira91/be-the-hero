// This variable has all functionalities of express
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

// This variable has the application
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * 'npm start' to start the back-end of the application
 */

/**
 * Métodos HTTP:
 * 
 * GET: buscar uma informação no back-end
 * POST: criar uma informação no back-end
 * PUT: alterar uma informação no back-end
 * DELETE: deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query params: parâmetros nomeados na rota após o símbolo de interrogação
  * Route params: parâmetros utilizados para identificar recursos
  * Request body: corpo da requisição, utilizado para criar ou alterar recursos
  */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() (Knex.JS)
 * npx knex init -> to create a file where the configurations to the DB is setted
 */

/**
 * ONG
 * Caso (Incident)
 * 
 * Login
 * Logout
 * Cadastro
 * Cadastrar novos casos
 * Deletar casos
 * Listar casos específicos da ONG
 * Listar todos os casos
 * Entrar em contato com a ONG
 */