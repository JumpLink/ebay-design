
/*
 * GET home page.
 */

exports.index = function(req, res){

	var ebay = {
		production: {
			categories : {
				'Räder & Felgen': 'http://stores.ebay.de/Bugwelder-Shop_Rader-Felgen_W0QQfsubZ628493010',
				'VW Käfer': 'http://stores.ebay.de/Bugwelder-Shop_VW-Kafer_W0QQfsubZ5751406010',
				"VW Bus T1" : 'http://stores.ebay.de/Bugwelder-Shop_VW-Bus-T1-50-67_W0QQfsubZ5751407010',
				"VW Bus T2" : 'http://stores.ebay.de/Bugwelder-Shop_VW-Bus-T2-68-79_W0QQfsubZ5751408010',
				"VW Bus T3" : 'http://stores.ebay.de/Bugwelder-Shop_VW-Bus-T3-80-91_W0QQfsubZ5751409010',
				"VW Golf I" : 'http://stores.ebay.de/Bugwelder-Shop_VW-Golf-I-74-83_W0QQfsubZ5751410010',
				"VW Golf II" : 'http://stores.ebay.de/Bugwelder-Shop_VW-Golf-II-83-92_W0QQfsubZ5751415010',
				"Werkzeuge" : 'http://stores.ebay.de/Bugwelder-Shop_Werkzeuge_W0QQfsubZ5751416010',
				"Auspuff" : 'http://stores.ebay.de/Bugwelder-Shop_Auspuff_W0QQfsubZ5751417010',
				"Lifestyle" : 'http://stores.ebay.de/Bugwelder-Shop_Lifestyle_W0QQfsubZ5751418010',
				"Sonstige" : 'http://stores.ebay.de/Bugwelder-Shop_Sonstige_W0QQfsubZ1'
			},
			sites : {
				'Home' : '',
				'Impressum' : '',
				'AGB' : '',
				'Widerrufsbelehrung' : '',
				'Lieferung' : '',
				'KBA Zertifizierung' : '',
				'Informationen zum Verkäufer' : "http://members.sandbox.ebay.de/aboutme/bugwelder"
			},
			search : 'http://stores.shop.ebay.de//Bugwelder-Shop__W0QQ_sidZ574086930',
			shop : 'http://stores.ebay.de/Bugwelder-Shop'
		},
		sandbox: {
			categories : {
				'Felgen' : '',
				'Fahrzeuge' : 'http://stores.sandbox.ebay.de/bugwelder_Felgen_W0QQfsubZ573912',
/*				'VW Käfer' : '',
				"VW Bus T1" : '',
				"VW Bus T2" : '',
				"VW Bus T3" : '',
				"VW Golf I" : '',
				"VW Golf II" : '',*/
				"Werkzeuge" : '',
				"Auspuff" : '',
				"Lifestyle" : '',
				"Sonstige" : ''
			},
			sites : {
				'Home' : '',
				'Impressum' : '',
				'AGB' : '',
				'Widerrufsbelehrung' : '',
				'Lieferung' : '',
				'KBA Zertifizierung' : '',
				'Informationen zum Verkäufer' : "http://members.sandbox.ebay.de/aboutme/bugwelder"
			},
			search : 'http://stores.shop.sandbox.ebay.de//bugwelder__W0QQ_sidZ133026302',
			shop : 'http://stores.shop.sandbox.ebay.de/bugwelder'
		}
	};

	var ebay = ebay.sandbox;
	if (req.query.mode == "production")
		ebay = ebay.production;

	var source_url = ".";
	if (req.query.source == "online")
		source_url = 'http://bugwelder.com';
  res.render('index', { ebay: ebay, source_url: source_url});
};