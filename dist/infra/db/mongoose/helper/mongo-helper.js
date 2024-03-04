"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoHelper = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.MongoHelper = {
    async connect(uri) {
        await mongoose_1.default.connect(uri);
    },
    async disconnect() {
        await mongoose_1.default.disconnect();
    },
    serialize(data) {
        if (!data) {
            return data;
        }
        const { _id, __v, ...dataWithoutIdAndVersion } = data;
        return Object.assign({}, dataWithoutIdAndVersion, { id: _id });
    },
};
//# sourceMappingURL=mongo-helper.js.map