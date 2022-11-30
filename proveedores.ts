import GestorDeArchivos from "./gestorArchivos";

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

let crearId = ( lista) => {
    let id :string = " ";
    for (let i :number = 0; i < 3; i++){
        let random :number = Math.floor(Math.random() * 10);
        id += random;
     } 
     
    for (let i :number = 0; i < lista.length; i++){
        if (id === lista[i].getId()){
            crearId(lista);
        }
     }
 
    return id; 
 };

