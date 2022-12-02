"use strict";
//import GestorDeArchivos from "./gestorArchivos";
//import * as ReadLineSync from "readline-sync"
exports.__esModule = true;
var Sucursales = /** @class */ (function () {
    function Sucursales(id, nombre, direccion) {
        this.id = "S" + id;
        this.nombre = nombre;
        this.direccion = direccion;
    }
    Sucursales.prototype.getId = function () {
        return this.id;
    };
    Sucursales.prototype.getNombre = function () {
        return this.nombre;
    };
    Sucursales.prototype.getDireccion = function () {
        return this.direccion;
    };
    return Sucursales;
}());
exports["default"] = Sucursales;
