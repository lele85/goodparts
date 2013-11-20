exports.done = false;
exports.isInnerADone = function(){
    return a.done;
};
var a = require('./a');
expect(a.done).toBe(false);
exports.done = true;