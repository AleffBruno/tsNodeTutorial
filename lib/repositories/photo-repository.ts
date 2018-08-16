import { Photo } from "../models/Photo"
import { getManager } from "typeorm";

export class PhotoRepo {

    async getAllPhotos() {
        // get Employee repository and find all employees
        return await getManager().getRepository(Photo).find();
    }

    async savePhoto(photo: Photo) { 
          return await getManager().getRepository(Photo).save(photo);
    }

    async findOne(id:number) {
        return await getManager().getRepository(Photo).findOne(id);
    }

    async updatePhoto(id:number,data:any) {
        let photoToUpdate = await this.findOne(id);
        if(photoToUpdate) {
            photoToUpdate.name = data.name;
            await this.savePhoto(photoToUpdate);
        }
        return photoToUpdate;
    }

}