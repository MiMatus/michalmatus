const withLinaria = require('next-with-linaria');

/** @type {import('next-with-linaria').LinariaConfig} */
const config = {
    output: 'export',
};
module.exports = withLinaria(config);
