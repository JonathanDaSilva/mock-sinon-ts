import * as chai  from 'chai'
import * as sinon from 'sinon'
var expect = chai.expect

import { Mock } from "./../src/Mock.ts"

class Bar {
    public static bar() {}
    public foobar() {}
    public test1() {}
    public test2: string
}
Bar.prototype.test2 = 'foobar'
var barMethods = [
    'foobar',
    'test1',
]

class Foobar extends Bar {
    public test4() {}
}

class Foo extends Foobar {
    public static not() {}
    public test3() {}
}
var fooMethods = [
    'foobar',
    'test1',
    'test3',
    'test4',
]

describe("Mock", function() {
    var fooMock
    var barMock

    beforeEach(function() {
        fooMock = Mock(Foo)
        barMock = Mock(Bar)
    })

    it("should have only the instance methods", function() {
        var barMockMethods = Object.keys(barMock)

        expect(barMockMethods).to.have.length(barMethods.length)
        expect(barMockMethods).to.have.members(barMethods)
    })

    it("should get method from extends", function() {
        var fooMockMethods = Object.keys(fooMock)

        expect(fooMockMethods).to.have.length(fooMethods.length)
        expect(fooMockMethods).to.have.members(fooMethods)
    })

    it("should put a spy on every method", function() {
        for(var method in fooMock) {
            expect(fooMock[method]).to.be.a('function')
            expect(fooMock[method]).to.contain.all.keys(['called', 'calledOnce'])
        }

        for(var method in barMock) {
            expect(barMock[method]).to.be.a('function')
            expect(barMock[method]).to.contain.all.keys(['called', 'calledOnce'])
        }
    })
})

