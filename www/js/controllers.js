const ipcRenderer = require('electron').ipcRenderer;
//------------------------------------------------------------------------------
angular.module('starter.controllers', [])
//------------------------------------------------------------------------------
.controller('HomeCtrl', function($scope, $ionicModal) {

  $ionicModal.fromTemplateUrl('templates/modal/modal.html', {scope: $scope, animation: 'slide-in-up'}).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    console.log("Connect");
    ipcRenderer.send('electron-message', 'connect');
  };

  $scope.closeModal = function() {
    console.log("Disconnect");
    $scope.modal.hide();
  };

  $scope.bebop = {
    takeOff: true
  };

  $scope.takeOff = function() {
    //Tells Bebop to start flying by setting the internal 'fly' state to true.
    console.log("Take Off");
    if($scope.bebop.takeOff == true) {
      $scope.bebop.takeOff = !$scope.bebop.takeOff;
      ipcRenderer.send('electron-message', 'takeOff');
    }
  };
  $scope.land = function() {
    //Tells Bebop to land by setting the internal 'fly' state to false.
    console.log("Land");
    if($scope.bebop.takeOff == false) {
      $scope.bebop.takeOff = !$scope.bebop.takeOff;
    }
  };
  $scope.stop = function() {
    //Sets all drone movement commands to 0, making it effectively hover in place.
    console.log("Stop");
  };
  $scope.up = function() {
    //Tells the drone to start gaining altitude
    console.log("Up");
  };
  $scope.down = function() {
    //Tells the drone to start losing altitude
    console.log("Down");
  };
  $scope.left = function() {
    //Tells the drone to bank left - controlling the roll using the camera as a reference point
    console.log("Left");
  };
  $scope.right = function() {
    //Tells the drone to bank right - controlling the roll using the camera as a reference point
    console.log("Right");
  };
  $scope.forward = function() {
    //Tells the drone to bank forward - controlling the pitch using the camera as a reference points
    console.log("Forward");
  };
  $scope.backward = function() {
    //Tells the drone to bank backwards - controlling the pitch using the camera as a reference point
    console.log("Backward");
  };
  $scope.clockwise = function() {
    //Tells the drone to begin spinning clockwise
    console.log("Clockwise");
  };
  $scope.counterClockwise = function() {
    //Tells the drone to begin spinning counterclockwise
    console.log("Counter Clockwise");
  };
  $scope.frontFlip = function() {
    //Tells the drone to frontFlip
    console.log("Front Flip");
  };
  $scope.backFlip = function() {
    //Tells the drone to backFlip
    console.log("Back Flip");
  };
  $scope.rightFlip = function() {
    //Tells drone to rightflip
    console.log("Right Flip");
  };
  $scope.leftFlip = function() {
    //Tells drone to leftflip
    console.log("Left Flip");
  };
  $scope.emergency = function() {
    //Tell the drone to drop like a stone
    console.log("Emergency");
    $scope.bebop.takeOff = true;
  };

  ipcRenderer.on('electron-message-reply', function(event, arg) {
    switch (arg) {
      case "connect":
      $scope.modal.show();
      break;
    }

  });

})
//------------------------------------------------------------------------------
.controller('InfoCtrl', function($scope) {
})
//------------------------------------------------------------------------------
