"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signoutController = void 0;
const helpers_1 = require("@src/interface/helpers");
const buildSignoutController = ({ signout }) => async (httpRequest) => {
    await signout(httpRequest.accountId);
    return helpers_1.noContent();
};
exports.signoutController = helpers_1.tryCatch(buildSignoutController);
//# sourceMappingURL=index.js.map