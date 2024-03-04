"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbForgotPassword = void 0;
const dbForgotPassword = ({ generateAccessToken, updateForgotPasswordAccessTokenRepository }) => async (id) => {
    const accessToken = generateAccessToken();
    const expiresIn = new Date();
    expiresIn.setMinutes(expiresIn.getMinutes() + 5);
    await updateForgotPasswordAccessTokenRepository(id, {
        accessToken,
        expiresIn,
    });
    return {
        accessToken,
        expiresIn,
    };
};
exports.dbForgotPassword = dbForgotPassword;
//# sourceMappingURL=index.js.map