const { app, BrowserWindow } = require('electron')

let win

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    // frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadURL('http://localhost:3000/')
  win.openDevTools()
}

app.on('ready', createWindow)