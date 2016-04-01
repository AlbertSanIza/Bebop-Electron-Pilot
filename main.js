var app = require('app');
var ipc = require('ipc');
var cylon = require('cylon');
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

  ipc.on('electron-message', function(event, arg) {
    switch (arg) {
      case "connect":
      var drone = bebop.createClient();
      event.sender.send('electron-message-reply', 'connect');
      break;
      case "takeOff":
      break;
      case "land":
      break;
      case "stop":
      break;
      case "up":
      break;
      case "downs":
      break;
      case "left":
      break;
      case "right":
      break;
      case "stop":
      break;
      case "stop":
      break;
      case "stop":
      break;
      case "stop":
      break;
      case "stop":
      break;
      case "stop":
      break;
      case "stop":
      break;
      case "stop":
      break;
      case "stop":
      break;
    }
  });

});

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
