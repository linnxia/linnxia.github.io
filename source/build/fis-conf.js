var now = new Date();
fis.config.set('timestamp', [now.getFullYear(), now.getMonth() + 1, now.getDate(), now.getHours()].join(''));
fis.config.merge({
	project: {
		charset: 'utf8',
		md5Length: 7
	},
	roadmap: {
		domain: {
			'**.css': 'http://www.linjiajun.com',
			'**.js': 'http://www.linjiajun.com',
			'image': 'http://www.linjiajun.com'
		},
		path: [{
			reg: '/assets/css/**.css',
			query: '?t=${timestamp}',
			useHash: false,
			release: '$&',
			url: '$&'
		}, {
			reg: '/assets/js/**.js',
			query: '?t=${timestamp}',
			useHash: false,
			release: '$&',
			url: '$&'
		}]
	},
	pack: {
		'/assets/css/style.min.css': [
			'/assets/css/reset.css',
			'/assets/css/index.css'
		]
	},
	deploy: {
		dev: {
			to: './dist/'
		},
		prd: {
			to: '../'
		}
	}
});