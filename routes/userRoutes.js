const express=require('express');
const Router=express.Router();

const Controller=require('../controllers/userControll');

Router.get('/get-user',Controller.getUser);

Router.post('/add-user',Controller.PostUser);

Router.delete(`/delete-user/:id`,Controller.Deleteuser);

module.exports=Router;