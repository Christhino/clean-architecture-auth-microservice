"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbLoadAccountById = void 0;
const dbLoadAccountById = ({ loadAccountByIdRepository }) => async (id) => {
    const account = await loadAccountByIdRepository(id);
    return account;
};
exports.dbLoadAccountById = dbLoadAccountById;
//# sourceMappingURL=index.js.map