"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeResetPasswordController = void 0;
const controllers_1 = require("@src/interface/controllers");
const reset_password_validation_factory_1 = require("./reset-password-validation-factory");
const usecases_1 = require("@src/main/factories/usecases");
const makeResetPasswordController = () => controllers_1.resetPasswordController({
    validation: reset_password_validation_factory_1.makeResetPasswordValidation(),
    loadAccountByEmail: usecases_1.makeDbLoadAccountByEmail(),
    updatePassword: usecases_1.makeDbUpdatePassword(),
});
exports.makeResetPasswordController = makeResetPasswordController;
//# sourceMappingURL=index.js.map