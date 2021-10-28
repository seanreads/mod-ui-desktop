const { app, BrowserWindow } = require('electron')
const path = require('path')

/* Put Node code here for the main process */

let mainWindow; // Here and below put code for the mainWindow renderer process

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


