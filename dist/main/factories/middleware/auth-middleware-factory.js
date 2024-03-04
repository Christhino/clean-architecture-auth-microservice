"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAuthMiddleware = void 0;
const auth_middleware_1 = require("@src/interface/middlewares/auth-middleware");
const usecases_1 = require("@src/main/factories/usecases");
const makeAuthMiddleware = () => auth_middleware_1.authMiddleware({
    loadAccountByToken: usecases_1.makeDbLoadAccountByToken(),
});
exports.makeAuthMiddleware = makeAuthMiddleware;
//# sourceMappingURL=auth-middleware-factory.js.map