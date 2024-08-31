/*
 * @Author: ZRMYDYCG
 * @Date: 2024-08-20
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-08
 * @Description: App入口文件
 */
// 引入koa
const Koa = require('koa')
const app = new Koa()

// 设置路径别名
const { addAliases } = require('module-alias')
addAliases({ '@': __dirname })

// 接口
const router = require("@/router")

// 跨域中间件
const cors =  require('@koa/cors')
// http响应数据转换为json格式中间件
const json = require('koa-json')
// 解析http请求消息体中间件
const bodyParser = require('koa-bodyparser')
// 统一接口响应数据格式:中间件
const responseHandler = require("@/config/result")

// 注册中间件
app.use(json())
app.use(bodyParser())
app.use(cors())

// 注册路由

app.use(router.routes()).use(router.allowedMethods())

// 启动服务
app.listen(3000, () => {
  console.log('Server is running on port 3000 🚀')
})