const {Router}=require('express');

const meals=[{
    id:0,
    name:'Baked Pork',
}
];
const attach=(app)=>{
    const router= new Router();
    router
        .get('/', (req, res)=>{
        res.send(meals);
    })
        .get('/:id', (req, res)=>{
            const id=+req.params.id;
           let {
               q,
               page,
               size,
           }=req.query;
            page=+page || 1;
            size=+size || 10;
            let result=meals;

            if(q) {
                q=q.toLowerCase();
                result=result.filter((meal)=>{
                return meal.name.toLowerCase().includes(q)
                });
            }
            result=result.slice((page-1)*size, page*size);
            return res.send(result);
        })
        .post('/', (req, res)=>{
        const item=req.body;
        item.id=meals.length+1;
        meals.push(item);
        res.status(201);
        res.send(true);
    });
    app.use('/api/meals', router);
};

module.exports=attach;

