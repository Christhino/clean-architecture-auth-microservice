"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationComposite = void 0;
const validationComposite = (validations) => (input) => {
    for (const validation of validations) {
        const error = validation(input);
        if (error) {
            return error;
        }
    }
    return null;
};
exports.validationComposite = validationComposite;
//# sourceMappingURL=validation-composite.js.map