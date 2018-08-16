import app from './app';
const port = 3000;

// import "reflect-metadata";
// import {createConnection} from "typeorm";
// import {Photo} from "./models/Photo";
// import {PhotoMetadata} from "./models/PhotoMetadata";

// createConnection({
//     type: "mysql",
//     host: "localhost",
//     port: 3306,
//     username: "root",
//     password: "",
//     database: "tsnodetutorial",
//     entities: [
//         __dirname + "/models/*.ts"
//     ],
//     synchronize: true,
//     logging: false
// }).then(async (connection:any) => {

//     // create photo object
//     let photo = new Photo();
//     photo.name = "2Me and Bears";
//     photo.description = "2I am near polar bears";
//     photo.filename = "2photo-with-bears.jpg";
//     photo.isPublished = true;

//     // create photo metadata object
//     let metadata = new PhotoMetadata();
//     metadata.height = 640;
//     metadata.width = 480;
//     metadata.compressed = true;
//     metadata.comment = "2cybershoot";
//     metadata.orientation = "2portait";
    
//     photo.metadata = metadata; // this way we connect them

//     // get repository
//     let photoRepository = connection.getRepository(Photo);

//     // saving a photo also save the metadata
//     //await photoRepository.save(photo);
    
// }).catch((error:any) => console.log(error));



app.listen(port,function(){
    console.log(`l on ${port}`);
})