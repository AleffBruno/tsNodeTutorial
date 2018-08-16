import { Photo } from "../models/Photo"
import { getManager } from "typeorm";

export class PhotoRepo {

    getAllPhotos() {
        // get Employee repository and find all employees
        return getManager().getRepository(Photo).find();
    }

    savePhoto(photo: Photo) { 
          return getManager().getRepository(Photo).save(photo);
    }

}