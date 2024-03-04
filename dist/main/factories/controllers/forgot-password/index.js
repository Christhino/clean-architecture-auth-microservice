"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeForgotPasswordController = void 0;
const controllers_1 = require("@src/interface/controllers");
const forgot_password_validation_factory_1 = require("./forgot-password-validation-factory");
const usecases_1 = require("@src/main/factories/usecases");
const makeForgotPasswordController = () => controllers_1.forgotPasswordController({
    validation: forgot_password_validation_factory_1.makeForgotPasswordValidation(),
    forgotPassword: usecases_1.makeDbForgotPassword(),
    loadAccountByEmail: usecases_1.makeDbLoadAccountByEmail(),
    sendMail: usecases_1.makeSendMail(),
});
exports.makeForgotPasswordController = makeForgotPasswordController;
//# sourceMappingURL=index.js.map