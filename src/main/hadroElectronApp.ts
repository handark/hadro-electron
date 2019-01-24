import {  BrowserWindow } from 'electron';
import { FacturasService } from '../servicios/facturasService';
import path from 'path'

//const isDevelopment = process.env.NODE_ENV !== 'production';

export default class HadroElectronApp {

  static mainWindow: Electron.BrowserWindow;
  static isDevelopment = process.env.NODE_ENV !== 'production';
  static application: Electron.App;
  static mainURL: string = `https://hadro.drogascalidad.com.co`
  static facturaService: FacturasService = new FacturasService();

  private static onWindowAllClosed() {
    if (process.platform !== 'darwin') {
      HadroElectronApp.application.quit();
    }
  }
    
  private static create() {

    HadroElectronApp.facturaService.imprimirFactura(852);

    HadroElectronApp.mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
          nodeIntegration: false,
          preload: './preload.js'
        },
        icon: path.join(__dirname, 'static/icons/logo-hadro-electron.png')
    });

    HadroElectronApp.mainWindow.maximize();
    if(HadroElectronApp.isDevelopment) HadroElectronApp.mainWindow.webContents.openDevTools();
    HadroElectronApp.mainWindow.loadURL(HadroElectronApp.mainURL);

    HadroElectronApp.mainWindow.on('closed', () => {
      HadroElectronApp.mainWindow.destroy();
    });
  }

  static onReady(app: Electron.App, browserWindow: typeof BrowserWindow) {

    HadroElectronApp.application = app;
    HadroElectronApp.application.on('window-all-closed', HadroElectronApp.onWindowAllClosed)
    HadroElectronApp.application.on('ready', HadroElectronApp.create);
    HadroElectronApp.application.on('activate', HadroElectronApp.onActivated);

    
    
  } 

  private static onActivated() {
    if (HadroElectronApp.mainWindow === null) {
        HadroElectronApp.create();
    }
  }   

}