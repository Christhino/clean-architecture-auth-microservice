"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbSignout = exports.makeSendMail = exports.makeDbUpdatePassword = exports.makeDbLoadAccountByToken = exports.makeDbLoadAccountById = exports.makeDbLoadAccountByEmail = exports.makeDbForgotPassword = exports.makeDbAuthentication = exports.makeDbAddAccount = void 0;
const usecases_1 = require("@src/data/usecases");
const cryptography_1 = require("@src/infra/cryptography");
const repositories_1 = require("@src/infra/db/mongoose/repositories");
const remote_1 = require("@src/infra/remote");
const env_1 = __importDefault(require("@src/main/config/env"));
const makeDbAddAccount = () => usecases_1.dbAddAccount({
    passwordHash: cryptography_1.bcryptHashPasswordHashAdapter(env_1.default.salt),
    addAccountRepository: repositories_1.addAccountRepository,
});
exports.makeDbAddAccount = makeDbAddAccount;
const makeDbAuthentication = () => usecases_1.dbAuthentication({
    passwordHashCompare: cryptography_1.bcryptPasswordHashCompareAdapter,
    encrypt: cryptography_1.jwtEncryptAdapter(env_1.default.jwtSecret),
    loadAccountByEmailRepository: repositories_1.loadAccountByEmailRepository,
    updateAccessTokenRepository: repositories_1.updateAccessTokenRepository,
});
exports.makeDbAuthentication = makeDbAuthentication;
const makeDbForgotPassword = () => usecases_1.dbForgotPassword({
    generateAccessToken: cryptography_1.generateAccessTokenAdapter,
    updateForgotPasswordAccessTokenRepository: repositories_1.updateForgotPasswordAccessTokenRepository,
});
exports.makeDbForgotPassword = makeDbForgotPassword;
const makeDbLoadAccountByEmail = () => usecases_1.dbLoadAccountByEmail({
    loadAccountByEmailRepository: repositories_1.loadAccountByEmailRepository,
});
exports.makeDbLoadAccountByEmail = makeDbLoadAccountByEmail;
const makeDbLoadAccountById = () => usecases_1.dbLoadAccountById({
    loadAccountByIdRepository: repositories_1.loadAccountByIdRepository,
});
exports.makeDbLoadAccountById = makeDbLoadAccountById;
const makeDbLoadAccountByToken = () => usecases_1.dbLoadAccountByToken({
    loadAccountByTokenRepository: repositories_1.loadAccountByTokenRepository,
    decrypt: cryptography_1.jwtEncryptAdapter(env_1.default.jwtSecret),
});
exports.makeDbLoadAccountByToken = makeDbLoadAccountByToken;
const makeDbUpdatePassword = () => usecases_1.dbUpdatePassword({
    passwordHash: cryptography_1.bcryptHashPasswordHashAdapter(env_1.default.salt),
    updatePasswordRepository: repositories_1.updatePasswordRepository,
});
exports.makeDbUpdatePassword = makeDbUpdatePassword;
const makeSendMail = () => usecases_1.sendMail({
    remoteSendMail: remote_1.nodeMailerAdapter({
        from: env_1.default.smtpMail,
        host: env_1.default.smtpHost,
        port: parseInt(`${env_1.default.smtpPort}`),
        user: env_1.default.smtpUser,
        pass: env_1.default.smtpPass,
    }),
});
exports.makeSendMail = makeSendMail;
const makeDbSignout = () => usecases_1.dbSignout({ signoutRepository: repositories_1.signoutRepository });
exports.makeDbSignout = makeDbSignout;
//# sourceMappingURL=index.js.map