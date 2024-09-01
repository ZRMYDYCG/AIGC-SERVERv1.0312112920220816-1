/*
 * @Author: ZRMYDYCG
 * @Date: 2024-08
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-08
 * @Description: 路由管理
 */
// 引入koa-router
const Router = require('@koa/router')
const router = new Router()

// 引入控制器
const user = require('@/controller/user')
const zhipu = require('@/controller/zhipuai')

/**
 * @desc 用户相关接口
 * */ 
router.post('/login', user.Login)

/**
 * @desc 大模型相关接口
*/
router.post('/create-completions', zhipu.createCompletions)

module.exports = router
