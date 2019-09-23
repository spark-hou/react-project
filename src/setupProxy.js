/**
 * @author  :spark Hou
 * @date  : 2019-09-23 14:29
 * @Description :
 */
const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy("/smartHealth/healthConsultation/getPersons", {
            target: "http://219.147.31.48:8080",
            changeOrigin: true
        })
    );
}