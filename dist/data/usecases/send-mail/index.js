"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const sendMail = ({ remoteSendMail }) => async (params) => {
    await remoteSendMail(params);
};
exports.sendMail = sendMail;
//# sourceMappingURL=index.js.map