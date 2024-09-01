const { Sequelize } = require('sequelize')

const { database, userName, password, host } = require('./default').db


const db = new Sequelize(database, userName, password, {
    host,
    dialect: 'mysql',
    logging: false,
    define: {
        freezeTableName: true, // 禁止给新建的表自动添加复数
    },
    sync: {
        force: false // 不会强制删除现有表并且重新创建
    }
})

db.sync() // 如果不存在, 就创建表（如果存在，就不执行任何操作）

module.exports = db