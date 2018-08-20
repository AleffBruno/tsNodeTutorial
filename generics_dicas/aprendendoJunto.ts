//REFERENCIA : https://www.youtube.com/watch?v=51AMHXpRn0Y

class Person3 {
    private _name:string;

    constructor(name:string){
        this._name = name;
    }
}

interface NumberId {
    id: number;
}

interface Repository<T, ID extends NumberId> {
    findById(id:ID):T;

    save(entity:T):T;
}

class Person3Repository implements Repository<Person3, NumberId> {
    findById(numberId: NumberId) : Person3 {
        console.log("procurando pelo id: "+ numberId.id);
        return new Person3("Nami");
    }
    save(entity: Person3): Person3 {
        return new Person3("Franky");
    }
}

let myObj : NumberId = {
    id:2
}

let persoRepository : Person3Repository = new Person3Repository();
console.log(persoRepository.findById({id:1}));
console.log(persoRepository.save(new Person3("jose")));