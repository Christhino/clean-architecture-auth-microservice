"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbSignout = void 0;
const dbSignout = ({ signoutRepository }) => async (accountId) => {
    await signoutRepository(accountId);
};
exports.dbSignout = dbSignout;
//# sourceMappingURL=index.js.map