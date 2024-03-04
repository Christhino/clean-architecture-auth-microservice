"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbLoadAccountByToken = void 0;
const dbLoadAccountByToken = ({ loadAccountByTokenRepository, decrypt }) => async (accessToken) => {
    const decryptedToken = await decrypt(accessToken);
    if (decryptedToken) {
        const account = await loadAccountByTokenRepository(accessToken);
        return account;
    }
    return null;
};
exports.dbLoadAccountByToken = dbLoadAccountByToken;
//# sourceMappingURL=index.js.map