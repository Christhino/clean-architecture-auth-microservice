"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSignupController = void 0;
const controllers_1 = require("@src/interface/controllers");
const usecases_1 = require("@src/main/factories/usecases");
const signup_validation_factory_1 = require("./signup-validation-factory");
const makeSignupController = () => controllers_1.signupController({
    validation: signup_validation_factory_1.makeSignupValidation(),
    addAccount: usecases_1.makeDbAddAccount(),
    authentication: usecases_1.makeDbAuthentication(),
    loadAccountByEmail: usecases_1.makeDbLoadAccountByEmail(),
});
exports.makeSignupController = makeSignupController;
//# sourceMappingURL=index.js.map