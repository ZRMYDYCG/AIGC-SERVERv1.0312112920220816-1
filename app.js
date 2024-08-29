/*
 * @Author: ZRMYDYCG
 * @Date: 2024-08-20
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-08
 * @Description: app.js
 */
const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const bodyParser = require('koa-bodyparser')
const cors =  require('@koa/cors')
const router = require('./router')

app.use(json())
app.use(bodyParser())
app.use(cors())

app.use(router.routes()).use(router.allowedMethods())
app.listen(3030, () => {
  console.log('Server is running on port 3000 🚀')
})