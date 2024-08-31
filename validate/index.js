class Validate {
    // 校验用户是否传值
    async undefinedCheck(val, paramsName) {
        if(val === undefined) {
            throw{ msg: `${paramsName} 不能为空`, code: 400 }
        }
    }
    // 空值和字符串校验
    async nullCheck(val, tips, paramsName) {
        await this.undefinedCheck(val, paramsName) // 先校验是否传值
        if(val.trim() === '') {
            throw{ msg: tips, code: 400 }
        }
        if(typeof val !== 'string') {
            throw{ msg: `${paramsName} 必须为字符串类型`, code: 400 }
        }
    }
}

module.exports = new Validate()