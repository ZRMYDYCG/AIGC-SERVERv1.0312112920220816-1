/*
 * @Author: ZRMYDYCG
 * @Date: 2024-08
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-08
 * @Description: 路由管理
 */
const Router = require('@koa/router')
const router = new Router()
const user = require('./controller/user')

/**
 * @desc 用户相关接口
 * */ 
router.post('/wxlogin', user.wxLogin)

module.exports = router
