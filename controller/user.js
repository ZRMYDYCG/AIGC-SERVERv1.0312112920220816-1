/*
 * @Author: ZRMYDYCG
 * @Date: 2024-08
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-08
 * @Description: 控制器 - 用户
 */
const Validate = require('@/validate/index')
class UserController {
    // 用户登录
    async Login(ctx) {
        const { name, age } = ctx.request.body
        await Validate.nullCheck(name, '请填写姓名', "name")
    }
}

module.exports = new UserController()