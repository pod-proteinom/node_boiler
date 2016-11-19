'use strict';

const ExtendableError = require('./extendable-error');

class ParamsError extends ExtendableError {
    constructor(msg) {
        super(msg);
    }
}

module.exports = ParamsError;