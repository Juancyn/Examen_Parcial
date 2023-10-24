export class evento{
    nombre_asistente: string;
    categoria_evento: string;
    salon_asignado: string[]=[];
    equipo_incluido: number;
    equipo_solicitado: string[]=[];

    constructor(){
        this.nombre_asistente= "Juan Vera"
        this.categoria_evento= "Fiesta infantil";
        this.salon_asignado.push("Salon 1", "Salon 2", "Salon 3")
        this.equipo_incluido= 1
        this.equipo_solicitado.push("Equipo 1", "Equipo 2")
}
    imprimir_evento(){
        console.log("")
        console.log(`El nombre del asistente es: ${this.nombre_asistente} 
el eligio el evento ${this.categoria_evento},
con el salon: ${this.salon_asignado[2]}, el equipo incluido en el contrato es: ${this.equipo_incluido}, con el equipo ${this.equipo_solicitado[1]} solicitado`)
        }   
         
}