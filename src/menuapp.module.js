(function(){
  'use strict';
angular.module('MenuApp',['ui.router','data']);

angular.module('MenuApp')
.config(function () {
  console.log("Menu App config fired.");
})
.run(function () {
  console.log("Menu App run fired.");
});
})();
