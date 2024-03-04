"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeMailerAdapter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const nodeMailerAdapter = ({ host, port, user, pass, from }) => async ({ subject, text, to }) => {
    const transport = nodemailer_1.default.createTransport({
        host,
        port,
        auth: {
            user,
            pass,
        },
    });
    await transport.sendMail({ from, to, subject, text });
};
exports.nodeMailerAdapter = nodeMailerAdapter;
//# sourceMappingURL=node-mailer-adapter.js.map