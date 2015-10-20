'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _chai = require('chai');

var chai = _interopRequireWildcard(_chai);

var _srcMockJs = require("./../src/Mock.js");

var expect = chai.expect;

var Bar = (function () {
    function Bar() {
        _classCallCheck(this, Bar);
    }

    Bar.bar = function bar() {};

    Bar.prototype.foobar = function foobar() {};

    Bar.prototype.test1 = function test1() {};

    return Bar;
})();

Bar.prototype.test2 = 'foobar';
var barMethods = ['foobar', 'test1'];

var Foobar = (function (_Bar) {
    _inherits(Foobar, _Bar);

    function Foobar() {
        _classCallCheck(this, Foobar);

        _Bar.apply(this, arguments);
    }

    Foobar.prototype.test4 = function test4() {};

    return Foobar;
})(Bar);

var Foo = (function (_Foobar) {
    _inherits(Foo, _Foobar);

    function Foo() {
        _classCallCheck(this, Foo);

        _Foobar.apply(this, arguments);
    }

    Foo.not = function not() {};

    Foo.prototype.test3 = function test3() {};

    return Foo;
})(Foobar);

var fooMethods = ['foobar', 'test1', 'test3', 'test4'];
describe("Mock", function () {
    var fooMock;
    var barMock;
    beforeEach(function () {
        fooMock = _srcMockJs.Mock(Foo);
        barMock = _srcMockJs.Mock(Bar);
    });
    it("should have only the instance methods", function () {
        var barMockMethods = Object.keys(barMock);
        expect(barMockMethods).to.have.length(barMethods.length);
        expect(barMockMethods).to.have.members(barMethods);
    });
    it("should get method from extends", function () {
        var fooMockMethods = Object.keys(fooMock);
        expect(fooMockMethods).to.have.length(fooMethods.length);
        expect(fooMockMethods).to.have.members(fooMethods);
    });
    it("should put a spy on every method", function () {
        for (var method in fooMock) {
            expect(fooMock[method]).to.be.a('function');
            expect(fooMock[method]).to.contain.all.keys(['called', 'calledOnce']);
        }
        for (var method in barMock) {
            expect(barMock[method]).to.be.a('function');
            expect(barMock[method]).to.contain.all.keys(['called', 'calledOnce']);
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RzL01vY2suc3BlYy50cyJdLCJuYW1lcyI6WyJCYXIiLCJCYXIuYmFyIiwiQmFyLmZvb2JhciIsIkJhci50ZXN0MSIsIkZvb2JhciIsIkZvb2Jhci50ZXN0NCIsIkZvbyIsIkZvby5ub3QiLCJGb28udGVzdDMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O29CQUF1QixNQUFNOztJQUFqQixJQUFJOzt5QkFJSyxrQkFBa0I7O0FBRnZDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUE7O0lBSXhCLEdBQUE7YUFBQSxHQUFBOzhCQUFBLEdBQUE7OztBQUFBLE9BQUEsQ0FDa0JBLEdBQUdBLEdBQUFBLGVBQUFBLEVBQUtDOztBQUQxQixPQUFBLFdBRVdELE1BQU1BLEdBQUFBLGtCQUFBQSxFQUFLRTs7QUFGdEIsT0FBQSxXQUdXRixLQUFLQSxHQUFBQSxpQkFBQUEsRUFBS0c7O1dBSHJCLEdBQUE7OztBQU1BLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQTtBQUM5QixJQUFJLFVBQVUsR0FBRyxDQUNiLFFBQVEsRUFDUixPQUFPLENBQ1YsQ0FBQTs7SUFFRCxNQUFBO2NBQUEsTUFBQTs7YUFBQSxNQUFBOzhCQUFBLE1BQUE7Ozs7O0FBQUEsVUFBQSxXQUNXQyxLQUFLQSxHQUFBQSxpQkFBQUEsRUFBS0M7O1dBRHJCLE1BQUE7R0FBcUIsR0FBRzs7SUFJeEIsR0FBQTtjQUFBLEdBQUE7O2FBQUEsR0FBQTs4QkFBQSxHQUFBOzs7OztBQUFBLE9BQUEsQ0FDa0JDLEdBQUdBLEdBQUFBLGVBQUFBLEVBQUtDOztBQUQxQixPQUFBLFdBRVdELEtBQUtBLEdBQUFBLGlCQUFBQSxFQUFLRTs7V0FGckIsR0FBQTtHQUFrQixNQUFNOztBQUl4QixJQUFJLFVBQVUsR0FBRyxDQUNiLFFBQVEsRUFDUixPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sQ0FDVixDQUFBO0FBRUQsUUFBUSxDQUFDLE1BQU0sRUFBRSxZQUFBO0FBQ2IsUUFBSSxPQUFPLENBQUE7QUFDWCxRQUFJLE9BQU8sQ0FBQTtBQUVYLGNBQVUsQ0FBQyxZQUFBO0FBQ1AsZUFBTyxHQUFHLGdCQUFLLEdBQUcsQ0FBQyxDQUFBO0FBQ25CLGVBQU8sR0FBRyxnQkFBSyxHQUFHLENBQUMsQ0FBQTtLQUN0QixDQUFDLENBQUE7QUFFRixNQUFFLENBQUMsdUNBQXVDLEVBQUUsWUFBQTtBQUN4QyxZQUFJLGNBQWMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBRXpDLGNBQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDeEQsY0FBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0tBQ3JELENBQUMsQ0FBQTtBQUVGLE1BQUUsQ0FBQyxnQ0FBZ0MsRUFBRSxZQUFBO0FBQ2pDLFlBQUksY0FBYyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7QUFFekMsY0FBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUN4RCxjQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7S0FDckQsQ0FBQyxDQUFBO0FBRUYsTUFBRSxDQUFDLGtDQUFrQyxFQUFFLFlBQUE7QUFDbkMsYUFBSSxJQUFJLE1BQU0sSUFBSSxPQUFPLEVBQUU7QUFDdkIsa0JBQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUMzQyxrQkFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFBO1NBQ3hFO0FBRUQsYUFBSSxJQUFJLE1BQU0sSUFBSSxPQUFPLEVBQUU7QUFDdkIsa0JBQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUMzQyxrQkFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFBO1NBQ3hFO0tBQ0osQ0FBQyxDQUFBO0NBQ0wsQ0FBQyxDQUFBIiwiZmlsZSI6InRlc3RzL01vY2suc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNoYWkgIGZyb20gJ2NoYWknXHJcbmltcG9ydCAqIGFzIHNpbm9uIGZyb20gJ3Npbm9uJ1xyXG52YXIgZXhwZWN0ID0gY2hhaS5leHBlY3RcclxuXHJcbmltcG9ydCB7IE1vY2sgfSBmcm9tIFwiLi8uLi9zcmMvTW9jay50c1wiXHJcblxyXG5jbGFzcyBCYXIge1xyXG4gICAgcHVibGljIHN0YXRpYyBiYXIoKSB7fVxyXG4gICAgcHVibGljIGZvb2JhcigpIHt9XHJcbiAgICBwdWJsaWMgdGVzdDEoKSB7fVxyXG4gICAgcHVibGljIHRlc3QyOiBzdHJpbmdcclxufVxyXG5CYXIucHJvdG90eXBlLnRlc3QyID0gJ2Zvb2JhcidcclxudmFyIGJhck1ldGhvZHMgPSBbXHJcbiAgICAnZm9vYmFyJyxcclxuICAgICd0ZXN0MScsXHJcbl1cclxuXHJcbmNsYXNzIEZvb2JhciBleHRlbmRzIEJhciB7XHJcbiAgICBwdWJsaWMgdGVzdDQoKSB7fVxyXG59XHJcblxyXG5jbGFzcyBGb28gZXh0ZW5kcyBGb29iYXIge1xyXG4gICAgcHVibGljIHN0YXRpYyBub3QoKSB7fVxyXG4gICAgcHVibGljIHRlc3QzKCkge31cclxufVxyXG52YXIgZm9vTWV0aG9kcyA9IFtcclxuICAgICdmb29iYXInLFxyXG4gICAgJ3Rlc3QxJyxcclxuICAgICd0ZXN0MycsXHJcbiAgICAndGVzdDQnLFxyXG5dXHJcblxyXG5kZXNjcmliZShcIk1vY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgZm9vTW9ja1xyXG4gICAgdmFyIGJhck1vY2tcclxuXHJcbiAgICBiZWZvcmVFYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGZvb01vY2sgPSBNb2NrKEZvbylcclxuICAgICAgICBiYXJNb2NrID0gTW9jayhCYXIpXHJcbiAgICB9KVxyXG5cclxuICAgIGl0KFwic2hvdWxkIGhhdmUgb25seSB0aGUgaW5zdGFuY2UgbWV0aG9kc1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgYmFyTW9ja01ldGhvZHMgPSBPYmplY3Qua2V5cyhiYXJNb2NrKVxyXG5cclxuICAgICAgICBleHBlY3QoYmFyTW9ja01ldGhvZHMpLnRvLmhhdmUubGVuZ3RoKGJhck1ldGhvZHMubGVuZ3RoKVxyXG4gICAgICAgIGV4cGVjdChiYXJNb2NrTWV0aG9kcykudG8uaGF2ZS5tZW1iZXJzKGJhck1ldGhvZHMpXHJcbiAgICB9KVxyXG5cclxuICAgIGl0KFwic2hvdWxkIGdldCBtZXRob2QgZnJvbSBleHRlbmRzXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBmb29Nb2NrTWV0aG9kcyA9IE9iamVjdC5rZXlzKGZvb01vY2spXHJcblxyXG4gICAgICAgIGV4cGVjdChmb29Nb2NrTWV0aG9kcykudG8uaGF2ZS5sZW5ndGgoZm9vTWV0aG9kcy5sZW5ndGgpXHJcbiAgICAgICAgZXhwZWN0KGZvb01vY2tNZXRob2RzKS50by5oYXZlLm1lbWJlcnMoZm9vTWV0aG9kcylcclxuICAgIH0pXHJcblxyXG4gICAgaXQoXCJzaG91bGQgcHV0IGEgc3B5IG9uIGV2ZXJ5IG1ldGhvZFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBmb3IodmFyIG1ldGhvZCBpbiBmb29Nb2NrKSB7XHJcbiAgICAgICAgICAgIGV4cGVjdChmb29Nb2NrW21ldGhvZF0pLnRvLmJlLmEoJ2Z1bmN0aW9uJylcclxuICAgICAgICAgICAgZXhwZWN0KGZvb01vY2tbbWV0aG9kXSkudG8uY29udGFpbi5hbGwua2V5cyhbJ2NhbGxlZCcsICdjYWxsZWRPbmNlJ10pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IodmFyIG1ldGhvZCBpbiBiYXJNb2NrKSB7XHJcbiAgICAgICAgICAgIGV4cGVjdChiYXJNb2NrW21ldGhvZF0pLnRvLmJlLmEoJ2Z1bmN0aW9uJylcclxuICAgICAgICAgICAgZXhwZWN0KGJhck1vY2tbbWV0aG9kXSkudG8uY29udGFpbi5hbGwua2V5cyhbJ2NhbGxlZCcsICdjYWxsZWRPbmNlJ10pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
