var app = require('app');
var ipc = require('ipc');
var bebop = require('node-bebop');
var browserWindow = require('browser-window');

require('crash-reporter').start();

var win = null;

app.on('ready', function() {

  win = new browserWindow({
    width: 800,
    height: 600,
    resizable: true,
    show:false
  });

  win.loadUrl('file://' + __dirname + '/www/index.html');

  var webContents = win.webContents;
  webContents.on('did-finish-load', function() {
    win.openDevTools();
    win.show();
  });

  win.on('closed', function() {
    win = null;
  });

  var drone = bebop.createClient();

  drone.connect(function() {
    console.log("\n\n ** Connected to Drone ** \n\n");

    ipc.on('electron-message', function(event, arg) {
      switch (arg) {
        case "connect":
        event.sender.send('electron-message-reply', 'connect');
        break;
        case "takeOff":
        console.log("\ntakeOff\n");
        drone.takeOff();
        break;
        case "land":
        console.log("\nland\n");
        drone.land();
        break;
        case "stop":
        console.log("\nstop\n");
        drone.stop();
        break;
        case "up":
        console.log("\nup\n");
        drone.up(5);
        break;
        case "down":
        console.log("\ndown\n");
        drone.down(5);
        break;
        case "left":
        console.log("\nleft\n");
        drone.left(5);
        break;
        case "right":
        console.log("\nright\n");
        drone.right(5);
        break;
        case "forward":
        console.log("\nforward\n");
        drone.forward(5);
        break;
        case "backward":
        console.log("\nbackward\n");
        drone.backward(5);
        break;
        case "clockwise":
        console.log("\nclockwise\n");
        drone.clockwise(5);
        break;
        case "counterClockwise":
        console.log("\ncounterClockwise\n");
        drone.counterClockwise(5);
        break;
        case "frontFlip":
        console.log("\nfrontFlip\n");
        break;
        case "backFlip":
        console.log("\nbackFlip\n");
        break;
        case "rightFlip":
        console.log("\nrightFlip\n");
        break;
        case "leftFlip":
        console.log("\nleftFlip\n");
        break;
        case "emergency":
        console.log("\nemergency\n");
        drone.emergency();
        break;
      }
    });

  });

});

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
