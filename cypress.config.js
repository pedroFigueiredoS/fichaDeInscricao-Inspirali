const { defineConfig } = require("cypress");
require('dotenv').config(); // ← Carrega as variáveis do .env
const { Client } = require('pg');

module.exports = defineConfig({
  projectId: "1at8xu",
  e2e: {
    pageLoadTimeout: 120000,
    baseUrl: "https://fichainscricao-dev.inspirali.com", // base genérica
    env: {
      dev: "https://fichainscricao-dev.inspirali.com",
      hml: "https://fichainscricao-hml.inspirali.com",
      prod: "https://fichainscricao.inspirali.com"
    },
    setupNodeEvents(on, config) {
      const ambiente = process.env.AMBIENTE || "prod";
      config.baseUrl = config.env[ambiente];

     // Conexões do banco por ambiente
      const conexoesDB = {
        dev: {
          host: process.env.DB_HOST_DEV,
          port: 5432,
          database: process.env.DB_DATABASE_DEV,
          user: process.env.DB_USER_DEV,
          password: process.env.DB_PASSWORD_DEV,
          schema: process.env.DB_SCHEMA_DEV 
        },
        hml: {
          host: "",
          port: 5432,
          database: process.env.DB_USER_HML,
          user: process.env.DB_USER_DEV,
          password: process.env.DB_PASSWORD_HML,
          schema: process.env.DB_SCHEMA_HML
        },
        prod: {
          host: "",
          port: 5432,
          database: "",
          user: process.env.DB_USER_DEV,
          password: process.env.DB_PASSWORD_PROD,
          schema: ""
        }
      };

      const dbConfig = conexoesDB[ambiente];

      on('task', {
        queryDB({ query, values }) {
          const client = new Client({
            host: dbConfig.host,
            port: dbConfig.port,
            database: dbConfig.database,
            user: dbConfig.user,
            password: dbConfig.password
          });

          return client.connect()
            .then(() => client.query(`SET search_path TO ${dbConfig.schema};`))
            .then(() => client.query(query, values))
            .then(res => {
              client.end();
              return res.rows;
            })
            .catch(err => {
              client.end();
              throw err;
            });
        }
      });


      // Definir os tempos de espera globais
      config.defaultCommandTimeout = 20000;  // 10 segundos para comandos
      config.requestTimeout = 30000;          // 5 segundos para requisições de API
      config.responseTimeout = 25000;        // 15 segundos para espera de resposta de API

      return config;
    },
    experimentalRunAllSpecs: true,
  }
});
