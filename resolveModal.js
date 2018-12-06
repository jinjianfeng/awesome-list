// 弹层点击关闭时resolve
export class modal {
    constructor() {
        this._result = new Promise((resolve, reject) => {
            this._resolve = resolve
            this._reject = reject
        })
    }

    get result() {
        return this._result
    }

    clicked(ok) {
        if (ok) {
            this._resolve()
        } else {
            this._reject()
        }
    }
}