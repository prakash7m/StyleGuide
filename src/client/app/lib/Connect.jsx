import axios from 'axios';
import AppConfig from '../config.js';
var request = function (config) {
    if (AppConfig.mock) {
        axios.get(`src/client/public/data/${config.url}.json`, {
            params: config.params
        }).then(function (response) {
            config.success && config.success(response);
        }).catch(function (error) {
            config.error && config.error(error);
        })
    } else {
        axios.get(config.url, config.params).then(function (response) {
            config.success && config.success(response);
        }).catch(function (error) {
            config.error && config.error(error);
        })
    }
}

module.exports = request;