import GestorDeArchivos from "./gestorArchivos";
import * as ReadLineSync from "readline-sync"

export default class Sucursales {
  
protected id : string;
protected nombre : string;
protected direccion : string;

public constructor (id:string , nombre : string , direccion:string){
    this.id = "S" + id;
    this.nombre = nombre;
    this.direccion= direccion;
}

public getId():string{
    return this.id;
}

public getNombre():string{
    return this.nombre;
}

public getDireccion():string{ 
    return this.direccion;
}
}

