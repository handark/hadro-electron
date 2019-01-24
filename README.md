# Hadro electron

### Autor: Jose Luis Orozco - Drovancal SAS

> Cliente de escritorio para hadro nube. [`hadro-electron`]
(https://github.com/handark/hadro-electron).

Gracias al poder de `electron-webpack` esta aplicacion es posible...

* Usa [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) para desarrollo
* HMR para `renderer` y procesos `main` 
* Usa [`babel-preset-env`](https://github.com/babel/babel-preset-env) que se configura automáticamente en función de su versión `electron`
* Usa [`electron-builder`](https://github.com/electron-userland/electron-builder) para compilar y empaquetar la aplicacion.

Mas documentacion en [`electron-webpack'](https://webpack.electron.build/).

## Scripts de desarrollo

```bash
# ejecuta la aplicación en modo desarrollo
yarn dev

# compila el codigo con webpack y crea una salida en el directorio ./dist
yarn compile

# `yarn compile` & crea una compilacion con electron-builder
yarn dist

# `yarn compile` & crea un paquete compilado con electron-builder
yarn dist:dir
```
