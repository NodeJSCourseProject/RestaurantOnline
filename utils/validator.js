function validateLength(string, minLength, maxLength) {
    if (string.length < minLength || string.length > maxLength) {
        return false;
    }
    return true;
}

function validateSymbols(string, regexString) {
    if (string.match(regexString)) {
        return true;
    }
    return false;
}

module.exports = {
    validateLength: (len) => {
        return validateLength(len, 5, 60);
    },
    validateImageLink: (imgLink) => {
        return validateSymbols(imgLink, '([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))');
    },
    validateMeal: (name) => {
        return validateLength(name, 3, 30);
    },
};
