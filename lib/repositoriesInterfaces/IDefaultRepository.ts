

interface IDefaultRepository<T> {
    gAll(id: any) : Promise<T[]>;
    s(entity: T) : T;
    d(id: any) : void;
}