'use strict';

angular.module('MyUIRouteApp', ['ui.router', 'ui.bootstrap.dropdown'])

  .config(function($stateProvider, $urlRouterProvider) {

     // Begin States(Routes)
    $stateProvider
      // Home state
      .state('home', {
        url: "/", // This state will be loaded at the root URL
        templateUrl: "app/states/home.html", // The template that needs to be loaded
        controller: "homeCtrl" // The controller that should be used for this state when it is loaded
      })
      .state('shop', {
        url: "/shop",
        templateUrl: "app/states/shop.html",
      })
        .state('shop.macbooks', { // This is a nested child view of the "shop" state above ^^^
          url: "/macbooks",
          templateUrl: "app/states/macbooks.html",
          controller: "productsCtrl",
          controllerAs: 'mac' // If you are using the controllerAs syntax you can declare it in the router
        })
        .state('shop.iphones', { // This is also a nested child view of the "shop" state above ^^^
          url: "/iphones",
          templateUrl: "app/states/iphones.html",
          controller: "productsCtrl as phone" // You can also declare the controllerAs syntax like this
        })
    // Redirect back to the home screen if a unmatched URL is entered
    $urlRouterProvider.otherwise("/");
  });
