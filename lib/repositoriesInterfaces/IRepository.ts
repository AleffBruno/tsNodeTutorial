export interface IRepository<T>
{
    //GetById(id: number) : T;
    //Load(id: number) : T;
    //Save(entity: T) : T;
    //Delete(entity: T) : void;
    
    // getAllPhotos() : T[];
    // savePhoto(entity: T) : T;
    // deletePhoto(id: number) : void;


    GetAll() : Promise<T[]>;
    GetOne(id:number) : Promise<T | undefined>;
    Save(arg: T): Promise<T>;
    Delete(id:number): void;
}