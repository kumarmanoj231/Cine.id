module.exports.parseString = (inputString) => {
    if (typeof inputString !== 'string') {
        throw new Error("Input must be a string");
    }
    return inputString.split(',').map(item => item.trim());
};