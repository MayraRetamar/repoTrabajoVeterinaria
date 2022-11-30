import { crearId } from "./claseCliente";

export default class Mascotas { 
    protected nombre : string;
    protected especie : string;
    protected id : string;
    
    
    constructor (nombre: string, especie: string, id: string) { 
        this.nombre = nombre;
        this.especie = especie;
        this.id = id;
 
     }
    
    public getNombre() : string { 
            return this.nombre;
        }
    
    public getEspecie() : string { 
            return this.especie;
        }
    public getId() : string { 
        return this.id
    }
    
    public setEspecie(nuevaEspecie: string) : void { 
        this.especie = nuevaEspecie;
    }
        
    public asignarEspecie() {

            if (this.especie === "perro" || this.especie === "gato"){
                console.log (this.especie)
            } else  { 
                this.setEspecie("exótica");
            }
        }
      };