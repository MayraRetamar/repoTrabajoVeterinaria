import GestorDeArchivos from "./gestordearchivos";

export default class Proveedores {
    
    protected id : string;
    protected nombre : string;
    protected telefono : string;

    
    
    public constructor (id: string, nombre : string , telefono : string){
        this.id = "P" + id;
        this.nombre = nombre;
        this.telefono = telefono;
    }

    public getId():string{
        return this.id;
    }

    public getNombre():string{
        return this.nombre;
    }

    public getTelefono():string{
        return this.telefono;
    }
}

