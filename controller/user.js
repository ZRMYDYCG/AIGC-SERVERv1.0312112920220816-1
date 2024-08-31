/*
 * @Author: ZRMYDYCG
 * @Date: 2024-08
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-08
 * @Description: 控制器 - 用户
 */
class UserController {
    // 用户登录
    async Login(ctx) {
        const { name, age } = ctx.request.body
        console.log(name, age)
    }
}

module.exports = new UserController()