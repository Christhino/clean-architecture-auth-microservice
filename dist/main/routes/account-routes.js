"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapters_1 = require("@src/main/adapters");
const controllers_1 = require("@src/main/factories/controllers");
const auth_1 = require("@src/main/config/auth");
exports.default = (router) => {
    router.post('/signup', adapters_1.adaptRoute(controllers_1.makeSignupController()));
    router.post('/signin', adapters_1.adaptRoute(controllers_1.makeSignInController()));
    router.get('/me', auth_1.auth, adapters_1.adaptRoute(controllers_1.makeMeController()));
    router.patch('/forgot', adapters_1.adaptRoute(controllers_1.makeForgotPasswordController()));
    router.patch('/reset-password', adapters_1.adaptRoute(controllers_1.makeResetPasswordController()));
    router.delete('/signout', auth_1.auth, adapters_1.adaptRoute(controllers_1.makeSignoutController()));
};
//# sourceMappingURL=account-routes.js.map