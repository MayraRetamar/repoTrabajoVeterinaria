"use strict";
exports.__esModule = true;
var Proveedores = /** @class */ (function () {
    function Proveedores(id, nombre, telefono) {
        this.id = "P" + id;
        this.nombre = nombre;
        this.telefono = telefono;
    }
    Proveedores.prototype.getId = function () {
        return this.id;
    };
    Proveedores.prototype.getNombre = function () {
        return this.nombre;
    };
    Proveedores.prototype.getTelefono = function () {
        return this.telefono;
    };
    return Proveedores;
}());
exports["default"] = Proveedores;
