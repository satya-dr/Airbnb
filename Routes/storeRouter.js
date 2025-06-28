
const express=require('express');
const storeRouter=express.Router();


const storeController=require('../controllers/storeController')




storeRouter.get("/",storeController.getIndex);
storeRouter.get("/home-list",storeController.getHomes);
storeRouter.get("/favourite",storeController.getFavourite);
storeRouter.get("/booking",storeController.getBookings);




module.exports=storeRouter;
