'use strict';

module.exports = (app) => {

	// home page
	app.get('/', (req, res) => {
		res.json({ success: true });
	});

	app.post('/save', (req, res) => {
		// stuff
	});

	app.post('/load', (req, res) => {
		// stuff
	});

	app.get('/download', (req, res) => {
		// stuff
	});

	app.post('/upload', (req, res) => {
		// stuff
	});

};
