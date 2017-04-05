var NODE_ENV = process.env.NODE_ENV || 'development';
var NODE_HOST = process.env.NODE_HOST || 'localhost';
var NODE_PORT = process.env.NODE_PORT || 8000;
var LOG_LEVEL = process.env.LOG_LEVEL || 'info';

var APP_NAME = 'node-restify-boilerplate';

var config = {
    development: {
        app: {
            name: APP_NAME + NODE_ENV,
            address: NODE_HOST,
            port: NODE_PORT
        },
        log: {
            name: APP_NAME + NODE_ENV,
            level: LOG_LEVEL
        }
    },
    test: {
        app: {
            name: APP_NAME + NODE_ENV,
            address: NODE_HOST,
            port: NODE_PORT
        },
        log: {
            name: APP_NAME + NODE_ENV,
            level: LOG_LEVEL
        }
    },
    production: {
        app: {
            name: APP_NAME + NODE_ENV,
            address: NODE_HOST,
            port: NODE_PORT
        },
        log: {
            name: APP_NAME + NODE_ENV,
            level: LOG_LEVEL
        }
    }
};

module.exports = config[NODE_ENV];