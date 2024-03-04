"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noContent = exports.notFoundError = exports.unauthorized = exports.created = exports.ok = exports.serverError = exports.badRequest = void 0;
const protocols_1 = require("@src/interface/protocols");
const errors_1 = require("@src/interface/errors");
const badRequest = (error) => ({
    statusCode: protocols_1.HttpStatusCode.badRequest,
    body: error,
});
exports.badRequest = badRequest;
const serverError = (error) => ({
    statusCode: protocols_1.HttpStatusCode.serverError,
    body: new errors_1.ServerError(error.stack),
});
exports.serverError = serverError;
const ok = (data) => ({
    statusCode: protocols_1.HttpStatusCode.ok,
    body: data,
});
exports.ok = ok;
const created = (data) => ({
    statusCode: protocols_1.HttpStatusCode.created,
    body: data,
});
exports.created = created;
const unauthorized = () => ({
    statusCode: protocols_1.HttpStatusCode.unauthorized,
    body: new errors_1.UnauthorizedError(),
});
exports.unauthorized = unauthorized;
const notFoundError = (paramName) => ({
    statusCode: protocols_1.HttpStatusCode.notFound,
    body: new errors_1.NotFoundError(paramName),
});
exports.notFoundError = notFoundError;
const noContent = () => ({
    statusCode: protocols_1.HttpStatusCode.noContent,
});
exports.noContent = noContent;
//# sourceMappingURL=index.js.map