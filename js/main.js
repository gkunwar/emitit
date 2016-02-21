var show_main_window = function() {
  var gui = require('nw.gui');
  var mainWindow = gui.Window.open("http://lvh.me:3000/app/sign_in", {
    position: 'center',
    "toolbar": false,
    "frame": false,
    width: 400,
    height: 500,
  } );
  mainWindow.visible= true;
  return mainWindow;
}

var show_tray_icon = function(mainWindow) {
  //show icons

  // Load native UI library
  var gui = require('nw.gui');
  // Create a tray icon
  var tray = new gui.Tray({ title: 'Tray', icon: 'resources/icon.png' });


  // Bind a callback to item
  var quitMenuItem = new gui.MenuItem({
    label: "Quit",
    click: function() {
      gui.App.closeAllWindows();
      gui.App.quit();
    },
    key: "x",
    modifiers: "ctrl-alt",
  });

  // Bind a callback to item
  var showMenuItem = new gui.MenuItem({
    label: "EmitIt",
    click: function() {
      mainWindow.visible = !mainWindow.visible;
      mainWindow.show(mainWindow.visible);
    },
    key: "E",
    modifiers: "ctrl-alt",
  });

  // Give it a menu
  var menu = new gui.Menu();
  menu.append(showMenuItem);
  menu.append(quitMenuItem);
  tray.menu = menu;

}

var mainWindow = show_main_window();
show_tray_icon(mainWindow);
