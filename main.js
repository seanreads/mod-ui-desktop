const { app, BrowserWindow } = require('electron')
const path = require('path')

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'modWindow.js')
    }
  })

  mainWindow.loadURL('http://moddwarf.local')

  //mainWindow.loadURL(path.join('file://',__dirname,'index.html'))

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


