"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbUpdatePassword = void 0;
const dbUpdatePassword = ({ updatePasswordRepository, passwordHash }) => async (id, password) => {
    const hashedPassword = await passwordHash(password);
    await updatePasswordRepository(id, hashedPassword);
};
exports.dbUpdatePassword = dbUpdatePassword;
//# sourceMappingURL=index.js.map