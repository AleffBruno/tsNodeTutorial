
//OBSOLETO, as configurações sao buscadas automaticamente no arquivo 'ormconfig.json'

import "reflect-metadata";
import {ConnectionOptions} from "typeorm";
 
 export let dbOptions: ConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "tsnodetutorial",
    entities: [
        __dirname + "/models/*.ts"
        //"lib/models/*.ts" atenção as models estao em .TS ou .JS
    ],
    synchronize: true,
    logging: false
    // type: "mysql",
    // host: "localhost",
    // port: 3306,
    // username: "root",
    // password: "",
    // database: "hivetestdb",
    // entities: [
    //      "./entities/*.js"
    // ],
    // synchronize: true,
}