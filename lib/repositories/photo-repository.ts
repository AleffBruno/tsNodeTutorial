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

    async deletePhoto(id:number) {
        //se eu procurar por um ID que nao existe ainda recebo resposta sucesso
        let photoToRemove = await this.findOne(id);
        if(photoToRemove) {
            await getManager().getRepository(Photo).remove(photoToRemove);
        }

    }

}