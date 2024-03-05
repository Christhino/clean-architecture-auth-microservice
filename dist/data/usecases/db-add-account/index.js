"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbAddAccount = void 0;
const dbAddAccount = ({ passwordHash, addAccountRepository }) => async ({ email, firstName, lastName, password, roles }) => {
    const hashedPassword = await passwordHash(password);
    const result = await addAccountRepository({
        email,
        firstName,
        lastName,
        password: hashedPassword,
        roles,
    });
    return result;
};
exports.dbAddAccount = dbAddAccount;
//# sourceMappingURL=index.js.map