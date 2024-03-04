"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordController = void 0;
const errors_1 = require("@src/interface/errors");
const helpers_1 = require("@src/interface/helpers");
const buildResetPasswordController = ({ updatePassword, loadAccountByEmail, validation }) => async (httpRequest) => {
    const error = validation(httpRequest.body);
    if (error) {
        return helpers_1.badRequest(error);
    }
    const { email, accessToken, password } = httpRequest.body;
    const account = await loadAccountByEmail(email);
    if (!account) {
        return helpers_1.notFoundError('email');
    }
    if (account.forgotPasswordAccessToken !== accessToken) {
        return helpers_1.badRequest(new errors_1.InvalidAccessTokenError());
    }
    const now = new Date();
    if (now > account.forgotPasswordExpiresIn) {
        return helpers_1.badRequest(new errors_1.TokenExpiredError());
    }
    await updatePassword(account.id, password);
    return helpers_1.noContent();
};
exports.resetPasswordController = helpers_1.tryCatch(buildResetPasswordController);
//# sourceMappingURL=index.js.map