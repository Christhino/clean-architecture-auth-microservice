"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSignInValidation = void 0;
const validators_1 = require("@src/infra/validators");
const validators_2 = require("@src/validation/validators");
const makeSignInValidation = () => {
    const validations = [];
    const requiredFields = ['email', 'password'];
    for (const field of requiredFields) {
        validations.push(validators_2.requiredFieldValidation(field));
    }
    validations.push(validators_2.emailValidation('email', validators_1.emailValidatorAdapter));
    return validators_2.validationComposite(validations);
};
exports.makeSignInValidation = makeSignInValidation;
//# sourceMappingURL=signin-validation-factory.js.map