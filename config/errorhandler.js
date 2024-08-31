/*
 * @Author: ZRMYDYCG
 * @Date: 2024-08
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-08
 * @Description: 捕获错误的中间件（全局中间件）
 */
const errorHandler = async (ctx, next) => {
    try {
        await next()
    } catch (errorData) {
        const error = errprData.message || "异常错误,请查看服务器端日志"
        const status = errprData.status || 500
        ctx.send(null, status, "服务器端异常错误", error)
    }
}

module.exports = errorHandler