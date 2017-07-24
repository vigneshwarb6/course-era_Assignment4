(function(){
  'use strict';
  angular.module('MenuApp',[])
  .config(RoutesConfig);

  RoutesConfig.$inject=['$stateProvider','$urlRouterProvider','$stateParams'];
function RoutesConfig($stateProvider,$urlRouterProvider,$stateParams){

// Otherwise Redirect it Home
  $urlRouterProvider.otherwise("/");

  // State Provider redirects the actual URL's

  $stateProvider
  .state('home',{
    url:'/',
    templateUrl:'src/menu/home.template.html'
  })
.state('categories',{
  url:'/categories',
  templateUrl:'src/menu/main.menu-category.template.html'
});
}

})();
