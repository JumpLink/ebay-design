/*
 * GET home page.
 */

exports.index = function(req, res){
	var MODE = 'sandbox';//'local';
	var SOURCE = 'local';
	//var SOURCE = 'online';

	var ebay = require('./ebay.js').ebay;
	var current_ebay = ebay.sandbox;
	if (MODE == "production")
		current_ebay = ebay.production;
	if (MODE == "local")
		current_ebay = ebay.local;

	var source_url = "";
	if (SOURCE == "online")
		source_url = 'http://ebay.bugwelder.com';
  res.render(req.url.substring(1,req.url.length), { ebay: current_ebay, source_url: source_url, mode: MODE});
};