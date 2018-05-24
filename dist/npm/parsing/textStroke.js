'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTextStroke = undefined;

var _Color = require('../Color');

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parseTextStroke = exports.parseTextStroke = function parseTextStroke(textStrokeWidth, textStrokeColor) {
    var color = new _Color2.default(textStrokeColor);
    var size = parseFloat(textStrokeWidth);

    if (size <= 0) {
        return null;
    }

    return {
        color: color,
        size: size
    };
};