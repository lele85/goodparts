exports.done = false;
exports.isInnerBDone = function(){
    return b.done;
};
var b = require('./b');
expect(b.done).toBe(true);
exports.done = true;