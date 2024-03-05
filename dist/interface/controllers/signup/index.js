"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupController = void 0;
const errors_1 = require("@src/interface/errors");
const helpers_1 = require("@src/interface/helpers");
const buildSignupController = ({ validation, addAccount, authentication, loadAccountByEmail }) => async (httpRequest) => {
    const error = validation(httpRequest.body);
    if (error) {
        return helpers_1.badRequest(error);
    }
    const { firstName, lastName, email, password, roles } = httpRequest.body;
    const account = await loadAccountByEmail(email);
    if (account) {
        return helpers_1.badRequest(new errors_1.ContactInUseError());
    }
    await addAccount({ firstName, lastName, email, password, roles });
    const accessToken = await authentication({ email, password });
    return helpers_1.created({ accessToken });
};
exports.signupController = helpers_1.tryCatch(buildSignupController);
//# sourceMappingURL=index.js.map