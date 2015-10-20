import * as chai  from 'chai'
import * as sinon from 'sinon'
var expect = chai.expect

import { Mock } from "./../src/Mock.ts"

class Bar {
    public test: string
    public foobar() {}
    public test1() {}
    public test2: string

    public constructor() {
        this.test = 'test'
    }
}
Bar.prototype.test2 = 'foobar'
var barMethods = [
    'foobar',
    'test1',
]

class Foo {
    public static bar() {}
    public static not() {}
    public test: string = 'test'
    public bar:  string = 'bar'
    public foobar() {}
    public test1() {}
    public test2() {}
    public test3() {}
}

var fooMethods = [
    'foobar',
    'test1',
    'test2',
    'test3',
]

describe("Mock", function() {
    var fooMock
    var barMock

    beforeEach(function() {
        fooMock = Mock(Foo)
        barMock = Mock(Bar)
    })

    it("should have only the instance methods", function() {
        var fooMockMethods = Object.keys(fooMock)
        var barMockMethods = Object.keys(barMock)

        expect(fooMockMethods).to.have.length(fooMethods.length)
        expect(fooMockMethods).to.have.members(fooMethods)

        expect(barMockMethods).to.have.length(barMethods.length)
        expect(barMockMethods).to.have.members(barMethods)
    })

    it("should put a spy on every method", function() {
        for(var method of fooMethods) {
            expect(fooMock[method]).to.be.a('function')
            expect(fooMock[method]).to.contain.all.keys(['called', 'calledOnce'])
        }

        for(var method of barMethods) {
            expect(barMock[method]).to.be.a('function')
            expect(barMock[method]).to.contain.all.keys(['called', 'calledOnce'])
        }
    })
})

