var app = angular.module('myApp', []);
app.controller('Democtrl', function ($scope,$http ) {
  
  $scope.employee = {

  };
  $scope.employees=[];
  $scope.Gender = ["male", "female", "others"];
  $scope.Country = ["India", "Russia", "Canada", "China", "United States"];
  $scope.State = ["Tamilnadu", "kerala", "karanataka"];

$scope.loadData=function(){
  $http.get("http://localhost:50167/api/values")
  .then(function(response) {
    debugger;
      $scope.content = response.data;
         
  });
}

$scope.loadData();
  $scope.submitform = function (empobj) {

    $http. Post({
      url: 'http://localhost:50167/api/values',
      
      
      data: empobj
  })
  .then(function(response) {
          debugger;
  }, 
  function(response) { // optional
          // failed
  });
 
}


});


