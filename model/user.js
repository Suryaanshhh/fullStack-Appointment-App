const {Sequelize} = require('sequelize');

const sq = require('../utility/database');

const User = sq.define('user', {
id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true,
    allowNull:false
    
},
name:{
    type:Sequelize.STRING,
},
email:{
    type:Sequelize.STRING,
    unique:true
},
number:{
    type:Sequelize.STRING,
    unique:true
}

})

module.exports=User;