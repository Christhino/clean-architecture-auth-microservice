"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSignupValidation = void 0;
const validators_1 = require("@src/infra/validators");
const validators_2 = require("@src/validation/validators");
const makeSignupValidation = () => {
    const validations = [];
    const requiredFields = [
        'firstName',
        'lastName',
        'email',
        'password',
        'roles',
        'passwordConfirmation',
    ];
    for (const field of requiredFields) {
        validations.push(validators_2.requiredFieldValidation(field));
    }
    validations.push(validators_2.compareFieldValidation('password', 'passwordConfirmation'));
    validations.push(validators_2.emailValidation('email', validators_1.emailValidatorAdapter));
    return validators_2.validationComposite(validations);
};
exports.makeSignupValidation = makeSignupValidation;
//# sourceMappingURL=signup-validation-factory.js.map