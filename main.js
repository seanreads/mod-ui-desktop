const { app, BrowserWindow, Menu, MenuItem } = require('electron')
const path = require('path')

/* Put Node code here for the main process */

let mainWindow; // Here and below put code for the mainWindow renderer process

let mainMenu = Menu.buildFromTemplate([
  {
    label: app.name,
    submenu: [
      {label: 'About MOD'},
      {type: 'separator'},
      {label: 'Preferences...', accelerator: 'CommandOrControl+,'},
      {type: 'separator'},
      {label: 'Quit', accelerator: 'CommandOrControl+Q', click: () => { app.quit() }}
    ]
  },
  {
    label: 'Pedalboards',
    submenu: [
      {label: 'New', accelerator: 'CommandOrControl+N'},
      {label: 'Open...', accelerator: 'CommandOrControl+O'},
      {label: 'Open Recent', 
        submenu: [ {label: 'Test 1'}, {label: 'Test 2'}, {label: 'Test 3'}]
      },
      {type: 'separator'},
      {label: 'Save', accelerator: 'CommandOrControl+S'},
      {label: 'Save As...',  accelerator: 'CommandOrControl+Shift+S'}
    ]
  },
  {
    label: 'Snapshots',
    submenu: [
      {label: 'New'}
    ]
  },
  {
    label: 'Banks',
    submenu: [
      {label: 'New'}
    ]
  },
  {
    label: 'View',
    submenu: [
      {label: 'File Manager'},
      {label: 'Plugin Store'}
    ]
  }
])

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000, height: 800,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'modWindow.js')
    }
  })

  mainWindow.loadURL('http://moddwarf.local')

  mainWindow.webContents.openDevTools() // Remove in production

  Menu.setApplicationMenu(mainMenu)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})


