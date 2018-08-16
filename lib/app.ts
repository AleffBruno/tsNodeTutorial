import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './routes/crmRoutes';
import "reflect-metadata";
import {createConnection} from "typeorm";
import * as appConfig from "./db-config";


class App {
    public app: express.Application;
    public routePrv : Routes = new Routes();

    constructor() {
        this.app = express.default(); //??
        this.config();
        this.routePrv.routes(this.app);
        this.initializeConnectionUsingTypeorm();
    }

    private config() : void {
        this.app.use(bodyParser.json());

        this.app.use(bodyParser.urlencoded({extended:false}));
    }

    private async initializeConnectionUsingTypeorm() {
        await createConnection(appConfig.dbOptions);

        // createConnection(appConfig.dbOptions).then(async connection => {
        //     console.log("Connected to DB");
        
        // }).catch(error => console.log("TypeORM connection error: ", error));
    }
}

// let myApp = new App();
// myApp.app;
// export default myApp;
export default new App().app;
