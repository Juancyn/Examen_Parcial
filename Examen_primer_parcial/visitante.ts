import { atracciones } from "./atracciones" 
export class visitante extends atracciones{
    private _nombre: string
    public get nombre(): string {
        return this._nombre
    }
    public set nombre(value: string) {
        this._nombre = value
    }
    
    private _asiento: number[] = []
    public get asiento(): number[] {
        return this._asiento
    }
    public set asiento(value: number[]) {
        this._asiento = value
    }
 

    constructor(nombre:string){
        super()
        this._nombre=nombre
        this._asiento.push(1 , 2 , 3 ,4)
        }
    
        imprimir_atraccion(): void {
            super.imprimir_atraccion()
            console.log()
            console.log(`El nombre del visitante es: ${this._nombre} con su asiento respectivo el #${this.asiento[1]} y atraccion elegida es: ${this.atraccion[0]} con el regalo: ${this.regalos[2]}`)
            console.log(`Usted realizo la compra de: ${this.comida[3]}`)
            console.log(`El horario selecionado es a las: ${this.horario[0]} en la zona: #${this.zona[2]}`)
        }

}