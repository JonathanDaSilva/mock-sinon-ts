'use strict';

exports.__esModule = true;
exports.Mock = Mock;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _sinon = require("sinon");

var sinon = _interopRequireWildcard(_sinon);

function Mock(klass) {
    var mock = {};
    for (var method in klass.prototype) {
        if (typeof klass.prototype[method] === 'function' && method !== 'constructor') {
            mock[method] = sinon.stub();
        }
    }
    return mock;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9Nb2NrLnRzIl0sIm5hbWVzIjpbIk1vY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7cUJBQXVCLE9BQU87O0lBQWxCLEtBQUs7O0FBRWpCLFNBQUEsSUFBQSxDQUFxQixLQUFLLEVBQUE7QUFDdEJBLFFBQUlBLElBQUlBLEdBQU1BLEVBQUVBLENBQUFBO0FBQ2hCQSxTQUFJQSxJQUFJQSxNQUFNQSxJQUFJQSxLQUFLQSxDQUFDQSxTQUFTQSxFQUFFQTtBQUMvQkEsWUFDSUEsT0FBT0EsS0FBS0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsVUFBVUEsSUFDN0NBLE1BQU1BLEtBQUtBLGFBQ2ZBLEVBQUVBO0FBQ0VBLGdCQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxLQUFLQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFBQTtTQUM5QkE7S0FDSkE7QUFDREEsV0FBT0EsSUFBSUEsQ0FBQUE7Q0FDZEEiLCJmaWxlIjoic3JjL01vY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBzaW5vbiBmcm9tIFwic2lub25cIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1vY2soa2xhc3MpIHtcclxuICAgIHZhciBtb2NrICAgID0ge31cclxuICAgIGZvcih2YXIgbWV0aG9kIGluIGtsYXNzLnByb3RvdHlwZSkge1xyXG4gICAgICAgIGlmKFxyXG4gICAgICAgICAgICB0eXBlb2Yga2xhc3MucHJvdG90eXBlW21ldGhvZF0gPT09ICdmdW5jdGlvbicgJiZcclxuICAgICAgICAgICAgbWV0aG9kICE9PSAnY29uc3RydWN0b3InXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIG1vY2tbbWV0aG9kXSA9IHNpbm9uLnN0dWIoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBtb2NrXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
