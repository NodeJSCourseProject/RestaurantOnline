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
        db.collection();        
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
        //return this.ModelClass.name.toLowerCase()+'s';
        return this.ModelClass.
    }
};

const init =(db)=> {
    return Promise.resolve({
        restaurants: new Data(Restaurant),
        users: new Data(User),
    });
};

module.exports={
    init,
};