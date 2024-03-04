"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryCatch = void 0;
const http_1 = require("../http");
function tryCatch(fn) {
    return (...props) => async (httpRequest) => {
        try {
            return await fn(...props)(httpRequest);
        }
        catch (error) {
            return http_1.serverError(error);
        }
    };
}
exports.tryCatch = tryCatch;
//# sourceMappingURL=index.js.map