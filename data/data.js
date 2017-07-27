const MealsData=require('./meals.data');

const init =(db)=> {
    return Promise.resolve({
        restaurants: new MealsData(db),
        // users: new Data(db,User),
    });
};

module.exports={
    init,
};
