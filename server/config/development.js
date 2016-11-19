'use strict';

const join = require('path').join;
const dirname = require('path').dirname;
const serverDir = dirname(__dirname);
const projectRoot = dirname(serverDir);
const publicDir = join(serverDir, 'public');

const pathToWebPackConf = join(projectRoot, 'webpack.config.dev.js');

module.exports = {
    server: {
    	dirs: {
    		public: publicDir
    	},
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
	webpack: {
		path: pathToWebPackConf
	},
    logger: {
        level: 'debug',
		colorize: true,
		handleExceptions: true
    }
}
