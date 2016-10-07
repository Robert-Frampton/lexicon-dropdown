'use strict';

var karmaHtml2JsPreprocessor = require('karma-html2js-preprocessor');
var metalKarmaConfig = require('metal-karma-config/coverage');

module.exports = function (config) {
	metalKarmaConfig(config);

	config.plugins.push(karmaHtml2JsPreprocessor);

	config.files.push('node_modules/lexicon*/src/**.js');
	config.preprocessors['node_modules/lexicon*/src/**.js'] = ['babel', 'commonjs'];

	config.files.push('test/fixture/*.html');
	config.preprocessors['test/fixture/*.html'] = ['html2js'];
};
