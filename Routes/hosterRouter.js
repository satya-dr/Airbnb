const express=require('express');
const hosterRouter=express.Router();



const homesColtrollers=require('../controllers/hostController')



hosterRouter.get("/add-home",homesColtrollers.getAddHome);




hosterRouter.post("/add-home",homesColtrollers.postAddHome);

module.exports=hosterRouter;