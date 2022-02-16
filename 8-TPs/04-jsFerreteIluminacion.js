/*4.    Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.  Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.  Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.  Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.  Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.  Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidadLamparita;
    var descuento;
    var calcularPrecio;
    var marca;
    var precioFinal;
    var iibb;
    var precioBase;
    var precioBruto;
    var impuesto;

    cantidadLamparita= document.getElementById('txtIdCantidad').value;
    marca = document.getElementById('Marca').value;

    cantidadLamparita=parseInt(cantidadLamparita);
    descuento=parseInt(descuento);
    
    precioBase=35;

   switch (cantidadLamparita)
   {
    case 1:
    case 2:
        descuento= 0;
        break;
    case 3:
        descuento=5;
        if(marca== "ArgentinaLuz")
        {
            descuento=15;
        }
        else
        {
            if(marca=="FelipeLamparas")
            {
                descuento=10;

            }
        }
        break;
    case 4:
        descuento=20;
        if (marca == "ArgentinaLuz" || "FelipeLamparas")
        {
            descuento=25;
        }
       
        break;
    case 5:
         descuento=30;
        if(marca == "ArgentinaLuz")
        {
            descuento= 40;
      
       }
        break;
    default:
     descuento = 50
        break;
    /*
       switch (marca)
       {
        case "ArgentinaLuz":
            descuento=15;
            break;
        case "FelipeLamparas":
            descuento= 10;
            break;
            default:
            descuento=5;
            break;
       }
       break;
    case 4:
         switch (marca)
         {
         case "ArgentinaLuz":
         case "FelipeLamparas" :
         descuento =25;
         break;
         defautl:
         descuento=20;
         break;
     }
          break;
    case 5:
        switch(marca)
        {
        case "ArgentinaLuz"
            descuento= 40;
            break;
            default:
            descuento=30;
            break;*/

   }
   precioBruto= precioBase * cantidadLamparita;
calcularPrecio = precioBruto / 100 *descuento ;
    
   precioFinal = precioBruto - calcularPrecio;
  
   
   if (precioFinal> 120)
   {
    impuesto= precioFinal *iibb /100;
    precioFinal = precioFinal + impuesto;
   alert("Usted pago: $" + impuesto + " de IIBB" );
   }
   

document.getElementById('txtIdprecioDescuento').value = precioFinal;

} 
