"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailValidation = void 0;
const errors_1 = require("@src/interface/errors");
const emailValidation = (fieldName, emailValidator) => (input) => {
    const isValid = emailValidator(input[fieldName]);
    if (!isValid) {
        return new errors_1.InvalidParamError(fieldName);
    }
    return null;
};
exports.emailValidation = emailValidation;
//# sourceMappingURL=email-validation.js.map