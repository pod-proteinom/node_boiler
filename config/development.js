'use strict';

module.exports = {
    server: {
        port: 4000
    },
    mongoose: {
		uri: 'mongodb://localhost:27017/app',
		options: {
			server: {
				socketOptions: {
					keepAlive: 1
				},
				poolSize: 5
			}
		}
	},
    logger: {
        level: 'debug',
		colorize: true
    }
}
