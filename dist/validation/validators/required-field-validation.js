"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requiredFieldValidation = void 0;
const errors_1 = require("@src/interface/errors");
const requiredFieldValidation = (fieldName) => (input) => {
    if (!input[fieldName]) {
        return new errors_1.MissingParamError(fieldName);
    }
    return null;
};
exports.requiredFieldValidation = requiredFieldValidation;
//# sourceMappingURL=required-field-validation.js.map