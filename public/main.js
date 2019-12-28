const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadURL('http://localhost:3000/')
  win.openDevTools()
}

app.on('ready', createWindow)