import * as sinon from "sinon"

export function Mock(klass) {
    var mock    = {}
    for(var method in klass.prototype) {
        if(
            typeof klass.prototype[method] === 'function' &&
            method !== 'constructor'
        ) {
            mock[method] = sinon.stub()
        }
    }
    return mock
}

