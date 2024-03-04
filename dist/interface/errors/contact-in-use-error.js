"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactInUseError = void 0;
class ContactInUseError extends Error {
    constructor() {
        super('The received contact is already in use');
        this.name = 'ContactInUseError';
    }
}
exports.ContactInUseError = ContactInUseError;
//# sourceMappingURL=contact-in-use-error.js.map