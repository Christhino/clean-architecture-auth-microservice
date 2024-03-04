"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeMeController = void 0;
const controllers_1 = require("@src/interface/controllers");
const usecases_1 = require("@src/main/factories/usecases");
const makeMeController = () => controllers_1.meController({
    loadAccountById: usecases_1.makeDbLoadAccountById(),
});
exports.makeMeController = makeMeController;
//# sourceMappingURL=index.js.map