"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbLoadAccountByEmail = void 0;
const dbLoadAccountByEmail = ({ loadAccountByEmailRepository }) => async (email) => {
    const account = await loadAccountByEmailRepository(email);
    return account;
};
exports.dbLoadAccountByEmail = dbLoadAccountByEmail;
//# sourceMappingURL=index.js.map