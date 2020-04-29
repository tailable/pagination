const path = require("path");

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/pagination/'
    : '/',
    // outputDir: path.resolve(__dirname, "./docs"),
}
