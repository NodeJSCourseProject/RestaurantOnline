const {Router}=require('express');

const meals=[{
    id:0,
    name:'Baked Pork',
}
];
const attach=(app)=>{
    const router= new Router();
    router.get('/api/meals', (req, res)=>{
        res.send(meals);
    })
        .post('/api/meals', (req, res)=>{
        const item=req.body;
        item.id=meals.length+1;
        meals.push(item);
        res.send(true);
    });
};

module.exports=attach;

