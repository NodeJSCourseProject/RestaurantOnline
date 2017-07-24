// file za mazane
class Restaurant {

}

class Users{

}

class Data {
    constructor(db, ModelClass){
        this.db=db;
        this.ModelClass=ModelClass;
        this.collectionName=this._getCollectionName();
        this.collection=this.db.collection(this.collectionName);      
    };
    //?????????
    getAll() {
         const filter={
             //TODO
         };
         const options={

         };
         return this.collection.find(filter, options)
            .toArray();
    }

    create(model) {
        return this.collection.insert(model);
    }
    
    _getCollectionName() {
        return this.ModelClass.name.toLowerCase()+'s';
    }
};

const init =(db)=> {
    return Promise.resolve({
        restaurants: new Data(db,Restaurant),
        //users: new Data(db,User),
    });
};

module.exports={
    init,
};