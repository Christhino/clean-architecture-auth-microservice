"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const models_protocols_1 = require("./models-protocols");
const AccountSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        sparse: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'password must be at least 6 characters'],
    },
    accessToken: {
        type: String,
    },
    forgotPasswordAccessToken: {
        type: Number,
    },
    forgotPasswordExpiresIn: {
        type: Date,
    },
}, { timestamps: true });
exports.default = mongoose_1.model(models_protocols_1.Schemas.account, AccountSchema);
//# sourceMappingURL=account-models.js.map