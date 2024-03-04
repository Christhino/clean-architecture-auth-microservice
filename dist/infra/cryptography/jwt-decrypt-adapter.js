"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtDecryptAdapter = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtDecryptAdapter = (secret) => async (token) => {
    const value = await jsonwebtoken_1.default.verify(token, secret);
    return value === null || value === void 0 ? void 0 : value.accountId;
};
exports.jwtDecryptAdapter = jwtDecryptAdapter;
//# sourceMappingURL=jwt-decrypt-adapter.js.map