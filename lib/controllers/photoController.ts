import { Request, Response } from "express";
import { PhotoRepo } from "../repositories/photo-repository";
import { Photo } from "../models/Photo";

export class PhotoController {
    public async savePhoto(req: Request,res: Response) {
        let photoRepo: PhotoRepo = new PhotoRepo();
 
        console.log("Received SavePhoto ==> POST");
        console.log(req.body);
     
        let photo:Photo = new Photo();
        photo.name = req.body.name;
        photo.description = req.body.description;
        photo.filename = req.body.filename;
        photo.isPublished = true;

        await photoRepo.savePhoto(photo);
        res.send(photo);
     
        // photoRepo.savePhoto(photo).then((result: any) => {
        //     console.log("Result : " + result);
        //     res.send(result);
        // });
    }


    public async getAllPhotos(req: Request,res: Response) {
        let photoRepo: PhotoRepo = new PhotoRepo();
 
        console.log("Received GetAllPhotos ==> GET");

        let allPhotos = await photoRepo.getAllPhotos();
        res.send(allPhotos);
        
        // photoRepo.getAllPhotos().then((result: any) => {
        //     console.log("Result : " + result);
        //     res.send(result);
        // });
    }
}


// export let getAllPhotos = async (req: Request, res: Response) => {
//     let photoRepo: PhotoRepo = new PhotoRepo();
 
//     console.log("Received GetAllPhotos ==> GET");
 
//     photoRepo.getAllPhotos().then((result: any) => {
//         console.log("Result : " + result);
//         res.send(result);
//     });
 
// };
 
// export let savePhoto = async (req: Request, res: Response) => {
//     let photoRepo: PhotoRepo = new PhotoRepo();
 
//     console.log("Received SaveEmployee ==> POST");
//     console.log(req.body);
 
//     let photo:Photo = new Photo();
//     photo.name = "Me and Bears";
//     photo.description = "I am near polar bears";
//     photo.filename = "photo-with-bears.jpg";
//     photo.isPublished = true;
 
//     photoRepo.savePhoto(photo).then((result: any) => {
//         console.log("Result : " + result);
//         res.send(result);
//     });
// };