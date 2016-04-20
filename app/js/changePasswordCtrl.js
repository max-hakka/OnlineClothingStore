onlineClothingStoreApp.controller('ChangePasswordCtrl', function ($scope, Service) {
//change the password of the user
$scope.not_changed=true;
$scope.changed=false;
  $scope.changePassword=function(){
      Service.changePassword($scope.oldPassword, $scope.newPassword);
      $scope.changed=true;
      $scope.not_changed=false;
  }

 });