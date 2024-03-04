"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const account_routes_1 = __importDefault(require("@src/main/routes/account-routes"));
exports.default = (app) => {
    const router = express_1.Router();
    account_routes_1.default(router);
    app.use('/api/v1', router);
};
//# sourceMappingURL=routes.js.map