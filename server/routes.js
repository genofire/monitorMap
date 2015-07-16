/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var ansible = require('./components/ansible');
var statistic = require('./components/statistic_api');
var meshviewer = require('./components/meshviewer');

module.exports = function(app) {

	app.route('/json/meshviewer/nodes.json')
		.get(function(req, res) {
			meshviewer.getNodes(function(data){
							res.jsonp(data);
			});
		});
	app.route('/json/meshviewer/graph.json')
		.get(function(req, res) {
			meshviewer.getNodes(function(data){
							res.jsonp(data);
			});
		});
	app.route('/json/meshviewer/node.json')
		.get(function(req, res) {
			meshviewer.getNodes(function(data){
							res.jsonp(data);
			});
		});
	app.route('/json/ansible')
		.get(function(req, res) {
			ansible.getJSON(function(data){
							res.jsonp(data);
			});
		});
		app.route('/json/statistic')
			.get(function(req, res) {
				statistic.getJSON(function(data){
								res.jsonp(data);
				});
			});

	// All undefined asset or api routes should return a 404
	app.route('/:url(api|auth|components|app|bower_components|assets)/*')
	 .get(errors[404]);

	// All other routes should redirect to the index.html
	app.route('/*')
		.get(function(req, res) {
			res.sendfile(app.get('appPath') + '/index.html');
		});
};
