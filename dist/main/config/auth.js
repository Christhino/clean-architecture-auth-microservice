"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const express_middleware_adapter_1 = require("@src/main/adapters/express-middleware-adapter");
const auth_middleware_factory_1 = require("@src/main/factories/middleware/auth-middleware-factory");
exports.auth = express_middleware_adapter_1.adaptMiddleware(auth_middleware_factory_1.makeAuthMiddleware());
//# sourceMappingURL=auth.js.map