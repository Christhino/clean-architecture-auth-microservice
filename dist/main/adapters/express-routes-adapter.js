"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptRoute = void 0;
const adaptRoute = (controller) => {
    return async (req, res) => {
        const httpRequest = {
            body: req.body,
            accountId: req.accountId,
            query: req.query,
            params: req.params,
            headers: req.headers,
        };
        const httpResponse = await controller(httpRequest);
        if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
            res.status(httpResponse.statusCode).json(httpResponse.body);
        }
        else {
            res
                .status(httpResponse.statusCode)
                .json({ error: httpResponse.body.message });
        }
    };
};
exports.adaptRoute = adaptRoute;
//# sourceMappingURL=express-routes-adapter.js.map