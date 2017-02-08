function calculateShipping(app) {
	'use strict';
	
  app.post("/v1/calculateShipping", function(req, res) {
    var shipping = {
		  'shippingMethods': [
		    {
		      'shippingCost': 12.95,
		      'shippingTax': 2,
		      'shippingTotal': 14.95,
		      'internationalDutiesTaxesFees': 0,
		      'eligibleForProductWithSurcharges': true,
		      'deliveryDays': 2,
		      'estimatedDeliveryDateGuaranteed': false,
		      'displayName': 'canadapost-overnight',
		      'carrierId': 'ON',
		      'taxcode': 'GT987',
		      'currency': 'USD'
		    },
		    {
		      'shippingCost': 15.95,
		      'shippingTax': 2,
		      'shippingTotal': 17.95,
		      'internationalDutiesTaxesFees': 0,
		      'eligibleForProductWithSurcharges': true,
		      'deliveryDays': 2,
		      'estimatedDeliveryDateGuaranteed': false,
		      'estimatedDeliveryDate': '2013-04-12 14:48:45 -0400',
		      'displayName': 'my-canadapost-2days',
		      'carrierId': 'ON',
		      'taxcode': 'GT987',
		      'currency': 'USD'
		    },
		    {
		      'shippingCost': 29,
		      'shippingTax': 4,
		      'shippingTotal': 33,
		      'internationalDutiesTaxesFees': 0,
		      'deliveryDays': 2,
		      'estimatedDeliveryDateGuaranteed': false,
		      'estimatedDeliveryDate': '2013-04-12 14:48:45 -0400',
		      'displayName': 'fedex-2dayground',
		      'carrierId': '1D',
		      'taxcode': 'TD543',
		      'currency': 'USD'
		    }
		  ]
		};

  	res.status(200).json(shipping);
  });

  app.get('/v1/calculateShipping', function(req, res) {
  	res.status(200).json({
  		message: 'Request should use the POST method in order to retrieve the additional shipping methods.'
  	});
  });
}

module.exports = calculateShipping;