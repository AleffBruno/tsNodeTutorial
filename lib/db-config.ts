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