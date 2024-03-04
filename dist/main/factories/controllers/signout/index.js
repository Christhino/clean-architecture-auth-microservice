"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSignoutController = void 0;
const controllers_1 = require("@src/interface/controllers");
const usecases_1 = require("@src/main/factories/usecases");
const makeSignoutController = () => controllers_1.signoutController({
    signout: usecases_1.makeDbSignout(),
});
exports.makeSignoutController = makeSignoutController;
//# sourceMappingURL=index.js.map