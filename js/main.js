var show_tray_icon = function() {
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

  // // Bind a callback to item
  // var showMenuItem = new gui.MenuItem({
  //   label: "EmitIt",
  //   click: function() {
  //       var win = gui.Window.get();
  //   },
  //   key: "E",
  //   modifiers: "ctrl-alt",
  // });

  // Give it a menu
  var menu = new gui.Menu();
  // menu.append(showMenuItem);
  menu.append(quitMenuItem);
  tray.menu = menu;

}

//var gui = require('nw.gui');
show_tray_icon();
