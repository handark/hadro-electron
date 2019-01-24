import { BrowserWindow, App } from "electron";

const esDesarrollo = process.env.NODE_ENV !== 'production';

class HadroElectronApp {

  ventanaPrincipal: BrowserWindow | null;
  aplicacion: App;

  constructor(app: App) {
    this.aplicacion = app;
  }

  private alCerrarTodasLasVentanas() {
    if (process.platform !== 'darwin') {
      this.aplicacion.quit();
    }
  }
    
  private crearVentanaPrincipal() {

    this.ventanaPrincipal = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
          nodeIntegration: false,
          preload: './preload.js'
        }
    });

    this.ventanaPrincipal.maximize();
    this.ventanaPrincipal.loadURL(`https://hadro.drogascalidad.com.co`);

    if(esDesarrollo) this.ventanaPrincipal.webContents.openDevTools();
    
    this.ventanaPrincipal.on('closed', () => {
      this.ventanaPrincipal = null;
    });
  }

  iniciarApp() {
    this.aplicacion.on('window-all-closed', this.alCerrarTodasLasVentanas)
    this.aplicacion.on('ready', this.crearVentanaPrincipal);
    this.aplicacion.on('activate', this.alActivarseApp);    
  } 

  private alActivarseApp() {
    if (this.ventanaPrincipal === null) {
        this.crearVentanaPrincipal();
    }
  }   

}

export default HadroElectronApp;