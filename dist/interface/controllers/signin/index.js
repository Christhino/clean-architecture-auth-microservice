"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinController = void 0;
const helpers_1 = require("@src/interface/helpers");
const buildSigninController = ({ validation, authentication }) => async (httpRequest) => {
    const error = validation(httpRequest.body);
    if (error) {
        return helpers_1.badRequest(error);
    }
    const { email, password } = httpRequest.body;
    const accessToken = await authentication({ email, password });
    if (!accessToken) {
        return helpers_1.unauthorized();
    }
    return helpers_1.ok({ accessToken });
};
exports.signinController = helpers_1.tryCatch(buildSigninController);
//# sourceMappingURL=index.js.map