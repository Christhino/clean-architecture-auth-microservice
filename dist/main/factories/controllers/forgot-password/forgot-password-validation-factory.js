"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeForgotPasswordValidation = void 0;
const email_validator_adapter_1 = require("@src/infra/validators/email-validator-adapter");
const validators_1 = require("@src/validation/validators");
const makeForgotPasswordValidation = () => {
    const validations = [
        validators_1.requiredFieldValidation('email'),
        validators_1.emailValidation('email', email_validator_adapter_1.emailValidatorAdapter),
    ];
    return validators_1.validationComposite(validations);
};
exports.makeForgotPasswordValidation = makeForgotPasswordValidation;
//# sourceMappingURL=forgot-password-validation-factory.js.map