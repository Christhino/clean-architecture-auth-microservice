"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signoutRepository = exports.updatePasswordRepository = exports.updateForgotPasswordAccessTokenRepository = exports.updateAccessTokenRepository = exports.loadAccountByTokenRepository = exports.loadAccountByIdRepository = exports.loadAccountByEmailRepository = exports.addAccountRepository = void 0;
const models_1 = require("@src/infra/db/mongoose/models");
const helper_1 = require("@src/infra/db/mongoose/helper/");
const addAccountRepository = async (params) => {
    const doc = new models_1.AccountModel(params);
    await doc.save();
    const parsedDoc = JSON.parse(JSON.stringify(doc));
    return helper_1.MongoHelper.serialize(parsedDoc);
};
exports.addAccountRepository = addAccountRepository;
const loadAccountByEmailRepository = async (email) => {
    const account = await models_1.AccountModel.findOne({ email }).lean();
    return helper_1.MongoHelper.serialize(account);
};
exports.loadAccountByEmailRepository = loadAccountByEmailRepository;
const loadAccountByIdRepository = async (id) => {
    const account = await models_1.AccountModel.findById(id).lean();
    return helper_1.MongoHelper.serialize(account);
};
exports.loadAccountByIdRepository = loadAccountByIdRepository;
const loadAccountByTokenRepository = async (accessToken) => {
    const account = await models_1.AccountModel.findOne({ accessToken }).lean();
    return helper_1.MongoHelper.serialize(account);
};
exports.loadAccountByTokenRepository = loadAccountByTokenRepository;
const updateAccessTokenRepository = async (id, token) => {
    await models_1.AccountModel.findByIdAndUpdate(id, { accessToken: token });
};
exports.updateAccessTokenRepository = updateAccessTokenRepository;
const updateForgotPasswordAccessTokenRepository = async (id, params) => {
    const account = await models_1.AccountModel.findByIdAndUpdate(id, {
        forgotPasswordAccessToken: params.accessToken,
        forgotPasswordExpiresIn: params.expiresIn,
    }, { new: true }).lean();
    return helper_1.MongoHelper.serialize(account);
};
exports.updateForgotPasswordAccessTokenRepository = updateForgotPasswordAccessTokenRepository;
const updatePasswordRepository = async (id, password) => {
    await models_1.AccountModel.findByIdAndUpdate(id, {
        password,
        forgotPasswordExpiresIn: null,
        forgotPasswordAccessToken: null,
    });
};
exports.updatePasswordRepository = updatePasswordRepository;
const signoutRepository = async (id) => {
    await models_1.AccountModel.findByIdAndUpdate(id, {
        accessToken: null,
    });
};
exports.signoutRepository = signoutRepository;
//# sourceMappingURL=index.js.map