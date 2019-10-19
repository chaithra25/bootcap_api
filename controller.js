

var app = angular.module('myApp', []);
app.controller('Democtrl', function ($scope, $http) {

  $scope.employee = {

  };
  $scope.employees = [];
  $scope.Gender = ["male", "female", "others"];
  $scope.Country = ["India", "Russia", "Canada", "China", "United States"];
  $scope.State = ["Tamilnadu", "kerala", "karanataka"];
  var url = 'http://localhost:50167/api/values';
  $scope.loadData = function (empobj) {

    $http({
      method: 'GET',
      url: 'http://localhost:8087/api/values',
      data:empobj,
    })
      .then(function (response) {


        $scope.content = response.data;
        debugger;
      });
  }
  $scope.loadData();

  $scope.submitform = function (empobj) {
    debugger;

    $http({
      method: 'POST',
      url: 'http://localhost:8087/api/values',
      data: empobj,
    })
      .then(function (response) {

        debugger;
      },
        function (response) { // optional
          // failed
        });

  }
  $scope.loadData = function (empobj) {

    $http({
      method: 'put',
      url: 'http://localhost:50167/api/values/',
      data: empobj,
    })
      .then(function (response) {

        debugger;
        $scope.content = response.data;
      });
  }
  $scope.loadData();
  $scope.loadData = function (empobj) {

    $http({
      method: 'delete',
      url: 'http://localhost:50167/api/values/',
      data: empobj,
    })
      .then(function (response) {
        debugger;
        $scope.content = response.data;

      });
  }
  $scope.loadData();
});


