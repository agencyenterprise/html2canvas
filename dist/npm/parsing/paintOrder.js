'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var PAINT_LAYER = exports.PAINT_LAYER = {
    STROKE: 0,
    FILL: 1,
    MARKERS: 2
};

var parsePaintOrder = exports.parsePaintOrder = function parsePaintOrder(paintOrder) {
    var order = paintOrder.split(' ');

    if (order[0] === 'normal') {
        return [PAINT_LAYER.FILL, PAINT_LAYER.STROKE, PAINT_LAYER.MARKERS];
    }

    var layers = [];

    order.forEach(function (layer) {
        switch (layer) {
            case 'stroke':
                layers.push(PAINT_LAYER.STROKE);
                break;
            case 'fill':
                layers.push(PAINT_LAYER.FILL);
                break;
            case 'markers':
                layers.push(PAINT_LAYER.MARKERS);
                break;
        }
    });

    return layers;
};