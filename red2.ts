import Clientes from "./claseCliente";
import Proveedores from "./proveedores";
import Sucursales from "./sucursales";
import GestorDeArchivos from "./gestordearchivos";
import Mascotas from "./claseMascota";
import * as ReadLineSync from "readline-sync";
import { cargarCliente, cargarArreglo } from "./helpers";
import { crearId } from "./claseCliente";



class Red {
            private nombre : string;
            protected listaSucursales : Sucursales[];
            protected listaClientes : Clientes [];
            protected listaProveedores : Proveedores[];
    

    public constructor (nombre : string, listaSucursales : Sucursales[] , listaClientes : Clientes[] , listaProveedores : Proveedores[] ){
            this.nombre = nombre;
            this.listaSucursales = listaSucursales;
            this.listaClientes = listaClientes;
            this.listaProveedores = listaProveedores;

            }
            public getNombre():string{
                return this.nombre;
            }

            public getListaSucursales(): Sucursales []{
                return this.listaSucursales;
            }
            
            public getListaClientes(): Clientes []{
                return this.listaClientes;
            }
            
            public getListaProveedores(): Proveedores []{
                return this.listaProveedores;

            }
            
            public setlistaSucursales(nuevaListaSucursales): void{
                this.listaSucursales=nuevaListaSucursales;
            }
            public setListaCliente(nuevaListaCliente): void{
                this.listaClientes= nuevaListaCliente;

            }


            

        }



    function cargarListaProveedores(elemento: string, arr: Array<Proveedores>) : Array<Proveedores> { 
            let datos: string[] = elemento.split(',');
            let nombre: string = datos[0];
            let telefono: string = datos[1];
            
                
            let nuevoProveedor : Proveedores = new Proveedores(crearId(arr), nombre, telefono); 
            
            arr.push(nuevoProveedor);
            
            return arr;
            }
            
            
            let listaProveedores : GestorDeArchivos = new GestorDeArchivos("proveedores.txt");
            
            let proveedor : Array<Proveedores> = [];
            
            for(let i = 0; i <listaProveedores.getArregloString().length; i++) { 
                
            cargarListaProveedores(listaProveedores.getArregloString()[i], proveedor);
            
            
            }
        
    function crearProveedor(arr:Array<Proveedores> ) { 
          
            let nombre = ReadLineSync.question("Ingrese el nombre del proveedor: ");
            let telefono= ReadLineSync.question("Ingrese el telefono del nuevo proveedor: ");
    
            let proveedorCreado : Proveedores = new Proveedores (crearId(arr), nombre, telefono);
        
            arr.push(proveedorCreado);
            return(arr);
            
            }
            
           
       
        
    function modificarProveedor(arr:Array<Proveedores>, posicion: number){
            let identificador: string= crearId(arr);
            let nombre: string = ReadLineSync.question("Ingrese el nuevo nombre del proveedor: ");
            let telefono: string = ReadLineSync.question("Ingrese el nuevo telefono del proveedor: ");
    
            let proveedorModificado : Proveedores = new Proveedores (identificador, nombre, telefono);
        
            delete arr[posicion];
            arr[posicion]= proveedorModificado;
                
            }
        
        
    function borrarProveedor(proveedor: Array<Proveedores>, posicion:number):void{

            delete proveedor[posicion];
           
            }


    //-----------------------------------------------------------------------------------------------------
    //FUNCIONES SUCURSALES

    function cargarListaSucursales(elemento: string, arr: Array<Sucursales>) : Array<Sucursales> { 
            let datos: string[] = elemento.split(',');
            let nombre: string = datos[0];
            let direccion: string = datos[1];
            
                
            let nuevaSucursal : Sucursales = new Sucursales(crearId(arr), nombre, direccion); 
            
            arr.push(nuevaSucursal);
            
            return arr;
            }
            
        
            
            let listaSucursales : GestorDeArchivos = new GestorDeArchivos("sucursales.txt");
            
            let sucursal : Array<Sucursales> = [];
            
            for(let i = 0; i <listaSucursales.getArregloString().length; i++) { 
            cargarListaSucursales(listaSucursales.getArregloString()[i], sucursal);
            
            
            }

        
    function crearSucursal(arr:Array<Sucursales> ) { 
          
            let nombre = ReadLineSync.question("Ingrese el nombre de la nueva sucursal: ");
            let direccion= ReadLineSync.question("Ingrese la direccion de la nueva sucursal: ");
    
            let sucursalCreada: Sucursales = new Sucursales (crearId(arr), nombre, direccion);
        
            arr.push(sucursalCreada);
            return(arr);
            
            }
            
           
        
    function modificarSucursal(arr:Array<Sucursales>, posicion: number){
                let identificador: string= crearId(arr);
                let nombre: string = ReadLineSync.question("Ingrese el nuevo nombre de la sucursal: ");
                let direccion: string = ReadLineSync.question("Ingrese la nueva direccion de la sucursal: ");
        
                let sucursalModificada : Sucursales = new Sucursales (identificador, nombre, direccion);
        
                delete arr[posicion];
                arr[posicion]= sucursalModificada;
                
                }
        
        
    function borrarSucursal(sucursal: Array<Sucursales>, posicion:number):void{
                
                delete sucursal[posicion];
                
            }



// // CÓDIGO PARA QUE SE MUESTRE EL ARREGLO MASCOTA

            let datosMascota : GestorDeArchivos = new GestorDeArchivos("mascotas.txt");


            let animal : Array<Mascotas> = [];


            for(let i = 0; i <datosMascota.getArregloString().length; i++) { 
                cargarArreglo(datosMascota.getArregloString()[i], animal);
                crearId(animal);
                

            }




   //  CÓDIGO PARA QUE SE MUESTRE EL ARREGLO CLIENTES

            let datosClientes : GestorDeArchivos = new GestorDeArchivos("cliente.txt");


            let listaPersonas : Array<Clientes> = [];


            for(let i = 0; i < datosClientes.getArregloString().length; i++) { 
                cargarCliente(datosClientes.getArregloString()[i], listaPersonas ,animal);
                crearId(listaPersonas);
                
                
            }
      
            
    //CONSOLE PARA VER LISTAS

            //SUCURSALES
            console.log(listaSucursales);
            //PROVEEDORES
            console.log(listaProveedores);
            //MASCOTAS
            console.log(animal);
            //CLIENTES
            console.log(listaPersonas);
    

    //-----------------------------------------------------------------------------------------------------

    //CONSOLE PARA PROBAR FUNCIONES EN SUCURSAL

            // console.log(sucursal);
            // borrarSucursal(sucursal, 0);
            // console.log(sucursal);
            // modificarSucursal(sucursal,1);
            // console.log (sucursal);
            // crearSucursal(sucursal);
            // console.log(sucursal);
   

    
  //-------------------------------------------------------------------------------------------------------------

    //CONSOLE PARA PROBAR FUNCIONES EN PROVEEDORES
  

            // console.log(proveedor);
            // borrarProveedor(proveedor, 0);
            // console.log(proveedor);
            // modificarProveedor(proveedor,1);
            // console.log (proveedor);
            // crearProveedor(proveedor);
            // console.log(proveedor);