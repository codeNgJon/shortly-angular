angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  console.log('in LinksController!');
  $scope.data = {};
  // $scope.data.links = [{},{},{}];
  // console.log('$scope.data in LinksController', $scope.data);

  $scope.getLinks = function() {
    Links.getLinks()
      .then(function(resp) {
        $scope.data.links = resp.data;
        console.log('Services links response.data:', resp.data);
        console.log('Services links scope.data.links:', $scope.data.links);
      })
      .catch(function(error) {
        console.error(error);
      });
  };



});
