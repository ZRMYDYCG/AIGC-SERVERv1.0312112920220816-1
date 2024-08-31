/*
 * @Author: ZRMYDYCG
 * @Date: 2024-08
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-08
 * @Description: 捕获错误的中间件（全局中间件）
 */
const looger = require('@/loggerMiddleware')
const errorHandler = async (ctx, next) => {
    try {
        await next()
    } catch (errorData) {
        looger.error(errorData)  // 记录错误日志
        if(errorData.code) {
            const { code, msg } = errorData
            ctx.send(null, code, msg)
        } else {
            const error = errprData.message || "异常错误,请查看服务器端日志"
            const status = errprData.status || 500
            ctx.send(null, status, "服务器端异常错误", error)
        }
    }
}

module.exports = errorHandler