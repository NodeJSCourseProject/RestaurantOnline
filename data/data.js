const MealsData = require('./meals.data');
// file za mazane
class Restaurant {

}

class Users{

}
//const ItemsData = require('./items.data');
//const CategoriesData = require('./categories.data');
//const TodosData = require('./todos.data');
const UsersData = require('./users.data');
const CategorysData = require('./categorys.data');

//module.exports = { init };
// class Data {
//     constructor(db, ModelClass){
//         this.db=db;
//         this.ModelClass=ModelClass;
//         this.collectionName=this._getCollectionName();
//         this.collection=this.db.collection(this.collectionName);      
//     };
//     //?????????
//     getAll() {
//          const filter={
//              //TODO
//          };
//          const options={

//          };
//          return this.collection.find(filter, options)
//             .toArray();
//     }

//     create(model) {
//         return this.collection.insert(model);
//     }

//     _getCollectionName() {
//         return this.ModelClass.name.toLowerCase()+'s';
//     }
// };

const init = (db) => {
    return Promise.resolve({
        meals: new MealsData(db),
        // users: new Data(db,User),
        users: new UsersData(db),
        categorys: new CategorysData(db),

    });
};

module.exports = {
    init,
};
