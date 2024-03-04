"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bcryptHashPasswordHashAdapter = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const bcryptHashPasswordHashAdapter = (salt) => async (password) => {
    const hash = await bcrypt_1.default.hash(password, salt);
    return hash;
};
exports.bcryptHashPasswordHashAdapter = bcryptHashPasswordHashAdapter;
//# sourceMappingURL=bcrypt-password-hash-adapter.js.map