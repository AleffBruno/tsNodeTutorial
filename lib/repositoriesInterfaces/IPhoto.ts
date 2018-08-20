import { Photo } from "models/Photo";

export interface IPhoto {
    getAllPhotos() : Promise<Photo[]>;
    savePhoto(photo: Photo) : Promise<Photo>;
    findOne(id:number): Promise<Photo | undefined>;
    updatePhoto(id:number,data:any): Promise<Photo | undefined>;
    deletePhoto(id:number) : void;
}