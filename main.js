"use strict";
exports.__esModule = true;
var fs = require("fs");
var helpers_1 = require("./helpers");
var claseCliente_1 = require("./claseCliente");
var GestorDeArchivos = /** @class */ (function () {
    function GestorDeArchivos(txtFileLocation) {
        var archivoTxt = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';');
    }
    GestorDeArchivos.prototype.mostrarArreglo = function () {
        console.log(this.arregloString);
    };
    GestorDeArchivos.prototype.getArregloString = function () {
        return this.arregloString;
    };
    return GestorDeArchivos;
}());
var datosMascota = new GestorDeArchivos("mascotas.txt");
console.log(datosMascota);
var animal = [];
for (var i = 0; i < datosMascota.getArregloString().length; i++) {
    (0, helpers_1.cargarArreglo)(datosMascota.getArregloString()[i], animal);
    (0, claseCliente_1.crearId)(animal);
}
console.log(animal);
var datosClientes = new GestorDeArchivos("cliente.txt");
console.log(datosClientes);
var listaPersonas = [];
for (var i = 0; i < datosClientes.getArregloString().length; i++) {
    (0, helpers_1.cargarCliente)(datosClientes.getArregloString()[i], listaPersonas, animal);
    (0, claseCliente_1.crearId)(listaPersonas);
}
console.log(listaPersonas);
