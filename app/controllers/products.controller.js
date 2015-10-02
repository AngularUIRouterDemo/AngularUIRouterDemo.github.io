'use strict';

angular.module('MyUIRouteApp')

.controller('productsCtrl', function(){
  var self = this;

  this.models = [
    {
      name: 'Macbook 12" Gold',
      img: 'http://cnet2.cbsistatic.com/hub/i/r/2015/04/07/b35f1174-696c-4d25-8a4f-fa16a2842338/thumbnail/770x433/e7833430bf45145868853f81c0545329/macbook-air-gold-2015-16.jpg'
    },
    {
      name: 'Macbook 12" Silver',
      img: 'http://egadgets4u.com/wp-content/uploads/2015/04/Display-and-Keys-of-Macbook-2015.jpg'
    },
    {
      name: 'Macbook 12" Space Gray',
      img: 'http://cdn.arstechnica.net/wp-content/uploads/2015/03/DSC00127-980x653.jpg'
    },
    {
      name: 'Macbook Air 11"',
      img: 'http://cnet3.cbsistatic.com/hub/i/r/2012/06/14/783f0a6f-bb76-11e2-8a8e-0291187978f3/thumbnail/770x433/78fbe63388a29429a05ceb1a1ca6190d/MacBook_Air_13-inch_35330106_12.jpg'
    },
    {
      name: 'Macbook Air 13"',
      img: 'http://cnet3.cbsistatic.com/hub/i/r/2012/06/14/783f0a6f-bb76-11e2-8a8e-0291187978f3/thumbnail/770x433/78fbe63388a29429a05ceb1a1ca6190d/MacBook_Air_13-inch_35330106_12.jpg'
    },
    {
      name: 'Macbook Pro 13"',
      img: 'http://cnet2.cbsistatic.com/hub/i/r/2012/10/24/2a0f0354-bb76-11e2-8a8e-0291187978f3/thumbnail/770x433/806d32b11d29af81af1f3c5bb6bccac8/macbook_pro_13inch_35440710_04.jpg'
    },
  ];

  this.iphones = [
    {
      name: 'iPhone 6s Gold',
      img: 'http://i.telegraph.co.uk/multimedia/archive/03038/iphone6gold_3038976b.jpg'
    },
    {
      name: 'iPhone 6s Rose Gold',
      img: 'http://cdn.idigitaltimes.com/sites/idigitaltimes.com/files/styles/large/public/2015/08/19/pink-iphone-6s.png'
    },
    {
      name: 'iPhone 6s Silver',
      img: 'http://nearestore.com/Product_Images/Pro196v2-74687-2_large.jpg'
    },
    {
      name: 'iPhone 6s Space Gray',
      img: 'http://iphoneplus.ge/wp-content/uploads/2015/08/125071342-1-iphone_6_plus_16_gb_space_gray_akilli_telefon.jpg'
    },
    {
      name: 'iPhone 6s+ Gold',
      img: 'http://blogs-images.forbes.com/gordonkelly/files/2015/06/iphone-6S-gold.jpg'
    },
    {
      name: 'iPhone 6s+ Space Gray',
      img: 'http://cdn.iphonehacks.com/wp-content/uploads/2014/09/iphone-6-gray.jpg'
    },
  ]
})
