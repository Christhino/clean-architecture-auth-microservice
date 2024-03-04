"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const helpers_1 = require("@src/interface/helpers");
const buildAuthMiddleware = ({ loadAccountByToken }) => async (httpRequest) => {
    var _a, _b;
    const header = ((_a = httpRequest.headers) === null || _a === void 0 ? void 0 : _a['x-access-token']) ||
        ((_b = httpRequest.headers) === null || _b === void 0 ? void 0 : _b.authorization);
    if (header) {
        const accessToken = header.replace(/^Bearer\s+/, '');
        const account = await loadAccountByToken(accessToken);
        if (account) {
            return helpers_1.ok({ accountId: account.id });
        }
    }
    return helpers_1.unauthorized();
};
exports.authMiddleware = helpers_1.tryCatch(buildAuthMiddleware);
//# sourceMappingURL=index.js.map