const { app, BrowserWindow, Menu, MenuItem, Tray } = require('electron')
const path = require('path')
const { getMainMenu, getTrayMenu } = require('./modMenu')

//console.log(mainMenu, trayMenu)

/* Put Node code here for the main process */

let mainWindow, tray; // Here and below put code for the mainWindow renderer process

function createTray () {
  tray = new Tray('modLogoTemplate@2x.png')
  tray.setToolTip('MOD Desktop')
  tray.setContextMenu(getTrayMenu(mainWindow))
}

function createWindow() {

  createTray()

  mainWindow = new BrowserWindow({
    width: 1000, height: 800,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'modWindow.js')
    }
  })

  mainWindow.loadURL('http://moddwarf.local')

  mainWindow.webContents.openDevTools() // Remove in production

  Menu.setApplicationMenu(getMainMenu(app, mainWindow))

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


