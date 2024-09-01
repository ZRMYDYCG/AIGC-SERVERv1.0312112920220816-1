/*
 * @Author: ZRMYDYCG
 * @Date: 2024-09
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-09
 * @Description: 
 */
module.exports = {
    // MySQL database configuration
    db: {
        database: 'aigc-dbv1.0312112920220816-1',
        userName: 'root',
        password: '123456',
        host: 'localhost'
    },
    // 微信小程序相关配置
    weixin: {
        appid: 'wx6e0ffdfac5c44210',
        secret: '8e6836d71dae5343917a5f9eade2ad5f',
        code2session: 'https://api.weixin.qq.com/sns/jscode2session',
    }
}