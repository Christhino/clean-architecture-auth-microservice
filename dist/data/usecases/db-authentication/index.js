"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbAuthentication = void 0;
const broker_1 = require("@src/infra/rabbitmq/broker");
const dbAuthentication = ({ loadAccountByEmailRepository, passwordHashCompare, encrypt, updateAccessTokenRepository, }) => async (params) => {
    const account = await loadAccountByEmailRepository(params.email);
    if (account) {
        const isValid = await passwordHashCompare(params.password, account.password);
        if (isValid) {
            const accessToken = await encrypt(account.id);
            await updateAccessTokenRepository(account.id, accessToken);
            const user = account.firstName;
            await broker_1.publishEvent('userAuthentificated', { user });
            return accessToken;
        }
    }
    return null;
};
exports.dbAuthentication = dbAuthentication;
//# sourceMappingURL=index.js.map