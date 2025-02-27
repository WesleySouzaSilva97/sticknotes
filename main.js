console.log("Electron processo principal")

// Importação dos recursos do framework
// app se refere a aplicação 
// BrowserWindow (criação da janela)
const { app, BrowserWindow } = require('electron/main')

// Janela principal
let win
const createWindow = () => {
win = new BrowserWindow({
    width: 1010, // Largura
     height: 720, // Altura
    //frame: false
    // resizable: false, // Maximizar
    // minimizable: false, // Minimizar
    // closable: false, //fecheible
    // autoHideMenuBar: true // fesconder o menu
  })

  // carregar o documneto na janela
  win.loadFile('./src/views/index.html')
}

// inicialização da aplicação 
app.whenReady().then(() => {
  createWindow()

  // so ativar a janela principal se nenhuma outra estiver ativa
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

// se o sistema não for MAC encerrar  a aplicação quando a janela for fechada
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})