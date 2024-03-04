"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bcryptPasswordHashCompareAdapter = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const bcryptPasswordHashCompareAdapter = async (value, hashedValue) => {
    const isValid = await bcrypt_1.default.compare(value, hashedValue);
    return isValid;
};
exports.bcryptPasswordHashCompareAdapter = bcryptPasswordHashCompareAdapter;
//# sourceMappingURL=bcrypt-password-hash-compare-adapter.js.map