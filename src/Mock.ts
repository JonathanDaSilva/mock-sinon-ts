import * as sinon from "sinon"

export function Mock(klass) {
    var mock    = {}
    var methods = Object.keys(klass.prototype)

    for(var method of methods) {
        if(typeof klass.prototype[method] === 'function') {
            mock[method] = sinon.stub()
        }
    }

    return mock
}

