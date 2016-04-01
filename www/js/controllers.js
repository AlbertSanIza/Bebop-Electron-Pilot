var ipc = require('ipc');
//------------------------------------------------------------------------------
angular.module('starter.controllers', [])
//------------------------------------------------------------------------------
.controller('HomeCtrl', function($scope, $ionicModal) {

  $ionicModal.fromTemplateUrl('templates/modal/modal.html', {scope: $scope, animation: 'slide-in-up'}).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    console.log("Connect");
    ipc.send('electron-message', 'connect');
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
      ipc.send('electron-message', 'takeOff');
    }
  };
  $scope.land = function() {
    //Tells Bebop to land by setting the internal 'fly' state to false.
    console.log("Land");
    if($scope.bebop.takeOff == false) {
      $scope.bebop.takeOff = !$scope.bebop.takeOff;
      ipc.send('electron-message', 'land');
    }
  };
  $scope.stop = function() {
    //Sets all drone movement commands to 0, making it effectively hover in place.
    console.log("Stop");
    ipc.send('electron-message', 'stop');
  };
  $scope.up = function() {
    //Tells the drone to start gaining altitude
    console.log("Up");
    ipc.send('electron-message', 'up');
  };
  $scope.down = function() {
    //Tells the drone to start losing altitude
    console.log("Down");
    ipc.send('electron-message', 'down');
  };
  $scope.left = function() {
    //Tells the drone to bank left - controlling the roll using the camera as a reference point
    console.log("Left");
    ipc.send('electron-message', 'left');
  };
  $scope.right = function() {
    //Tells the drone to bank right - controlling the roll using the camera as a reference point
    console.log("Right");
    ipc.send('electron-message', 'right');
  };
  $scope.forward = function() {
    //Tells the drone to bank forward - controlling the pitch using the camera as a reference points
    console.log("Forward");
    ipc.send('electron-message', 'forward');
  };
  $scope.backward = function() {
    //Tells the drone to bank backwards - controlling the pitch using the camera as a reference point
    console.log("Backward");
    ipc.send('electron-message', 'backward');
  };
  $scope.clockwise = function() {
    //Tells the drone to begin spinning clockwise
    console.log("Clockwise");
    ipc.send('electron-message', 'clockwise');
  };
  $scope.counterClockwise = function() {
    //Tells the drone to begin spinning counterclockwise
    console.log("Counter Clockwise");
    ipc.send('electron-message', 'counterClockwise');
  };
  $scope.frontFlip = function() {
    //Tells the drone to frontFlip
    console.log("Front Flip");
    ipc.send('electron-message', 'frontFlip');
  };
  $scope.backFlip = function() {
    //Tells the drone to backFlip
    console.log("Back Flip");
    ipc.send('electron-message', 'backFlip');
  };
  $scope.rightFlip = function() {
    //Tells drone to rightflip
    console.log("Right Flip");
    ipc.send('electron-message', 'rightFlip');
  };
  $scope.leftFlip = function() {
    //Tells drone to leftflip
    console.log("Left Flip");
    ipc.send('electron-message', 'leftFlip');
  };
  $scope.emergency = function() {
    //Tell the drone to drop like a stone
    console.log("Emergency");
    ipc.send('electron-message', 'emergency');
    $scope.bebop.takeOff = true;
  };

  ipc.on('electron-message-reply', function(arg) {
    console.log(arg);
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
