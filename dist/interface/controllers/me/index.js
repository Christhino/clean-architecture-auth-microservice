"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meController = void 0;
const helpers_1 = require("@src/interface/helpers");
const buildMeController = ({ loadAccountById }) => async (httpRequest) => {
    const account = await loadAccountById(httpRequest.accountId);
    if (!account) {
        return helpers_1.unauthorized();
    }
    return helpers_1.ok({
        id: account.id,
        firstName: account.firstName,
        lastName: account.lastName,
        email: account.email,
        roles: account.roles
    });
};
exports.meController = helpers_1.tryCatch(buildMeController);
//# sourceMappingURL=index.js.map