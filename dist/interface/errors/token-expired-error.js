"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenExpiredError = void 0;
class TokenExpiredError extends Error {
    constructor() {
        super(`Token Expired, please generate a new one`);
        this.name = 'TokenExpiredError';
    }
}
exports.TokenExpiredError = TokenExpiredError;
//# sourceMappingURL=token-expired-error.js.map