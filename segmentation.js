(function() {
    'use strict';
    function segmentation(segmentSize) {
        var array = this,
            res = [],
            i = 0,
            len = array.length + (array.length % segmentSize ? 1 : 0);

        while (i < len) {
            res.push(array.slice(i, i + segmentSize));
            i += segmentSize;
        }

        return res;
    }

    Array.prototype.segmentation = segmentation;

}).call(this);
