"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidAccessTokenError = void 0;
class InvalidAccessTokenError extends Error {
    constructor() {
        super(`Invalid Access Token`);
        this.name = 'InvalidAccessTokenError';
    }
}
exports.InvalidAccessTokenError = InvalidAccessTokenError;
//# sourceMappingURL=invalid-access-token-error.js.map