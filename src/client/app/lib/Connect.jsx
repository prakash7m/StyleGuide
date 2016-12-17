import axios from 'axios';
import AppConfig from '../config.js';
var request = function (config) {
    if (AppConfig.mock) {
        axios.get(`src/client/public/data/${config.url}.json`, {
            params: config.params
        }).then(function (response) {
            setTimeout(function () {
                config.success && config.success(response);
            }, 3000)
        }).catch(function (error) {
            setTimeout(function () {
                config.error && config.error(error);
            }, 3000)
        });
    } else {
        axios.post(config.url, config.params).then(function (response) {
            config.success && config.success(response);
        }).catch(function (error) {
            config.error && config.error(error);
        });
    }
}

module.exports = request;