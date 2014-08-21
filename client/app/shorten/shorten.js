angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.loading = false;
  $scope.validateUrl = 'no error so far, bro.';

  $scope.addLink = function(){
    $scope.loading = true;

    Links.addLink($scope.link)
      .success(function() {
        $scope.validateUrl = 'shortened the link bro!';
      })
      .catch(function(error){
        $scope.validateUrl = 'ERROR BROSEF!';
        console.error(error);
      });

    $scope.loading = false;
  };

});
