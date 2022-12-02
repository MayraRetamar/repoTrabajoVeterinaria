"use strict";
exports.__esModule = true;
exports.crearId = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(nombre, telefono, visitas, id, listaMascota) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.visitas = visitas;
        this.listaMascota = listaMascota;
        this.id = id;
    }
    Cliente.prototype.getArregloString = function () {
        throw new Error("Method not implemented.");
    };
    Cliente.prototype.getId = function () {
        return this.id;
    };
    Cliente.prototype.getVisitas = function () {
        return this.visitas;
    };
    Cliente.prototype.getListaMascota = function () {
        return this.listaMascota;
    };
    Cliente.prototype.setVisitas = function (nuevaVisitas) {
        this.visitas = nuevaVisitas;
    };
    Cliente.prototype.asignarCliente = function () {
        if (this.visitas >= 0 && this.visitas <= 5) {
            this.setVisitas("Con 5 visitas usted ser\u00E1 cliente VIP. Lleva ".concat(this.visitas, " Visitas. Lo esperamos pronto"));
        }
        else {
            this.setVisitas("Ha alcanzado las 5 visitas. Felicidades usted es un cliente VIP");
        }
    };
    Cliente.prototype.mostrarMascotas = function () {
        console.log(this.nombre);
        for (var i = 0; i < this.listaMascota.length; i++) {
            console.log(this.listaMascota[i].getNombre());
        }
    };
    Cliente.prototype.setTelefono = function (celular) {
        this.telefono = celular;
    };
    return Cliente;
}());
exports["default"] = Cliente;
;
function crearId(lista) {
    var id = " ";
    for (var i = 0; i < 3; i++) {
        var random = Math.floor(Math.random() * 10);
        id += random;
    }
    for (var i = 0; i < lista.length; i++) {
        if (id === lista[i].getId()) {
            crearId(lista);
        }
    }
    return id;
}
exports.crearId = crearId;
;
