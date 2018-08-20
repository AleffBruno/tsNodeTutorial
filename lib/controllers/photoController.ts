import { Request, Response } from "express";
import { PhotoRepo } from "../repositories/photo-repository";
import { Photo } from "../models/Photo";

export class PhotoController {
    public async savePhoto(req: Request,res: Response) {
        let photoRepo: PhotoRepo = new PhotoRepo();
 
        console.log("Received SavePhoto ==> POST");
        console.log("req.body abaixo");
        console.log(req.body);
     
        let photo:Photo = new Photo();
        photo.name = req.body.name;
        photo.description = req.body.description;
        photo.filename = req.body.filename;
        photo.isPublished = true;

        let a = await photoRepo.savePhoto(photo);
        console.log(a);
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

    public async updatePhoto(req: Request,res: Response) {
        let photoRepo: PhotoRepo = new PhotoRepo();

        let photo_id = req.params.id;

        try{
            let photoToUpdate = await photoRepo.updatePhoto(photo_id,req.body)
            res.status(200).send({
                message:"foto atualizada",
                photo: photoToUpdate
            });
        } catch(e) {
            res.send({message:'falha no request'});
        }
        
        // let photoToUpdate = await photoRepo.findOne(photo_id);
        // if(photoToUpdate) {
        //     photoToUpdate.name = req.body.name;

        //     try{
        //         await photoRepo.savePhoto(photoToUpdate);
        //         res.status(200).send({
        //             message:"foto atualizada",
        //             photo: photoToUpdate
        //         });
        //     } catch (e) {
        //     }
        // }
        
    }

    public async delete(req: Request,res: Response) {
        let photoRepo: PhotoRepo = new PhotoRepo();

        let photo_id = req.params.id;
        try{
            await photoRepo.deletePhoto(photo_id);
            res.send({
                message: 'foto deletada'
            })
        } catch (e) {
            res.send({
                message: 'erro na request'
            })
        }
    }

    public async autoGenerateProcess(req: Request,res: Response) {
        let photoRepo: PhotoRepo = new PhotoRepo();
     
        let photo:Photo = new Photo();
        photo.name = "AUTO_GENERATED";
        photo.description = "AUTO_GENERATED";
        photo.filename = "AUTO_GENERATED";
        photo.isPublished = true;

        await photoRepo.savePhoto(photo);
        
        let allPhotos = await photoRepo.getAllPhotos();
        res.send(allPhotos);
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