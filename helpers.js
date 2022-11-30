"use strict";
exports.__esModule = true;
exports.cargarCliente = exports.cargarArreglo = void 0;
var claseMascota_1 = require("./claseMascota");
var claseCliente_1 = require("./claseCliente");
var claseCliente_2 = require("./claseCliente");
function cargarArreglo(elemento, arr) {
    var datos = elemento.split(',');
    var nombre = datos[0];
    var especie = datos[1];
    var nuevaMascota = new claseMascota_1["default"](nombre, especie, (0, claseCliente_2.crearId)(arr));
    arr.push(nuevaMascota);
    nuevaMascota.asignarEspecie();
    return arr;
}
exports.cargarArreglo = cargarArreglo;
function cargarCliente(elemento, arr, animal) {
    var datos = elemento.split(',');
    var nombre = datos[0];
    var telefono = Number(datos[1]);
    var visitas = Number(datos[2]);
    var nuevoCliente = new claseCliente_1["default"](nombre, telefono, visitas, (0, claseCliente_2.crearId)(arr), animal);
    arr.push(nuevoCliente);
    nuevoCliente.asignarCliente();
    nuevoCliente.mostrarMascotas();
    return arr;
}
exports.cargarCliente = cargarCliente;
