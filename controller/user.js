/*
 * @Author: ZRMYDYCG
 * @Date: 2024-08
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-09
 * @Description: 控制器（只做参数接收然后返回结果） - 用户
 */
const Validate = require('@/validate/index')
const User = require('@/model/user')
const UserService = require('@/service/user')
class UserController {
    // 用户登录
    async Login(ctx) {
        const { nickName, avatar, code } = ctx.request.body
        await Validate.nullCheck(nickName, '请输入昵称', 'nickName')
        await Validate.nullCheck(avatar, '请上传头像', 'avatar')
        await Validate.nullCheck(code, '缺少code', 'code')
        // 获取 oppenid
        const openid = await new UserService().getOpenid(code)
        // 查询数据库是否已经存在该用户
        const userInfo = await User.findOne({ where: { openid } })
        if(!userInfo) {
            await User.create({ nickName, avatar, openid })
        }
    }
}

module.exports = new UserController()