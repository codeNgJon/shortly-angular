angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  console.log('in LinksController!');
  $scope.data = {};

  $scope.getLinks = function() {
    Links.getLinks()
      .then(function(resp) {
        $scope.data = resp.data;
        console.log('Services links response.data:', resp.data);
      })
      .catch(function(error) {
        console.error(error);
      });
  };

});
