"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbAddAccount = void 0;
const dbAddAccount = ({ passwordHash, addAccountRepository }) => async ({ email, firstName, lastName, password }) => {
    const hashedPassword = await passwordHash(password);
    const result = await addAccountRepository({
        email,
        firstName,
        lastName,
        password: hashedPassword,
    });
    return result;
};
exports.dbAddAccount = dbAddAccount;
//# sourceMappingURL=index.js.map