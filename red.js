"use strict";
exports.__esModule = true;
var proveedores_1 = require("./proveedores");
var sucursales_1 = require("./sucursales");
var gestordearchivos_1 = require("./gestordearchivos");
var ReadLineSync = require("readline-sync");
var helpers_1 = require("./helpers");
var claseCliente_1 = require("./claseCliente");
var Red = /** @class */ (function () {
    function Red(nombre, listaSucursales, listaClientes, listaProveedores) {
        this.nombre = nombre;
        this.listaSucursales = listaSucursales;
        this.listaClientes = listaClientes;
        this.listaProveedores = listaProveedores;
    }
    Red.prototype.getNombre = function () {
        return this.nombre;
    };
    Red.prototype.getListaSucursales = function () {
        return this.listaSucursales;
    };
    Red.prototype.getListaClientes = function () {
        return this.listaClientes;
    };
    Red.prototype.getListaProveedores = function () {
        return this.listaProveedores;
    };
    Red.prototype.setlistaSucursales = function (nuevaListaSucursales) {
        this.listaSucursales = nuevaListaSucursales;
    };
    Red.prototype.setListaCliente = function (nuevaListaCliente) {
        this.listaClientes = nuevaListaCliente;
    };
    return Red;
}());
function cargarListaProveedores(elemento, arr) {
    var datos = elemento.split(',');
    var nombre = datos[0];
    var telefono = datos[1];
    var nuevoProveedor = new proveedores_1["default"]((0, claseCliente_1.crearId)(arr), nombre, telefono);
    arr.push(nuevoProveedor);
    return arr;
}
var listaProveedores = new gestordearchivos_1["default"]("proveedores.txt");
var proveedor = [];
for (var i = 0; i < listaProveedores.getArregloString().length; i++) {
    cargarListaProveedores(listaProveedores.getArregloString()[i], proveedor);
}
function crearProveedor(arr) {
    var nombre = ReadLineSync.question("Ingrese el nombre del proveedor: ");
    var telefono = ReadLineSync.question("Ingrese el telefono del nuevo proveedor: ");
    var proveedorCreado = new proveedores_1["default"]((0, claseCliente_1.crearId)(arr), nombre, telefono);
    arr.push(proveedorCreado);
    return (arr);
}
function modificarProveedor(arr, posicion) {
    var identificador = (0, claseCliente_1.crearId)(arr);
    var nombre = ReadLineSync.question("Ingrese el nuevo nombre del proveedor: ");
    var telefono = ReadLineSync.question("Ingrese el nuevo telefono del proveedor: ");
    var proveedorModificado = new proveedores_1["default"](identificador, nombre, telefono);
    delete arr[posicion];
    arr[posicion] = proveedorModificado;
}
function borrarProveedor(proveedor, posicion) {
    delete proveedor[posicion];
}
//-----------------------------------------------------------------------------------------------------
//FUNCIONES SUCURSALES
function cargarListaSucursales(elemento, arr) {
    var datos = elemento.split(',');
    var nombre = datos[0];
    var direccion = datos[1];
    var nuevaSucursal = new sucursales_1["default"]((0, claseCliente_1.crearId)(arr), nombre, direccion);
    arr.push(nuevaSucursal);
    return arr;
}
var listaSucursales = new gestordearchivos_1["default"]("sucursales.txt");
var sucursal = [];
for (var i = 0; i < listaSucursales.getArregloString().length; i++) {
    cargarListaSucursales(listaSucursales.getArregloString()[i], sucursal);
}
function crearSucursal(arr) {
    var nombre = ReadLineSync.question("Ingrese el nombre de la nueva sucursal: ");
    var direccion = ReadLineSync.question("Ingrese la direccion de la nueva sucursal: ");
    var sucursalCreada = new sucursales_1["default"]((0, claseCliente_1.crearId)(arr), nombre, direccion);
    arr.push(sucursalCreada);
    return (arr);
}
function modificarSucursal(arr, posicion) {
    var identificador = (0, claseCliente_1.crearId)(arr);
    var nombre = ReadLineSync.question("Ingrese el nuevo nombre de la sucursal: ");
    var direccion = ReadLineSync.question("Ingrese la nueva direccion de la sucursal: ");
    var sucursalModificada = new sucursales_1["default"](identificador, nombre, direccion);
    delete arr[posicion];
    arr[posicion] = sucursalModificada;
}
function borrarSucursal(sucursal, posicion) {
    delete sucursal[posicion];
}
// // CÓDIGO PARA QUE SE MUESTRE EL ARREGLO MASCOTA
var datosMascota = new gestordearchivos_1["default"]("mascotas.txt");
var animal = [];
for (var i = 0; i < datosMascota.getArregloString().length; i++) {
    (0, helpers_1.cargarArreglo)(datosMascota.getArregloString()[i], animal);
    (0, claseCliente_1.crearId)(animal);
}
//  CÓDIGO PARA QUE SE MUESTRE EL ARREGLO CLIENTES
var datosClientes = new gestordearchivos_1["default"]("cliente.txt");
var listaPersonas = [];
for (var i = 0; i < datosClientes.getArregloString().length; i++) {
    (0, helpers_1.cargarCliente)(datosClientes.getArregloString()[i], listaPersonas, animal);
    (0, claseCliente_1.crearId)(listaPersonas);
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
