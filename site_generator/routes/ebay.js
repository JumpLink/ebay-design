exports.ebay = {
	production: {
		categories : {
			'Felgen': {url:'http://stores.ebay.de/Bugwelder-Shop_Rader-Felgen_W0QQfsubZ628493010', sub:null},
			'Fahrzeuge' : {url:'', sub: {
					'VW Käfer': {url:'http://stores.ebay.de/Bugwelder-Shop_VW-Kafer_W0QQfsubZ5751406010', sub:null},
					"VW Bus T1" : {url:'http://stores.ebay.de/Bugwelder-Shop_VW-Bus-T1-50-67_W0QQfsubZ5751407010', sub:null},
					"VW Bus T2" : {url:'http://stores.ebay.de/Bugwelder-Shop_VW-Bus-T2-68-79_W0QQfsubZ5751408010', sub:null},
					"VW Bus T3" : {url:'http://stores.ebay.de/Bugwelder-Shop_VW-Bus-T3-80-91_W0QQfsubZ5751409010', sub:null},
					"VW Golf I" : {url:'http://stores.ebay.de/Bugwelder-Shop_VW-Golf-I-74-83_W0QQfsubZ5751410010', sub:null},
					"VW Golf II" : {url:'http://stores.ebay.de/Bugwelder-Shop_VW-Golf-II-83-92_W0QQfsubZ5751415010', sub:null}
				}
			},
			"Werkzeuge" : {url:'http://stores.ebay.de/Bugwelder-Shop_Werkzeuge_W0QQfsubZ5751416010', sub:null},
			"Auspuff" : {url:'http://stores.ebay.de/Bugwelder-Shop_Auspuff_W0QQfsubZ5751417010', sub:null},
			"Lifestyle" : {url:'http://stores.ebay.de/Bugwelder-Shop_Lifestyle_W0QQfsubZ5751418010', sub:null},
			"Sonstige" : {url:'http://stores.ebay.de/Bugwelder-Shop_Sonstige_W0QQfsubZ1', sub:null}
		},
		sites : {
			'Home' : '',
			'Impressum' : '',
			'AGB' : '',
			'Widerrufsbelehrung' : '',
			'Lieferung' : '',
			'KBA Zertifizierung' : 'test kba',
			'Volkswagen Classic Parts' : "test vw",
			'Mitarbeiter' : 'mitarbeiter',
			'Informationen zum Verkäufer' : "http://members.sandbox.ebay.de/aboutme/bugwelder"
		},
		search : 'http://stores.shop.ebay.de//Bugwelder-Shop__W0QQ_sidZ574086930',
		shop : 'http://stores.ebay.de/Bugwelder-Shop'
	},
	sandbox: {
		categories : {
			'Felgen' : {url:'', sub:null},
			'Fahrzeuge' : {url:'', sub: {
					"VW Käfer" : {url:'', sub:null},
					"VW Bus T1" : {url:'', sub:null},
					"VW Bus T2" : {url:'', sub:null},
					"VW Bus T3" : {url:'', sub:null},
					"VW Golf I" : {url:'', sub:null},
					"VW Golf II" : {url:'', sub:null}
				}
			},
			"Werkzeuge" : {url:'', sub:null},
			"Auspuff" : {url:'', sub:null},
			"Lifestyle" : {url:'', sub:null},
			"Sonstige" : {url:'', sub:null}
		},
		sites : {
			'Home' : '',
			'Impressum' : '',
			'AGB' : '',
			'Widerrufsbelehrung' : '',
			'Lieferung' : '',
			'KBA Zertifizierung' : 'test kba',
			'Volkswagen Classic Parts' : "test vw",
			'Mitarbeiter' : 'mitarbeiter',
			'Informationen zum Verkäufer' : "http://members.sandbox.ebay.de/aboutme/bugwelder"
		},
		search : 'http://stores.shop.sandbox.ebay.de//bugwelder__W0QQ_sidZ133026302',
		shop : 'http://stores.shop.sandbox.ebay.de/bugwelder'
	},
	local: {
		categories : {
			'Felgen': {url:'/felgen', sub:null},
			'Fahrzeuge' : {url:'/fahrzeuge', sub: {
					'VW Käfer': {url:'/vwkaefer', sub:null},
					"VW Bus T1" : {url:'/vwbust1', sub:null},
					"VW Bus T2" : {url:'/vwbust2', sub:null},
					"VW Bus T3" : {url:'/vwbust3', sub:null},
					"VW Golf I" : {url:'/vwgolf1', sub:null},
					"VW Golf II" : {url:'/vwgolf2', sub:null}
				}
			},
			"Werkzeuge" : {url:'/werkzeuge', sub:null},
			"Auspuff" : {url:'/auspuff', sub:null},
			"Lifestyle" : {url:'/lifestyle', sub:null},
			"Sonstige" : {url:'/sonstige', sub:null}
		},
		sites : {
			'Home' : '/home',
			'Impressum' : '/impressum',
			'AGB' : '/agb',
			'Widerrufsbelehrung' : '/widerrufsbelehrung',
			'Lieferung' : '/lieferung',
			'KBA Zertifizierung' : '/kba',
			'Volkswagen Classic Parts' : "/volkswagen",
			'Mitarbeiter' : 'mitarbeiter',
			'Informationen zum Verkäufer' : "/aboutme"
		},
		search : '/search',
		shop : ''
	},
};