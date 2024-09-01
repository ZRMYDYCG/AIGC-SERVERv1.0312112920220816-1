/*
 * @Author: ZRMYDYCG
 * @Date: 2024-08
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-09
 * @Description: 控制器 - 用户
 */
const Validate = require('@/validate/index')
const User = require('@/model/user')
class UserController {
    // 用户登录
    async Login(ctx) {
        const { name, age } = ctx.request.body
        await Validate.nullCheck(name, '请填写姓名', "name")
        await Validate.nullCheck(age, '请填写年龄', "age")
        // await User.create({ nickName: '三勺', avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif', openid: 'sffsdfsd' })
        // const res = await User.findOne({ where: { openid: "sffsdfsd" } })
        // console.log(res)
    }
}

module.exports = new UserController()