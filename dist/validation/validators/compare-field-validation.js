"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareFieldValidation = void 0;
const errors_1 = require("@src/interface/errors");
const compareFieldValidation = (fieldName, fieldToCompare) => (input) => {
    if (input[fieldName] !== input[fieldToCompare]) {
        return new errors_1.InvalidParamError(fieldToCompare);
    }
    return null;
};
exports.compareFieldValidation = compareFieldValidation;
//# sourceMappingURL=compare-field-validation.js.map