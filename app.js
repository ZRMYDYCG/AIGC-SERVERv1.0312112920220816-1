const Koa = require('koa');
const app = new Koa()
const json = require('koa-json')
const bodyParser = require('koa-bodyparser')
const cors =  require('@koa/cors')
const Router = require('@koa/router')
const router = new Router()

app.use(json())
app.use(bodyParser())
app.use(cors())
app.use(router.routes()).use(router.allowedMethods())

app.listen(3030, () => {
  console.log('Server is running on port 3000 🚀')
})