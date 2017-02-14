angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {

  $scope.newstaff = {};
  $scope.userfound = 0;
  $scope.FindUser = function(){
    console.log($scope.newstaff);
    $http({method: 'GET', url:"https://api.github.com/users/"+$scope.newstaff.username})
      .success( function( data )
      {
        $scope.userfound = 1;
        $scope.user_profile = data;
        
      })
      .error(function(){
        console.log("An error Occured")
      })
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
