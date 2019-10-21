debugger;
var app = angular.module('myApp', []);
app.controller('Democtrl', function ($scope, $http) {

  $scope.employee = {

  };
  $scope.employees = [];
  $scope.Gender = ["male", "female", "others"];
  $scope.Country = ["India", "Russia", "Canada", "China", "United States"];
  $scope.State= ["Tamilnadu", "kerala", "karanataka"];

  var url = "http://localhost:8087/api/values";
  $scope.loadData = function (empobj) {

    $http({
      method: 'GET',
      url: 'url',
      data:empobj,
    })
      .then(function (response) {


        $scope.content = response.data;
        debugger;
      });
  }
  $scope.loadData();

  $scope.submitform = function (empobj){
    debugger;
    $scope.createUser = function() {

  debugger;
    $http({
      method: 'POST',
      url: 'url',
      data: empobj,
    })
      .then(function (response) {
      debugger;
      $scope.content = response.data;
       
        });

  } 
};
$scope.updateUser = function() {

  
  $http({

    method: 'PUT',
    url: 'url' + $scope.content.id,
    data: empobj,

  }).then(function successCallback(response) {

    alert("User has updated Successfully")

  }, function errorCallback(response) {

    alert("Error. while updating user Try Again!");

  });

};
$scope.deleteUser = function(user) {

  $http({

    method: 'DELETE',
    url: 'url' +$scope.content.id,


  }).then(function successCallback(response) {

    alert("User has deleted Successfully");
    var Employees = $scope.content.EmployeeOf(content);
    $scope.content.splice(employee, 1);

  }, function errorCallback(response) {

    alert("Error. while deleting user Try Again!");

  });

};



});


