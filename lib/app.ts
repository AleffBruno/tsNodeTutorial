import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './routes/crmRoutes';
import * as mongoose from 'mongoose';

class App {
    public app: express.Application;
    public routePrv : Routes = new Routes();
    public mongoUrl : string = 'mongodb://balta102030:balta102030@ds259711.mlab.com:59711/ndstr';

    constructor() {
        this.app = express.default(); //??
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    private mongoSetup(): void {
        //mongoose.Promise = global.Promise; sei la porque isso nao deu
        global.Promise = require('q').Promise; 
        require('mongoose').Promise = global.Promise;
        //achei essa solução na internet
        // sei la porque tem que falar que mongoose promise tem promise
        mongoose.connect(this.mongoUrl);
    }

    private config() : void {
        this.app.use(bodyParser.json());

        this.app.use(bodyParser.urlencoded({extended:false}));
    }
}

// let myApp = new App();
// myApp.app;
// export default myApp;
export default new App().app;
