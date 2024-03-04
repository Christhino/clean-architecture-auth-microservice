"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgotPasswordController = void 0;
const helpers_1 = require("@src/interface/helpers");
const buildForgotPasswordController = ({ forgotPassword, loadAccountByEmail, sendMail, validation }) => async (httpRequest) => {
    const error = validation(httpRequest.body);
    if (error) {
        return helpers_1.badRequest(error);
    }
    const { email } = httpRequest.body;
    const account = await loadAccountByEmail(email);
    if (!account) {
        return helpers_1.notFoundError('email');
    }
    const { accessToken } = await forgotPassword(account.id);
    await sendMail({
        to: email,
        subject: 'Forgot password ✔',
        text: `Have you forgotten your password? no problem, use the token to change ${accessToken}`,
    });
    return helpers_1.noContent();
};
exports.forgotPasswordController = helpers_1.tryCatch(buildForgotPasswordController);
//# sourceMappingURL=index.js.map