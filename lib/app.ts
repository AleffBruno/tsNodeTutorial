import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './routes/crmRoutes';

class App {
    public app: express.Application;
    public routePrv : Routes = new Routes();

    constructor() {
        this.app = express.default(); //??
        this.config();
        this.routePrv.routes(this.app);
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
