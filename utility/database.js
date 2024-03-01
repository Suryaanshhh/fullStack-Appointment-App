const {Sequelize}=require('sequelize');

const sq=new Sequelize('node-complete','root','suryansh',{ dialect:'mysql',host:"localhost"})

module.exports=sq