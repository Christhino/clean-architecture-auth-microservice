"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtEncryptAdapter = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtEncryptAdapter = (secret) => async (value) => {
    const accessToken = await jsonwebtoken_1.default.sign({ accountId: value }, secret);
    return accessToken;
};
exports.jwtEncryptAdapter = jwtEncryptAdapter;
//# sourceMappingURL=jwt-encrypt-adapter.js.map