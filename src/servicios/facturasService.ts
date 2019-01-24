class FacturasService {

  constructor() {

  }

  listarFacturasPendientesPorImprimir() {
    console.log("Listar Facturas pendientes")
  }

  imprimirFactura(facnum:number) {
    console.log(`Imprimir Factura ${facnum}`)


/*     printer.init({
      type: 'epson',
      interface: '/dev/usb/lp0'
    });
 */
    /* 
  var c = pedido[0]
  var pedidoPrint = "Pedido: " + c.cotnum + "\t\tANTES: 19:30" +
      "\nSector:\t" + c.clisec +
      "\nTelefo:\t" + c.cotven.substring(0,32) +
      "\nObserv:\t" + c.cotobs + "\n------------------------------------------"

  for(var i=0;i<pedido.length;i++){
      pedidoPrint += "\n" + pedido[i].pronom.substring(0,23)
      pedidoPrint += "\t\t" + pedido[i].proent + "f" + pedido[i].profra
      pedidoPrint += "\n   " + pedido[i].prolab.substring(0,34)
  }
  pedidoPrint +=  "\n------------------------------------------"
  pedidoPrint +=  "\n" + pedido.length + " Productos\n\n\n\n\n \x1B@\x0A\x0D\x1Bi\x0A\x0D"

  printer.printDirect({data:pedidoPrint
      , printer: impresora//"EPSON TM-U220 Receipt"
      , type: "RAW"
      , success:function(){
          res.json('ok')
      }
      , error:function(err){console.log(err);res.json(err)}
  });
 */

  }

}

export {
  FacturasService
}