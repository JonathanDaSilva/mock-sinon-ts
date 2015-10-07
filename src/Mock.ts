import * as sinon from "sinon"

export function Mock(klass) {
    var mock    = {}
    var methods = Object.keys(klass.prototype)

    for(var method of methods) {
        mock[method] = sinon.spy()
    }

    return mock
}

