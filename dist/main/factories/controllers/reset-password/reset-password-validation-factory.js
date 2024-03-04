"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeResetPasswordValidation = void 0;
const validators_1 = require("@src/infra/validators");
const validators_2 = require("@src/validation/validators");
const makeResetPasswordValidation = () => {
    const validations = [];
    const requiredFields = ['email', 'password', 'accessToken'];
    for (const field of requiredFields) {
        validations.push(validators_2.requiredFieldValidation(field));
    }
    validations.push(validators_2.emailValidation('email', validators_1.emailValidatorAdapter));
    return validators_2.validationComposite(validations);
};
exports.makeResetPasswordValidation = makeResetPasswordValidation;
//# sourceMappingURL=reset-password-validation-factory.js.map