"use strict";
exports.__esModule = true;
var Mascotas = /** @class */ (function () {
    function Mascotas(nombre, especie, id) {
        this.nombre = nombre;
        this.especie = especie;
        this.id = id;
    }
    Mascotas.prototype.getNombre = function () {
        return this.nombre;
    };
    Mascotas.prototype.getEspecie = function () {
        return this.especie;
    };
    Mascotas.prototype.getId = function () {
        return this.id;
    };
    Mascotas.prototype.setEspecie = function (nuevaEspecie) {
        this.especie = nuevaEspecie;
    };
    Mascotas.prototype.asignarEspecie = function () {
        if (this.especie === "perro" || this.especie === "gato") {
            console.log(this.especie);
        }
        else {
            this.setEspecie("exótica");
        }
    };
    return Mascotas;
}());
exports["default"] = Mascotas;
