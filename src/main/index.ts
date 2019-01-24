import { app } from 'electron';
import HadroElectronApp from './hadroElectronApp';

new HadroElectronApp(app).iniciarApp()


/* function createMainWindow() {

  const window = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
      preload: './preload.js'
    }
  });

  window.maximize();

  if (isDevelopment) {
    window.webContents.openDevTools();
  }

  window.loadURL("https://hadro.drogascalidad.com.co/");

  window.on('closed', () => {
    mainWindow = null;
  })

  window.webContents.on('devtools-opened', () => {
    window.focus();
    setImmediate(() => {
      window.focus()
    });
  })

  return window;
}

// quit application when all windows are closed
app.on('window-all-closed', () => {
  // on macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // on macOS it is common to re-create a window even after all windows have been closed
  if (mainWindow === null) {
    mainWindow = createMainWindow()
  }
})

// create main BrowserWindow when electron is ready
app.on('ready', () => {
  mainWindow = createMainWindow()

  const facturaService: FacturasService = new FacturasService();
  facturaService.imprimirFactura(323);

})

 */