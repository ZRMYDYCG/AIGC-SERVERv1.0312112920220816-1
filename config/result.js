/*
 * @Author: ZRMYDYCG
 * @Date: 2024-08
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-08
 * @Description:  统一接口响应数据格式（全局中间件）
 */
const responseHandler = async (ctx, next) => {
    ctx.send = (data = null, code = 200, msg = 'SUCCESS', error = null, serviceCode = 200) => {
        ctx.status = code
        ctx.body = {
            data, //返给前端的数据
            msg, //提示
            error, //错误说明
            serviceCode, //业务错误码
        }
    }
    await next()
}

module.exports = responseHandler