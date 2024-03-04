"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSignInController = void 0;
const controllers_1 = require("@src/interface/controllers");
const usecases_1 = require("@src/main/factories/usecases");
const signin_validation_factory_1 = require("./signin-validation-factory");
const makeSignInController = () => controllers_1.signinController({
    authentication: usecases_1.makeDbAuthentication(),
    validation: signin_validation_factory_1.makeSignInValidation(),
});
exports.makeSignInController = makeSignInController;
//# sourceMappingURL=index.js.map