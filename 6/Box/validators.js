export const Validator = {
    isPositiveInteger(...values) {
        for (const val of values) {
            if (typeof val !== 'number' || !Number.isInteger(val) || val < 0) {
                throw new Error(`Validation Error: ${val} must be a non-negative integer.`);
            }
        }
    },

    isNumber(...values) {
        for (const val of values) {
            if (typeof val !== 'number' || isNaN(val)) {
                throw new Error(`Validation Error: ${val} must be a valid number.`);
            }
        }
    },

    isNonEmptyString(...values) {
        for (const val of values) {
            if (typeof val !== 'string' || val.trim().length === 0) {
                throw new Error("Validation Error: Value must be a non-empty string.");
            }
        }
    }
};